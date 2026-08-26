/* IVA TIME Wiki — client-side SPA
   Renders Markdown pages fetched from the same directory.
   No external dependencies — self-hosted, CSP-safe. */

const pages = [
  "Home",
  "Quick-Start",
  "Installation",
  "World-Clocks",
  "Calendar-System",
  "NTP-Synchronization",
  "Bilingual-Support",
  "Architecture",
  "API-Reference",
  "Adding-New-Cities",
  "FAQ",
  "Troubleshooting",
  "Changelog",
];

const titles = {
  Home: "خانه · Home",
  "Quick-Start": "شروع سریع · Quick Start",
  Installation: "نصب · Installation",
  "World-Clocks": "ساعت‌های جهان · World Clocks",
  "Calendar-System": "سیستم تقویم · Calendar System",
  "NTP-Synchronization": "همگام‌سازی زمان · NTP Sync",
  "Bilingual-Support": "پشتیبانی دوزبانه · Bilingual",
  Architecture: "معماری · Architecture",
  "API-Reference": "مرجع API · API Reference",
  "Adding-New-Cities": "افزودن شهر · Add Cities",
  FAQ: "پرسش‌های متداول · FAQ",
  Troubleshooting: "عیب‌یابی · Troubleshooting",
  Changelog: "تغییرات · Changelog",
};

const esc = (s) =>
  s.replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );

/* ── Inline rendering ─────────────────────────────────────────── */
function inline(text) {
  return (
    text
      /* code spans */
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      /* bold */
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      /* italic */
      .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>")
      /* wiki internal link: [text](PageName) — no protocol, no slash */
      .replace(
        /\[([^\]]+)\]\(([A-Za-z][A-Za-z0-9-]*)\)/g,
        (_, t, p) => `<a href="#${p}" class="wiki-link">${t}</a>`,
      )
      /* external link */
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
        (_, t, u) => `<a href="${u}" target="_blank" rel="noopener">${t}</a>`,
      )
      /* relative image link (./... or ../...) — resolve against base */
      .replace(
        /!\[([^\]]*)\]\((\.\.[^)]+|[^)]+\.(svg|png|jpg|webp|gif))\)/g,
        (_, alt, src) => {
          const resolved = src.startsWith("../")
            ? src.replace("../", "../")
            : src;
          return `<img src="${resolved}" alt="${esc(alt)}" class="wiki-img">`;
        },
      )
  );
}

