<!---
IVA TIME · آیوا تایم
Bilingual World Clock · ساعت جهانی دو زبانه
Version 5.0.0 · ۱۴۰۵
-->

<div align="center">

![IVA TIME Logo](assets/iva-logo.svg)

# IVA TIME · آیوا تایم

**Every city. One moment.** · **هر شهر، یک لحظه**

_ساعت جهانی دو‌زبانه با تقویم شمسی، همگام‌سازی NTP، مدیریت شهرها و PWA آفلاین_  
_Bilingual world clock · Jalali/Gregorian calendar · NTP sync · city manager · offline PWA_

---

[![License: MIT](https://img.shields.io/badge/License-MIT-ff5a36?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-5.0.0-ff5a36?style=for-the-badge)](CHANGELOG.md)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-No_Build_Step-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![RTL Ready](https://img.shields.io/badge/RTL-Ready-24a148?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
[![NTP Synced](https://img.shields.io/badge/NTP-Synced-0f9d58?style=for-the-badge)](https://en.wikipedia.org/wiki/Network_Time_Protocol)
[![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)
[![CI](https://img.shields.io/badge/CI-Lint%20%2B%20Tests-232323?style=for-the-badge&logo=github-actions)](https://github.com/Kourosh242/iva-time/actions)
[![Pages](https://img.shields.io/badge/GitHub%20Pages-Live-232323?style=for-the-badge&logo=github)](https://kourosh242.github.io/iva-time/)

</div>

---

## 🇮🇷 فارسی

### درباره آیوا تایم

**آیوا تایم v5** یک ساعت جهانی زنده، سریع و زیباست که با HTML، CSS و JavaScript خالص نوشته شده.  
هیچ فریمورک، API Key، بک‌اند یا پایگاه داده‌ای نیاز نیست — فقط فایل‌های استاتیک.

### ویژگی‌های کلیدی

| ویژگی                      | توضیح                                                     |
| -------------------------- | --------------------------------------------------------- |
| 🌐 **۳۵ شهر جهان**         | با timezone معتبر IANA در ۶ منطقه                         |
| 📅 **تقویم شمسی و میلادی** | الگوریتم Borkowski (1996) — دقیق برای سال‌های ۶۱- تا ۳۱۷۷ |
| ⏱️ **همگام‌سازی NTP**      | Cloudflare edge → WorldTimeAPI، دقت میلی‌ثانیه            |
| 🏙️ **مدیریت شهرها**        | هر timezone از IANA (۵۰۰+) از طریق دیالوگ، بدون کد        |
| ⭐ **علاقه‌مندی‌ها**       | افزودن، حذف و مرتب‌سازی شهرهای دلخواه                     |
| 🧭 **مقایسه ساعت**         | محاسبه دقیق اختلاف ساعت دو شهر                            |
| 🤝 **برنامه‌ریز جلسه**     | یافتن ساعت کاری مشترک در ۴۸ ساعت آینده                    |
| 🔗 **اشتراک تنظیمات**      | لینک قابل اشتراک با شهرها، زبان، تم و تقویم               |
| 🌗 **روز/شب**              | وضعیت خورشید برای هر شهر                                  |
| 🌍 **دو زبانه**            | فارسی (RTL) + انگلیسی (LTR) با تبدیل اعداد                |
| 🎨 **تم روشن/تیره**        | ذخیره خودکار                                              |
| 📲 **PWA آفلاین**          | Service Worker، نصب روی دستگاه                            |

### نصب و راه‌اندازی

**اجرای مستقیم:**

```bash
# فایل index.html را در مرورگر باز کنید
```

**سرور محلی (توصیه‌شده برای PWA):**

```bash
python -m http.server 8000   # Python
npx serve .                  # Node.js
php -S localhost:8000        # PHP
```

### استقرار روی GitHub Pages

1. Settings → **Pages** → Source → **GitHub Actions**
2. Push به branch `main`
3. گردش‌کار به صورت خودکار سایت را منتشر می‌کند

### اجرای تست‌ها

```bash
npm install
npm test        # 6 unit test (تقویم + یکپارچگی)
npm run lint    # ESLint
```

---

## 🇬🇧 English

### About IVA TIME

**IVA TIME v5** is a premium live world clock built with pure HTML, CSS, and JavaScript.  
No framework, no API key, no server, no database — just static files.

### Key Features

| Feature                   | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| 🌐 **35 World Cities**    | Validated IANA timezones across 6 regions               |
| 📅 **Jalali & Gregorian** | Borkowski (1996) algorithm — exact for years -61..3177  |
| ⏱️ **NTP Sync**           | Cloudflare edge → WorldTimeAPI, millisecond accuracy    |
| 🏙️ **City Manager**       | Any IANA timezone (500+) via dialog, no code            |
| ⭐ **Favorites**          | Add, remove, and sort preferred time zones              |
| 🧭 **Time Comparison**    | Exact hour difference between any two cities            |
| 🤝 **Meeting Planner**    | Find overlapping 9–18 working hours in the next 48h     |
| 🔗 **Shareable URL**      | Share cities, language, theme, and calendar in one link |
| 🌗 **Day/Night**          | Sun status indicator for each city                      |
| 🌍 **Bilingual**          | Persian (RTL) + English (LTR) with numeral conversion   |
| 🎨 **Light/Dark**         | Auto-persisted theme                                    |
| 📲 **Offline PWA**        | Service Worker, installable on device                   |

### Installation

**Direct open:**

```bash
# Open index.html in your browser
```

**Local server (recommended for PWA):**

```bash
python -m http.server 8000   # Python
npx serve .                  # Node.js
php -S localhost:8000        # PHP
```

### Deploy to GitHub Pages

1. Repository Settings → **Pages** → Source → **GitHub Actions**
2. Push to `main` branch
3. Workflow deploys automatically

### Run Tests

```bash
npm install
npm test        # 6 unit tests (calendar + project integrity)
npm run lint    # ESLint check
```

---

## 📁 Project Structure · ساختار پروژه

```
iva-time/
├── index.html                        # App shell — semantic HTML5
├── app.js                            # Core: Jalali engine, NTP, clocks, i18n
├── features.js                       # Extended: city manager, favorites, planner, PWA
├── style.css                         # Design system, grid, themes, RTL
├── features.css                      # Panels, dialogs, card actions
├── header-fixes.css                  # Header layout refinements
├── design-polish.css                 # Globe, marquee, micro-animations
├── calendar-core.mjs                 # Standalone Jalali module (ESM, for tests)
├── sw.js                             # Service Worker — network-first offline strategy
├── manifest.webmanifest              # PWA manifest
├── assets/
│   ├── iva-logo.svg                  # SVG logo
│   ├── favicon.svg                   # Favicon
│   ├── og.png                        # OpenGraph image
│   ├── og.svg                        # OpenGraph source
│   └── fonts/
│       └── Vazirmatn-Variable.woff2  # Self-hosted Persian variable font
├── wiki/
│   ├── index.html                    # Wiki SPA shell
│   ├── wiki.js                       # Markdown renderer, routing, search
│   ├── wiki.css                      # Wiki styles
│   ├── Home.md
│   ├── Quick-Start.md
│   ├── Installation.md
│   ├── World-Clocks.md
│   ├── Calendar-System.md
│   ├── NTP-Synchronization.md
│   ├── Bilingual-Support.md
│   ├── Architecture.md
│   ├── API-Reference.md
│   ├── Adding-New-Cities.md
│   ├── FAQ.md
│   ├── Troubleshooting.md
│   ├── Changelog.md
│   └── _Sidebar.md
├── tests/
│   ├── calendar.test.mjs             # Jalali calendar unit tests
│   └── project.test.mjs             # Project integrity tests
├── .github/
│   ├── workflows/
│   │   ├── pages.yml                 # GitHub Pages deploy
│   │   ├── quality.yml               # Lint + test CI
│   │   └── lighthouse.yml            # Lighthouse audit (on PRs)
│   └── ISSUE_TEMPLATE/
├── CHANGELOG.md
├── CONTRIBUTING.md
├── DEPLOYMENT.md
├── SECURITY.md
├── LICENSE
└── README.md
```

---

## 🛠️ Technical Details · جزئیات فنی

### Architecture

```
index.html
  ├── app.js        — Jalali engine · NTP · clock render · i18n · P data
  ├── features.js   — city manager · favorites · planner · share · PWA install
  ├── style.css     — design tokens · layout · RTL · responsive
  ├── features.css  — panels · dialogs · card buttons
  └── sw.js         — Service Worker · cache-first offline
```

`features.js` extends the globals exposed by `app.js` (`P`, `render`, `translate`, `FA_NAMES`, etc.) via well-defined window hooks (`ivaPrepareList`, `ivaCardActions`, `ivaAfterTranslate`).

### NTP Sync Flow

```
Browser → Cloudflare cdn-cgi/trace (ts= unix seconds)
       ↓ fail
       → WorldTimeAPI /api/timezone/Etc/UTC (datetime field)
       ↓ fail
       → local device clock (offsetMs = 0)

offsetMs = serverMs − (Date.now() − rtt / 2)
```

Syncs automatically every 5 minutes. Manual sync via the "Sync now" button.

### Jalali Calendar Algorithm

Port of [jalaali-js](https://github.com/jalaali/jalaali-js) v2 (MIT).  
Borkowski (1996) — exact for years **−61..3177**, matches `Intl` `fa-IR-u-ca-persian` for **1800–2256 CE**.

### Supported Timezones

35 cities pre-loaded. Any IANA timezone (500+) addable via the **City Manager** dialog.

| Region       | Cities                                                                                              |
| ------------ | --------------------------------------------------------------------------------------------------- |
| Americas     | New York, Los Angeles, Toronto, Mexico City, São Paulo, Buenos Aires                                |
| Europe       | London, Paris, Berlin, Madrid, Rome, Amsterdam, Stockholm, Istanbul                                 |
| Middle East  | Dubai, Tehran, Riyadh, Doha                                                                         |
| Africa       | Cairo, Lagos, Nairobi, Cape Town, Casablanca                                                        |
| Asia Pacific | Tokyo, Seoul, Beijing, Singapore, Bangkok, Jakarta, Mumbai, Karachi, Dhaka, Sydney, Perth, Auckland |

### Browser Compatibility

| Feature               | Chrome 80+ | Firefox 75+ | Safari 13+ | Edge 80+ |
| --------------------- | ---------- | ----------- | ---------- | -------- |
| Intl.DateTimeFormat   | ✅         | ✅          | ✅         | ✅       |
| CSS Custom Properties | ✅         | ✅          | ✅         | ✅       |
| CSS Grid              | ✅         | ✅          | ✅         | ✅       |
| Service Worker        | ✅         | ✅          | ✅         | ✅       |
| RTL                   | ✅         | ✅          | ✅         | ✅       |

---

## 📖 Wiki · مستندات

مستندات کامل: [ویکی آنلاین](https://kourosh242.github.io/iva-time/wiki/)  
Full documentation: [online Wiki](https://kourosh242.github.io/iva-time/wiki/)

---

## 🔗 Links · لینک‌ها

- [🏠 Live Demo](https://kourosh242.github.io/iva-time/)
- [📖 Wiki](https://kourosh242.github.io/iva-time/wiki/)
- [📝 Changelog](CHANGELOG.md)
- [🗺️ Roadmap](ROADMAP.md)
- [🤝 Contributing](CONTRIBUTING.md)
- [🔒 Security](SECURITY.md)
- [📄 License](LICENSE)

---

## 🤝 Contributing · مشارکت

راهنمای مشارکت: [CONTRIBUTING.md](CONTRIBUTING.md)  
Contribution guide: [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📜 License · مجوز

[MIT License](LICENSE) · Made with ❤️ for the world

---

<div align="center">

**🌍 Time connects us all. · زمان، همه‌ی ما را به هم متصل می‌کند.**

_© 2026 IVA TIME · آیوا تایم · v5.0.0_

</div>
