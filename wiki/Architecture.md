# Architecture · معماری

## 🇮🇷 فارسی

### نمای کلی

آیوا تایم یک برنامه **کاملاً سمت کلاینت** (client-side) است — هیچ سرور، بک‌اند یا پایگاه داده‌ای وجود ندارد.

```
index.html                 ← پوسته HTML5 و تمام عناصر UI
  ├── app.js               ← موتور اصلی: تقویم، NTP، ساعت‌ها، i18n
  ├── features.js          ← ویژگی‌های گسترده: مدیریت شهر، علاقه‌مندی، PWA
  ├── style.css            ← سیستم طراحی، grid، تم‌ها، RTL
  ├── features.css         ← استایل پنل‌ها، دیالوگ‌ها، card actions
  ├── header-fixes.css     ← اصلاح چیدمان هدر
  ├── design-polish.css    ← جلوه‌های بصری، marquee، میکرو-انیمیشن
  └── sw.js                ← Service Worker — کش offline
```

### ماژول‌های app.js

| ماژول              | خطوط                            | توضیح                                |
| ------------------ | ------------------------------- | ------------------------------------ |
| **Jalali Engine**  | ابتدای فایل                     | الگوریتم Borkowski برای تبدیل تقویم  |
| **City Data (P)**  | `const P = \`...\``             | ۳۵ شهر با فرمت pipe-separated        |
| **i18n (C)**       | `const C = {...}`               | تمام رشته‌های انگلیسی و فارسی        |
| **NTP Module**     | `TIME_SOURCES` + `doSync()`     | همگام‌سازی Cloudflare → WorldTimeAPI |
| **Clock Renderer** | `render()`                      | رندر کارت‌های ساعت، marquee ticker   |
| **Calendar**       | `renderCal()` + `renderToday()` | رندر گرید تقویم، نمایش امروز         |
| **i18n Engine**    | `translate()`                   | اعمال ترجمه‌ها با `data-i` attribute |
| **Wiring**         | انتهای فایل                     | event listeners، init، setInterval   |

### ماژول‌های features.js

این فایل با IIFE (`(() => { ... })()`) محصور شده تا از namespace آلودگی جلوگیری شود.

| ویژگی            | توضیح                                               |
| ---------------- | --------------------------------------------------- |
| **City Manager** | `renderCityList()` + dialog — هر timezone از IANA   |
| **Favorites**    | `★/☆` روی card — ذخیره در localStorage              |
| **Sort**         | Default / Favorites / Name / UTC offset             |
| **Compare**      | محاسبه اختلاف دقیق دو شهر                           |
| **Planner**      | یافتن ساعت کاری مشترک (بازه ۴۸ ساعته)               |
| **Share**        | URL با `?cities=...&lang=...&theme=...&cal=...`     |
| **URL Params**   | خواندن پارامترهای share از URL                      |
| **PWA Install**  | `beforeinstallprompt` + Service Worker registration |

### جریان داده

```
کاربر اکشن می‌گیرد
       │
       ▼
   Event Handler
       │
  ┌────┴────────────────────┐
  │                         │
  ▼                         ▼
State Update             Render()
(lang, region,          (DOM update)
 calSys, limit...)
       │
  ┌────┴───────────────────────┐
  │                            │
  ▼                            ▼
localStorage              NTP doSync()
  (persist)              (async, every 5min)
```

### حلقه‌های بروزرسانی

```javascript
// حلقه اصلی — هر ثانیه
setInterval(render, 1000);

// حلقه NTP — هر ۵ دقیقه
setInterval(
  () => {
    if (!syncing) doSync($("#syncSrc").value);
  },
  5 * 60 * 1000,
);
```

### سیستم State

متغیرهای global در `app.js` (قابل دسترس برای `features.js`):

| متغیر        | نوع          | پیش‌فرض | توضیح                   |
| ------------ | ------------ | ------- | ----------------------- |
| `lang`       | `'en'\|'fa'` | `'en'`  | زبان جاری               |
| `region`     | string       | `'All'` | فیلتر منطقه             |
| `limit`      | number       | `12`    | تعداد کارت نمایش        |
| `q`          | string       | `''`    | query جستجو             |
| `calSys`     | `'j'\|'g'`   | `'j'`   | سیستم تقویم             |
| `calY, calM` | number       | امروز   | ماه نمایش‌داده‌شده      |
| `offsetMs`   | number       | `0`     | انحراف NTP (میلی‌ثانیه) |
| `syncState`  | object       | —       | وضعیت آخرین sync        |

---

## 🇬🇧 English

### Overview

IVA TIME is a **fully client-side** app — no server, no backend, no database.

```
index.html                 ← HTML5 shell & all UI elements
  ├── app.js               ← Core engine: calendar, NTP, clocks, i18n
  ├── features.js          ← Extended: city manager, favorites, PWA
  ├── style.css            ← Design system, grid, themes, RTL
  ├── features.css         ← Panels, dialogs, card actions
  ├── header-fixes.css     ← Header layout refinements
  ├── design-polish.css    ← Visual polish, marquee, micro-animations
  └── sw.js                ← Service Worker — offline cache
```

### How app.js and features.js communicate

`app.js` exposes globals that `features.js` reads and extends:

- **P** — the cities array (features.js pushes custom cities into it)
- **render()** — features.js calls this after state changes
- **translate()** — features.js calls `ivaAfterTranslate` hook
- **window.ivaPrepareList** — features.js injects sort/filter logic
- **window.ivaCardActions** — features.js injects card HTML (★ button)

### Theme System

```css
/* Dark (default) */
:root {
  --bg: #141512;
  --panel: #1c1d19;
  --ink: #f3f1e9;
  --muted: #9b9d93;
  --line: #353630;
  --orange: #ff5a36;
  --card: #20211d;
}

/* Light */
body.light {
  --bg: #f2f0ea;
  --panel: #faf9f5;
  --ink: #171814;
  --muted: #73766d;
  --line: #d9d8d0;
  --card: #e9e7e0;
}
```

### Responsive Breakpoints

| Breakpoint | Grid      | Notes           |
| ---------- | --------- | --------------- |
| > 1000px   | 4 columns | Full layout     |
| 700–1000px | 3 columns | Calendar stacks |
| < 700px    | 2 columns | Nav hidden      |
| < 450px    | 1 column  | Mobile-first    |

### PWA & Service Worker

`sw.js` uses a **network-first with offline fallback** strategy:

1. Try network → cache successful responses
2. On failure → serve from cache
3. Unknown routes → serve `index.html`

Cache key: `iva-time-v7` (update version to force refresh).

### Security

`Content-Security-Policy` header in `index.html` allows only:

- Self-hosted scripts, styles, fonts
- `connect-src`: Cloudflare edge + WorldTimeAPI (for NTP)
- No inline scripts, no CDNs, no third-party tracking
