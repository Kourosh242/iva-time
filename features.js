/* IVA TIME product features: city manager, favorites, comparison, planner,
   shareable state, persistent preferences and PWA installation. */
(() => {
  "use strict";
  const read = (key, fallback) => {
    try {
      const v = JSON.parse(localStorage.getItem(key));
      return v ?? fallback;
    } catch {
      return fallback;
    }
  };
  const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const zoneLabel = (z) => z.split("/").pop().replaceAll("_", " ");
  const custom = read("iva-custom-cities", []);
  custom.forEach((zone) => {
    if (!P.some((p) => p.zone === zone))
      P.push({
        city: zoneLabel(zone),
        country: "Custom",
        code: "UN",
        zone,
        region: "Other",
      });
  });
  let selected = new Set(
    read(
      "iva-selected-zones",
      P.map((p) => p.zone),
    ),
  );
  let favorites = new Set(read("iva-favorites", []));
  let sortMode = localStorage.getItem("iva-sort") || "default";

  const params = new URLSearchParams(location.search);
  if (params.has("cities"))
    selected = new Set(params.get("cities").split(",").map(decodeURIComponent));
  if (params.has("lang") && ["fa", "en"].includes(params.get("lang"))) {
    lang = params.get("lang");
    localStorage.setItem("iva-lang", lang);
  }
  if (params.has("theme")) {
    document.body.classList.toggle("light", params.get("theme") === "light");
    localStorage.setItem("iva-theme", params.get("theme"));
  }
  if (params.has("cal") && ["j", "g"].includes(params.get("cal")))
    setCalSys(params.get("cal"));

  const offset = (zone, d = new Date(now())) => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(d)
      .reduce((a, x) => ((a[x.type] = x.value), a), {});
    return (
      (Date.UTC(
        +parts.year,
        +parts.month - 1,
        +parts.day,
        +parts.hour,
        +parts.minute,
      ) -
        d.getTime()) /
      60000
    );
  };
  const cityText = (p) => (lang === "fa" ? FA_NAMES[p.city] || p.city : p.city);
  const toast = (message) => {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
  };

  window.ivaPrepareList = (list, d) => {
    list = list.filter((p) => selected.has(p.zone));
    if (sortMode === "favorites")
      list.sort(
        (a, b) =>
          Number(favorites.has(b.zone)) - Number(favorites.has(a.zone)) ||
          cityText(a).localeCompare(cityText(b), lang),
      );
    if (sortMode === "name")
      list.sort((a, b) => cityText(a).localeCompare(cityText(b), lang));
    if (sortMode === "offset")
      list.sort((a, b) => offset(a.zone, d) - offset(b.zone, d));
    return list;
  };
  window.ivaCardActions = (p) =>
    `<div class="card-actions"><button data-favorite="${p.zone}" aria-label="${favorites.has(p.zone) ? "Remove favorite" : "Add favorite"}" title="${lang === "fa" ? "محبوب" : "Favorite"}">${favorites.has(p.zone) ? "★" : "☆"}</button><button data-remove="${p.zone}" aria-label="Remove city" title="${lang === "fa" ? "حذف شهر" : "Remove city"}">×</button></div>`;
  window.ivaAfterTranslate = () => {
    renderFeatureControls();
  };

  $("#grid").addEventListener("click", (e) => {
    const fav = e.target.closest("[data-favorite]");
    if (fav) {
      favorites.has(fav.dataset.favorite)
        ? favorites.delete(fav.dataset.favorite)
        : favorites.add(fav.dataset.favorite);
      save("iva-favorites", [...favorites]);
      render();
      return;
    }
    const remove = e.target.closest("[data-remove]");
    if (remove) {
      selected.delete(remove.dataset.remove);
      save("iva-selected-zones", [...selected]);
      render();
    }
  });

  const supported =
    typeof Intl.supportedValuesOf === "function"
      ? Intl.supportedValuesOf("timeZone")
      : P.map((p) => p.zone);
  function renderCityList(query = "") {
    const needle = query.toLowerCase();
    const zones = supported
      .filter((z) => (z + " " + zoneLabel(z)).toLowerCase().includes(needle))
      .slice(0, 160);
    $("#cityList").innerHTML = zones
      .map(
        (z) =>
          `<label><input type="checkbox" value="${z}" ${selected.has(z) ? "checked" : ""}><span>${zoneLabel(z)}</span><small>${z}</small></label>`,
      )
      .join("");
  }
  $("#manageCities").onclick = () => {
    renderCityList();
    $("#cityDialog").showModal();
  };
  $("#citySearch").oninput = (e) => renderCityList(e.target.value);
  $("#cityList").onchange = (e) => {
    const zone = e.target.value;
    if (e.target.checked) {
      selected.add(zone);
      if (!P.some((p) => p.zone === zone)) {
        P.push({
          city: zoneLabel(zone),
          country: "Custom",
          code: "UN",
          zone,
          region: "Other",
        });
        const c = read("iva-custom-cities", []);
        if (!c.includes(zone)) {
          c.push(zone);
          save("iva-custom-cities", c);
        }
      }
    } else selected.delete(zone);
    save("iva-selected-zones", [...selected]);
    render();
  };
  $("#cityDialog").addEventListener("close", () => render());

  function options() {
    return P.filter((p) => selected.has(p.zone))
      .map((p) => `<option value="${p.zone}">${cityText(p)}</option>`)
      .join("");
  }
  function renderFeatureControls() {
    const first = $("#compareA")?.value,
      second = $("#compareB")?.value;
    $("#compareControls").innerHTML =
      `<select id="compareA">${options()}</select><select id="compareB">${options()}</select>`;
    if (first) $("#compareA").value = first;
    if (second) $("#compareB").value = second;
    $("#compareA").onchange = compare;
    $("#compareB").onchange = compare;
    if ($("#compareB").options.length > 1 && !second)
      $("#compareB").selectedIndex = 1;
    compare();
    $("#plannerCities").innerHTML = P.filter((p) => selected.has(p.zone))
      .map(
        (p, i) =>
          `<label><input type="checkbox" value="${p.zone}" ${i < 3 ? "checked" : ""}> ${cityText(p)}</label>`,
      )
      .join("");
  }
  function compare() {
    const a = $("#compareA"),
      b = $("#compareB");
    if (!a || !b || !a.value || !b.value) return;
    const pa = P.find((p) => p.zone === a.value),
      pb = P.find((p) => p.zone === b.value),
      diff = offset(a.value) - offset(b.value),
      abs = Math.abs(diff),
      h = Math.floor(abs / 60),
      m = abs % 60;
    const amount =
      lang === "fa"
        ? `${toFa(h)} ساعت${m ? ` و ${toFa(m)} دقیقه` : ""}`
        : `${h} hour${h === 1 ? "" : "s"}${m ? ` ${m} minutes` : ""}`;
    $("#compareResult").textContent =
      lang === "fa"
        ? `${cityText(pa)} ${amount} از ${cityText(pb)} ${diff >= 0 ? "جلوتر" : "عقب‌تر"} است.`
        : `${cityText(pa)} is ${amount} ${diff >= 0 ? "ahead of" : "behind"} ${cityText(pb)}.`;
  }
  $("#compareBtn").onclick = () => {
    $("#comparePanel").hidden = false;
    renderFeatureControls();
    $("#comparePanel").scrollIntoView({ behavior: "smooth" });
  };
  $("#plannerBtn").onclick = () => {
    $("#plannerPanel").hidden = false;
    renderFeatureControls();
    $("#plannerPanel").scrollIntoView({ behavior: "smooth" });
  };
  document.querySelectorAll("[data-close]").forEach(
    (b) =>
      (b.onclick = () => {
        $("#" + b.dataset.close).hidden = true;
      }),
  );
  $("#planMeeting").onclick = () => {
    const zones = [
      ...document.querySelectorAll("#plannerCities input:checked"),
    ].map((x) => x.value);
    if (zones.length < 2) {
      toast(
        lang === "fa"
          ? "حداقل دو شهر انتخاب کنید."
          : "Select at least two cities.",
      );
      return;
    }
    const base = new Date(now());
    base.setUTCMinutes(0, 0, 0);
    const rows = [];
    for (let i = 0; i < 48; i++) {
      const d = new Date(base.getTime() + i * 3600000);
      const hours = zones.map(
        (z) =>
          +new Intl.DateTimeFormat("en", {
            timeZone: z,
            hour: "numeric",
            hourCycle: "h23",
          }).format(d),
      );
      if (hours.every((h) => h >= 9 && h < 18)) rows.push({ d, hours });
      if (rows.length === 6) break;
    }
    $("#plannerResults").innerHTML = rows.length
      ? rows
          .map(
            (r) =>
              `<article><b>${new Intl.DateTimeFormat(lang === "fa" ? "fa-IR" : "en", { weekday: "short", month: "short", day: "numeric" }).format(r.d)}</b>${zones.map((z, i) => `<span>${zoneLabel(z)}: ${num(String(r.hours[i]).padStart(2, "0"))}:۰۰</span>`).join("")}</article>`,
          )
          .join("")
      : `<p>${lang === "fa" ? "در ۴۸ ساعت آینده بازه مشترکی پیدا نشد." : "No common working time found in the next 48 hours."}</p>`;
  };

  $("#sort").value = sortMode;
  $("#sort").onchange = (e) => {
    sortMode = e.target.value;
    localStorage.setItem("iva-sort", sortMode);
    render();
  };
  $("#shareBtn").onclick = async () => {
    const url = new URL(location.href);
    url.search = "";
    url.searchParams.set("cities", [...selected].join(","));
    url.searchParams.set("lang", lang);
    url.searchParams.set(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark",
    );
    url.searchParams.set("cal", calSys);
    try {
      await navigator.clipboard.writeText(url);
      toast(lang === "fa" ? "لینک تنظیمات کپی شد." : "Settings link copied.");
    } catch {
      prompt(lang === "fa" ? "این لینک را کپی کنید:" : "Copy this link:", url);
    }
  };

  let installPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    installPrompt = e;
    $("#install").hidden = false;
  });
  $("#install").onclick = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      $("#install").hidden = true;
    }
  };
  if ("serviceWorker" in navigator)
    window.addEventListener("load", () =>
      navigator.serviceWorker.register("./sw.js").catch(() => {}),
    );
  renderFeatureControls();
  translate();
})();