/* ── Full Markdown renderer ───────────────────────────────────── */
function markdown(source) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  let out = "";
  let inCode = false,
    codeLang = "",
    codeLines = [];
  let inTable = false,
    tableRows = [];
  let inUl = false,
    inOl = false;
  let inBlockquote = false;

  function flushList() {
    if (inUl) {
      out += "</ul>";
      inUl = false;
    }
    if (inOl) {
      out += "</ol>";
      inOl = false;
    }
  }
  function flushTable() {
    if (!inTable) return;
    let html = '<div class="table-wrap"><table>';
    tableRows.forEach((row, i) => {
      if (i === 1 && row.every((c) => /^[-: ]+$/.test(c))) return; // separator row
      const tag = i === 0 ? "th" : "td";
      html +=
        "<tr>" +
        row.map((c) => `<${tag}>${inline(c.trim())}</${tag}>`).join("") +
        "</tr>";
    });
    out += html + "</table></div>";
    inTable = false;
    tableRows = [];
  }
  function flushBlockquote() {
    if (inBlockquote) {
      out += "</blockquote>";
      inBlockquote = false;
    }
  }

  for (let idx = 0; idx < lines.length; idx++) {
    const raw = lines[idx];

    /* ── Fenced code block ── */
    if (raw.startsWith("```")) {
      if (!inCode) {
        flushList();
        flushTable();
        flushBlockquote();
        codeLang = raw.slice(3).trim();
        codeLines = [];
        inCode = true;
      } else {
        const langClass = codeLang ? ` class="language-${esc(codeLang)}"` : "";
        out += `<pre><code${langClass}>${codeLines.map(esc).join("\n")}</code></pre>`;
        inCode = false;
        codeLang = "";
        codeLines = [];
      }
      continue;
    }
    if (inCode) {
      codeLines.push(raw);
      continue;
    }

    /* ── Headings ── */
    const hm = raw.match(/^(#{1,4})\s+(.+)/);
    if (hm) {
      flushList();
      flushTable();
      flushBlockquote();
      const level = hm[1].length;
      const id = hm[2]
        .trim()
        .toLowerCase()
        .replace(/[^\w\u0600-\u06FF]+/g, "-");
      out += `<h${level} id="${id}">${inline(hm[2])}</h${level}>`;
      continue;
    }

    /* ── Horizontal rule ── */
    if (/^---+$/.test(raw.trim())) {
      flushList();
      flushTable();
      flushBlockquote();
      out += "<hr>";
      continue;
    }

    /* ── Table row ── */
    if (raw.trim().startsWith("|") && raw.trim().endsWith("|")) {
      flushList();
      flushBlockquote();
      inTable = true;
      const cells = raw
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|");
      tableRows.push(cells);
      continue;
    }
    if (inTable) {
      flushTable();
    }

    /* ── Blockquote ── */
    if (raw.startsWith("> ")) {
      flushList();
      if (!inBlockquote) {
        out += "<blockquote>";
        inBlockquote = true;
      }
      out += `<p>${inline(raw.slice(2))}</p>`;
      continue;
    }
    if (inBlockquote) flushBlockquote();

    /* ── Unordered list ── */
    if (/^[-*]\s/.test(raw)) {
      if (!inUl) {
        out += "<ul>";
        inUl = true;
      }
      if (inOl) {
        out += "</ol>";
        inOl = false;
      }
      out += `<li>${inline(raw.slice(2))}</li>`;
      continue;
    }

    /* ── Ordered list ── */
    const olm = raw.match(/^\d+\.\s+(.+)/);
    if (olm) {
      if (!inOl) {
        out += "<ol>";
        inOl = true;
      }
      if (inUl) {
        out += "</ul>";
        inUl = false;
      }
      out += `<li>${inline(olm[1])}</li>`;
      continue;
    }

    /* ── HTML pass-through (div align etc.) — strip outer tag only ── */
    if (/^<div\s/i.test(raw.trim())) {
      flushList();
      flushTable();
      flushBlockquote();
      out += raw;
      continue;
    }
    if (/^<\/div>/i.test(raw.trim())) {
      out += raw;
      continue;
    }

    /* ── Blank line ── */
    if (!raw.trim()) {
      flushList();
      flushTable();
      flushBlockquote();
      continue;
    }

    /* ── Paragraph ── */
    flushList();
    flushTable();
    flushBlockquote();
    out += `<p>${inline(raw)}</p>`;
  }

  flushList();
  flushTable();
  flushBlockquote();
  if (inCode && codeLines.length) {
    out += `<pre><code>${codeLines.map(esc).join("\n")}</code></pre>`;
  }
  return out;
}

/* ── Page loader ─────────────────────────────────────────────── */
const nav = document.querySelector("#pages");
const main = document.querySelector("main");
const search = document.querySelector("#search");

nav.innerHTML = pages
  .map((p) => `<a href="#${p}" data-page="${p}">${titles[p]}</a>`)
  .join("");

/* highlight active link */
function setActive(name) {
  nav
    .querySelectorAll("a")
    .forEach((a) => a.classList.toggle("active", a.dataset.page === name));
}

async function load(name) {
  const page = pages.includes(name) ? name : "Home";
  setActive(page);
  document.title = `${titles[page]} · IVA TIME Wiki`;
  main.innerHTML =
    '<div class="loading"><span></span><span></span><span></span></div>';

  try {
    const res = await fetch(`${page}.md`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    main.innerHTML = `<article class="page-content">${markdown(text)}</article>`;
    window.scrollTo({ top: 0, behavior: "smooth" });

    /* make internal wiki links work */
    main.querySelectorAll("a.wiki-link").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const target = a.getAttribute("href").replace("#", "");
        history.pushState(null, "", `#${target}`);
        load(target);
      });
    });
  } catch {
    main.innerHTML = `
      <article class="page-content">
        <h1>صفحه یافت نشد · Page Not Found</h1>
        <p>این صفحه در دسترس نیست. / This page could not be loaded.</p>
        <a href="#Home" class="wiki-link back-btn">← بازگشت به خانه · Back to Home</a>
      </article>`;
  }
}

/* ── Navigation ─────────────────────────────────────────────── */
nav.addEventListener("click", (e) => {
  const a = e.target.closest("a[data-page]");
  if (!a) return;
  e.preventDefault();
  const page = a.dataset.page;
  history.pushState(null, "", `#${page}`);
  load(page);
});

/* ── Search filter ───────────────────────────────────────────── */
search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  nav.querySelectorAll("a").forEach((a) => {
    const match =
      !q ||
      a.textContent.toLowerCase().includes(q) ||
      a.dataset.page.toLowerCase().includes(q);
    a.hidden = !match;
  });
});

/* ── Hash routing ────────────────────────────────────────────── */
window.addEventListener("popstate", () =>
  load(location.hash.slice(1) || "Home"),
);
load(location.hash.slice(1) || "Home");
