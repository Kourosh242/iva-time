# Changelog · تاریخچه تغییرات

فرمت بر اساس [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) است.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [5.0.0] — ۱۴۰۵ / 2026

### اضافه‌شده · Added

- **City Manager dialog** — افزودن هر timezone از پایگاه کامل IANA (بیش از ۵۰۰ گزینه)
- **Custom cities persistence** — شهرهای سفارشی در `localStorage` ذخیره می‌شوند
- **Favorites system** — علاقه‌مند کردن شهرها با ستاره `★/☆`
- **Sort modes** — Default / Favorites / Name / UTC offset
- **Time comparison** — محاسبه دقیق اختلاف ساعت دو شهر
- **Meeting planner** — یافتن ساعت کاری مشترک در بازه ۴۸ ساعته
- **Shareable settings URL** — پارامترهای `?cities=...&lang=...&theme=...&cal=...`
- **Marquee ticker** — نوار اسکرول‌شونده ساعت‌های زنده
- **design-polish.css** — جلوه‌های بصری تکمیلی و میکرو-انیمیشن‌ها
- **header-fixes.css** — اصلاح چیدمان هدر
- **Wiki SPA** — ویکی کامل با مارکداون رندرر سفارشی، بدون CDN
- **PWA Service Worker** — کش offline با استراتژی network-first
- **GitHub Actions workflows** — CI (lint+test) + Pages deploy + Lighthouse audit
- **ESLint** — کیفیت کد با `eslint.config.js`
- **Tests** — 6 unit test برای تقویم جلالی و یکپارچگی پروژه

### تغییرات · Changed

- **CSS به ۴ فایل تقسیم شد** — `style.css`, `features.css`, `header-fixes.css`, `design-polish.css`
- **تم روشن** — بازطراحی کامل رنگ‌های light mode
- **NTP status bar** — نمایش RTT، offset، منبع و زمان آخرین sync
- **Calendar** — نمایش تاریخ معادل در تقویم دیگر برای هر روز
- **Globe animation** — بهبود جلوه‌های بصری
- **Responsive** — بهبود چیدمان در صفحات کوچک‌تر

---

## [2.0.0] — ۱۴۰۳ / 2024

### اضافه‌شده · Added

- تقویم زنده شمسی و میلادی
- همگام‌سازی NTP از Cloudflare + WorldTimeAPI
- نوار وضعیت NTP با نمایش RTT و offset
- ۳۵ شهر در ۶ منطقه جهانی
- فیلتر منطقه‌ای
- جستجوی شهر و کشور
- نشانگر روز/شب
- اعداد فارسی با `toFa()`
- فونت Vazirmatn (self-hosted)
- تم روشن/تیره

### تغییرات · Changed

- بازطراحی کامل رابط کاربری
- بهبود واکنش‌گرایی موبایل
- بهینه‌سازی رندر

---

## [1.0.0] — اولین انتشار / Initial Release

### اضافه‌شده · Added

- ساعت‌های جهانی پایه
- پشتیبانی دو زبانه (فارسی/انگلیسی)
- طراحی واکنش‌گرا
- تم تاریک
- پرچم کشورها (Unicode Emoji)
