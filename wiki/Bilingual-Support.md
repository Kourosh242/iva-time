# Bilingual Support · پشتیبانی دو زبانه

## 🇮🇷 فارسی

### زبان‌های پشتیبانی‌شده

| زبان    | کد   | جهت              | اعداد      |
| ------- | ---- | ---------------- | ---------- |
| فارسی   | `fa` | RTL (راست به چپ) | ۰۱۲۳۴۵۶۷۸۹ |
| انگلیسی | `en` | LTR (چپ به راست) | 0123456789 |

### نحوه تغییر زبان

کلیک روی دکمه **«فا»** یا **«EN»** در گوشه هدر — تنظیم در `localStorage` ذخیره می‌شود.

### آنچه در تغییر زبان تغییر می‌کند

1. **جهت صفحه** — `document.documentElement.dir` از `ltr` به `rtl` تغییر می‌کند
2. **زبان صفحه** — `document.documentElement.lang` بروز می‌شود
3. **متن‌ها** — هر عنصر با `data-i` attribute ترجمه می‌شود
4. **placeholder‌ها** — با `data-placeholder` attribute ترجمه می‌شوند
5. **aria-label‌ها** — با `data-aria` attribute ترجمه می‌شوند
6. **اعداد** — در حالت فارسی با `toFa()` تبدیل می‌شوند
7. **فیلترهای منطقه** — نام منطقه‌ها به فارسی نمایش داده می‌شود
8. **عنوان صفحه** — `document.title` تغییر می‌کند

### سیستم ترجمه

تمام رشته‌ها در `app.js` درون آبجکت `C` ذخیره‌اند:

```javascript
const C = {
  en: {
    clocks: "World clocks",
    search: "Search city or country…",
    calJ: "Persian (Jalali)",
    // ...
  },
  fa: {
    clocks: "ساعت‌های جهان",
    search: "جست‌وجوی شهر یا کشور…",
    calJ: "شمسی (جلالی)",
    // ...
  },
};
```

**اعمال ترجمه در HTML:**

```html
<!-- data-i: متن innerText -->
<a data-i="clocks">World clocks</a>

<!-- data-placeholder: placeholder ورودی -->
<input data-placeholder="search" />

<!-- data-aria: aria-label -->
<button data-aria="search" aria-label="Search city or country"></button>
```

### تبدیل اعداد فارسی

```javascript
const toFa = (s) => String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

toFa("12:30:45"); // '۱۲:۳۰:۴۵'
toFa("1405"); // '۱۴۰۵'
toFa("42"); // '۴۲'
```

### فونت Vazirmatn

فونت [Vazirmatn](https://github.com/rastikerdar/vazirmatn) به صورت self-hosted در `assets/fonts/` ذخیره شده:

```css
@font-face {
  font-family: "Vazirmatn";
  src: url("assets/fonts/Vazirmatn-Variable.woff2") format("woff2");
  font-weight: 100 900; /* Variable font — تمام وزن‌ها */
  font-display: swap;
}
```

**مزایا:**

- فونت متغیر (Variable) — یک فایل برای تمام وزن‌ها
- `font-display: swap` — بارگذاری سریع بدون FOIT
- Self-hosted — بدون درخواست به CDN خارجی
- CSP-safe — `font-src 'self'` کافی است

### RTL در CSS

```css
/* جهت‌های وابسته به متن با logical properties */
[dir="rtl"] nav {
  margin-right: auto;
  margin-left: 30px;
}

[dir="rtl"] .globe {
  right: auto;
  left: 20px;
}

/* فلش تقویم در RTL معکوس می‌شود */
[dir="rtl"] .cal-nav button:first-child {
  transform: scaleX(-1);
}

/* فونت برای عناوین RTL */
[dir="rtl"] .hero h1,
[dir="rtl"] .head h2 {
  font-family: Vazirmatn, Arial, sans-serif;
  letter-spacing: 0;
  font-weight: 500;
}
```

---

## 🇬🇧 English

### How Language Switching Works

In `app.js`, the `translate()` function:

```javascript
function translate() {
  const t = C[lang];
  document.title = t.pageTitle;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  // Text content
  document.querySelectorAll("[data-i]").forEach((e) => {
    if (t[e.dataset.i] !== undefined) e.textContent = t[e.dataset.i];
  });

  // Placeholders
  document.querySelectorAll("[data-placeholder]").forEach((e) => {
    if (t[e.dataset.placeholder] !== undefined)
      e.placeholder = t[e.dataset.placeholder];
  });

  // ARIA labels
  document.querySelectorAll("[data-aria]").forEach((e) => {
    if (t[e.dataset.aria] !== undefined)
      e.setAttribute("aria-label", t[e.dataset.aria]);
  });

  // Region filter labels
  document.querySelectorAll("#filters button").forEach((b) => {
    b.textContent =
      lang === "fa" ? REGION_FA[b.dataset.region] : b.dataset.region;
  });

  render();
  renderCal();
  renderToday();
  updateSyncUI();
  if (window.ivaAfterTranslate) window.ivaAfterTranslate();
}
```

### Persistence

Language preference is saved to localStorage:

```javascript
$("#lang").onclick = () => {
  lang = lang === "en" ? "fa" : "en";
  localStorage.setItem("iva-lang", lang);
  translate();
};
```

### Shareable Language via URL

```
?lang=fa   → forces Persian on load
?lang=en   → forces English on load
```

The `features.js` reads this on startup:

```javascript
const params = new URLSearchParams(location.search);
if (params.has("lang") && ["fa", "en"].includes(params.get("lang"))) {
  lang = params.get("lang");
  localStorage.setItem("iva-lang", lang);
}
```

### Accessibility

- Language toggle button has `aria-label` that updates with language
- `document.lang` attribute is always correct for screen readers
- `dir` attribute ensures correct cursor and text-selection behaviour
- Persian numerals are announced correctly by modern screen readers
