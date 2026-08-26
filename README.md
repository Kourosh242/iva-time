<!---
🇮🇷 IVA TIME · آیوا تایم
Bilingual World Clock · ساعت جهانی دو زبانه
Version 4.0 · ۱۴۰۵
-->

<div align="center">

![IVA TIME Logo](assets/iva-logo.svg)

# IVA TIME · آیوا تایم

**Every city. One moment.** · **هر شهر، یک لحظه**

*A premium bilingual world clock with solar calendar and NTP time synchronization*

*ساعت جهانی دو‌زبانه پریمیوم با تقویم شمسی و همگام‌سازی زمان NTP*

---

[![License: MIT](https://img.shields.io/badge/License-MIT-ff5a36?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-Ready-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![RTL Ready](https://img.shields.io/badge/RTL-Ready-24a148?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
[![NTP Synced](https://img.shields.io/badge/NTP-Synced-0f9d58?style=for-the-badge)](https://en.wikipedia.org/wiki/Network_Time_Protocol)
[![Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-232323?style=for-the-badge&logo=github)](https://pages.github.com/)

</div>

---

## 🇮🇷 فارسی · Persian

### درباره آیوا تایم

**آیوا تایم** یک ساعت جهانی زنده، سریع و زیباست که با تمرکز بر کاربران فارسی‌زبان و بین‌المللی طراحی شده است. این پروژه نیازی به API Key، سرور یا پایگاه داده ندارد — فقط HTML، CSS و JavaScript خالص.

### ویژگی‌های کلیدی

| ویژگی | توضیح |
|-------|-------|
| 🌐 **۳۵ شهر جهان** | با منطقه زمانی IANA معتبر |
| 📅 **تقویم شمسی و میلادی** | تبدیل دقیق الگوریتم Borkowski |
| ⏱️ **همگام‌سازی NTP** | محاسبه انحراف ساعت با دقت میلی‌ثانیه |
| 🌗 **تشخیص روز و شب** | نمایش وضعیت خورشید در هر شهر |
| 🔍 **جستجو و فیلتر** | جستجوی شهر و کشور + فیلتر منطقه‌ای |
| 🌍 **دو زبانه** | فارسی (RTL) و انگلیسی (LTR) |
| 🎨 **حالت روشن/تیره** | تغییر آسان تم |
| 📱 **واکنش‌گرا** | سازگار با موبایل و دسکتاپ |
| 🇮🇷 **پرچم کشورها** | نمایش خودکار با Unicode |
| 🔄 **DST خودکار** | به‌روزرسانی خودکار ساعت تابستانی |
| ⭐ **شهرهای محبوب** | افزودن، حذف و مرتب‌سازی شهرهای دلخواه |
| 🧭 **مقایسه ساعت** | محاسبه اختلاف دقیق ساعت دو شهر |
| 🤝 **برنامه‌ریز جلسه** | یافتن ساعت کاری مشترک چند منطقه زمانی |
| 🔗 **اشتراک تنظیمات** | لینک قابل اشتراک برای شهرها، زبان، تم و تقویم |
| 📲 **PWA آفلاین** | نصب روی دستگاه و استفاده بدون اینترنت |

### NTP چیست؟

**NTP (Network Time Protocol)** پروتکل استاندارد اینترنت برای همگام‌سازی ساعت دستگاه‌ها با سرورهای زمان دقیق (که خود با GPS و ساعت اتمی هماهنگ هستند) است.

مرورگرها به سوکت‌های UDP خام (پورت ۱۲۳) دسترسی ندارند، بنابراین این سایت:
1. زمان را از منابع **NTP-disciplined** می‌خواند (لبه Cloudflare و WorldTimeAPI)
2. **انحراف (offset)** ساعت محلی شما را با دقت میلی‌ثانیه محاسبه می‌کند
3. این انحراف را روی همه ساعت‌ها اعمال می‌کند

وضعیت زنده (منبع، RTT، انحراف) در نوار پایین بخش تقویم نمایش داده می‌شود و هر **۵ دقیقه** خودکار تکرار می‌شود.

### الگوریتم تقویم جلالی

پیاده‌سازی الگوریتم **Borkowski (1996)** که:
- برای سال‌های جلالی **-61 تا 3177** دقیق است
- با تقویم `Intl` مروگر در بازه **1800-2256 میلادی** مطابقت دارد
- سال‌های کبیسه جلالی (اسفند ۳۰ روزه) را به درستی محاسبه می‌کند

### نصب و اجرا

**روش ۱: اجرای مستقیم**
```bash
# فایل index.html را در مرورگر باز کنید
```

**روش ۲: سرور محلی**
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### استقرار

#### GitHub Pages
1. تنظیمات مخزن → **Pages** → **Source** → **GitHub Actions**
2. Push به branch `main`
3. گردش‌کار (workflow) به صورت خودکار سایت را منتشر می‌کند

#### cPanel
تمام فایل‌های مخزن (به جز `.github/`) را در `public_html` آپلود کنید.

---

## 🇬🇧 English

### About IVA TIME

**IVA TIME** is a premium, live world clock designed for Persian-speaking users and international audiences alike. This project requires no API keys, server, or database — just pure HTML, CSS, and JavaScript.

### Key Features

| Feature | Description |
|---------|-------------|
| 🌐 **35 World Cities** | Validated against official IANA timezones |
| 📅 **Jalali & Gregorian Calendar** | Borkowski algorithm for precise conversion |
| ⏱️ **NTP Time Sync** | Millisecond-accurate offset measurement |
| 🌗 **Day/Night Indicator** | Sun status for each city |
| 🔍 **Search & Filter** | City/country search + regional filters |
| 🌍 **Bilingual** | Persian (RTL) and English (LTR) |
| 🎨 **Light/Dark Theme** | Easy theme switching |
| 📱 **Responsive** | Works on mobile and desktop |
| 🇮🇷 **Country Flags** | Auto-generated with Unicode |
| 🔄 **Auto DST** | Automatic daylight-saving updates |
| ⭐ **Favorite Cities** | Add, remove and sort preferred time zones |
| 🧭 **Time Comparison** | Calculate the exact difference between cities |
| 🤝 **Meeting Planner** | Find overlapping working hours across time zones |
| 🔗 **Shareable Settings** | Share cities, language, theme and calendar in one link |
| 📲 **Offline PWA** | Install on a device and keep using it offline |

### What is NTP?

**NTP (Network Time Protocol)** is the Internet's standard protocol for synchronizing clocks against precision time servers (disciplined by GPS and atomic clocks).

Since browsers cannot open raw UDP sockets (port 123), this site:
1. Reads time from **NTP-disciplined** sources (Cloudflare edge, WorldTimeAPI)
2. Calculates your local clock's **offset** with millisecond precision
3. Applies that offset to every clock on the page

Live status (source, RTT, offset) displays below the calendar section and re-syncs automatically every **5 minutes**.

### Jalali Calendar Algorithm

Implementation of the **Borkowski (1996)** algorithm which:
- Is accurate for Jalali years **-61 to 3177**
- Matches the browser's `Intl` calendar for **1800-2256 CE**
- Correctly calculates Jalali leap years (Esfand 30 days)

### Installation & Running

**Method 1: Direct Open**
```bash
# Open index.html in your browser
```

**Method 2: Local Server**
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Deployment

#### GitHub Pages
1. Repository Settings → **Pages** → **Source** → **GitHub Actions**
2. Push to `main` branch
3. The workflow automatically publishes the site

#### cPanel
Upload all repository files (except `.github/`) to `public_html`.

---

## 📁 Project Structure · ساختار پروژه

```text
iva-time/
├── index.html              # Website structure
├── style.css               # Responsive visual system
├── app.js                  # Core logic (clocks, calendar, NTP, i18n)
├── assets/
│   ├── iva-logo.svg        # SVG logo with gradient
│   ├── og.png              # Social sharing image
│   └── fonts/
│       └── Vazirmatn-Variable.woff2  # Self-hosted Persian font
├── .github/
│   ├── workflows/
│   │   └── pages.yml       # GitHub Pages automation
│   └── ISSUE_TEMPLATE/
│       └── bug_report.yml  # Bug report template
├── CONTRIBUTING.md         # Contribution guidelines
├── SECURITY.md             # Security policy
├── LICENSE                 # MIT License
└── README.md               # This file
```

---

## 🛠️ Technical Details · جزئیات فنی

### Supported Timezones · منطقه‌های زمانی پشتیبانی‌شده

| Continent | Cities |
|-----------|--------|
| **Americas** | New York, Los Angeles, Toronto, Mexico City, São Paulo, Buenos Aires |
| **Europe** | London, Paris, Berlin, Madrid, Rome, Amsterdam, Stockholm, Istanbul |
| **Middle East** | Dubai, Tehran, Riyadh, Doha |
| **Africa** | Cairo, Lagos, Nairobi, Cape Town, Casablanca |
| **Asia Pacific** | Tokyo, Seoul, Beijing, Singapore, Bangkok, Jakarta, Mumbai, Karachi, Dhaka, Sydney, Perth, Auckland |

### Browser Compatibility · سازگاری مرورگر

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Intl.DateTimeFormat | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | ✅ | ✅ | ✅ | ✅ |
| CSS Grid | ✅ | ✅ | ✅ | ✅ |
| Fetch API | ✅ | ✅ | ✅ | ✅ |
| RTL Support | ✅ | ✅ | ✅ | ✅ |

---

## 📖 Wiki · مستندات

برای مستندات کامل به [Wiki آنلاین پروژه](https://kourosh242.github.io/iva-time/wiki/) مراجعه کنید.

For complete documentation, visit the [online project Wiki](https://kourosh242.github.io/iva-time/wiki/).

### Quick Links · لینک‌های سریع

- [🏠 Homepage](https://kourosh242.github.io/iva-time/)
- [📝 Changelog](./CHANGELOG.md)
- [🐛 Bug Report](./.github/ISSUE_TEMPLATE/bug_report.yml)
- [💡 Feature Request](./.github/ISSUE_TEMPLATE/feature_request.yml)
- [📄 License](./LICENSE)

---

## 🤝 Contributing · مشارکت

Read our [contribution guidelines](./CONTRIBUTING.md) before submitting pull requests.

راهنمای مشارکت ما را قبل از ارسال Pull Request بخوانید.

---

## 📜 License · مجوز

Released under the [MIT License](./LICENSE). Made with ❤️ for the world.

```
MIT License

Copyright (c) 2026 IVA TIME contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software...
```

---

<div align="center">

**🌍 Time connects us all. · زمان، همه‌ی ما را به هم متصل می‌کند.**

*© 2026 IVA TIME · آیوا تایم*

</div>
