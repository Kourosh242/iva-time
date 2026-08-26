# Changelog · تاریخچه تغییرات

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.0.0] - 2026-08-26

### Added · افزوده شده

- انیمیشن حرکت نرم برای نوار تیکر (marquee) بالای صفحه با تکرار بی‌نقص
- توقف انیمیشن مارکیو روی هاور و احترام به `prefers-reduced-motion`

### Fixed · اصلاح شده (تم روش / Light theme)

- دکمه‌های اکشن (مدیریت شهرها، مقایسه، برنامه‌ریز، پیش‌فرض/مرتب‌سازی، اشتراک تنظیمات) که در تم روش پس‌زمینه تیره و متن نامرئی داشتند
- پس‌زمینه نوار مارکیو که در تم روش تیره می‌ماند
- رنگ‌بندی About section (پس‌زمینه، متن، عنوان‌ها) در تم روش
- کارت‌های ساعت در تم روش (حاشیه، سایه، حالت هاور)
- سلول‌های تقویم و برجسته‌سازی امروز در تم روش
- پنل‌های ابزار (compare/planner)، پلنر نتایج و لیست شهرها در تم روش
- دیالوگ مدیریت شهرها (پس‌زمینه، backdrop، دکمه‌ها) در تم روش
- دکمه‌های ناوبری تقویم (ماه قبل/بعد)، sync bar، select ها و toast در تم روش
- هدر (دکمه‌های تم/زبان/نصب، backdrop و لینک‌های ناوبری) در تم روش
- بهبود کنتراست رنگ‌های تأکیدی (gold/cyan/violet) برای خوانایی در تم روش
- فیلترهای جست‌وجو (دکمه‌های منطقه) و دکمه «نمایش بیشتر» در تم روش
- بامپ cache نسخه به v7 برای بارگذاری فایل‌های جدید در مرورگر

---

## [4.1.0] - 2026-08-26

### Redesigned · بازطراحی

- هویت بصری تکنولوژیک مشکی و طلایی با رنگ‌های مکمل کنترل‌شده
- کره مداری جدید، کارت‌های ساعت رنگ‌بندی‌شده و هدر حرفه‌ای‌تر
- تعادل بهتر میان معرفی برند و دسترسی سریع به ابزارها
- لوگو، Favicon و رنگ‌های نصب PWA هماهنگ با طراحی جدید
- بهبود چیدمان و خوانایی در دسکتاپ و موبایل

## [4.0.2] - 2026-08-26

### Fixed · اصلاح شده

- حذف متن فارسی ثابت از حالت English در برند و عنوان صفحه
- افزودن آیکون نصب و جلوگیری از بیرون‌زدن متن دکمه در دسکتاپ و موبایل
- به‌روزرسانی cache برای نمایش فوری فایل‌های ظاهری جدید

### Improved · بهبود یافته

- بازطراحی هدر، کارت ساعت‌ها، دکمه‌ها، تقویم و پنل‌های ابزار
- بهبود Hover، عمق بصری، فاصله‌گذاری و نمایش موبایل

## [4.0.0] - 2026-08-26

### Added · افزوده شده

- مدیریت منطقه‌های زمانی، حذف شهر و محبوب‌های پایدار
- مقایسه اختلاف ساعت و برنامه‌ریز جلسه چندشهری
- مرتب‌سازی، لینک اشتراک تنظیمات و ذخیره کامل ترجیحات
- PWA آفلاین و نصب‌شونده
- Wiki مستقل و بدون CDN
- CSP، دسترسی صفحه‌کلید و کاهش حرکت
- تست خودکار، ESLint، Prettier و Lighthouse CI

### Changed · تغییر یافته

- تکمیل ترجمه فارسی شهرها، کشورها، تاریخ‌ها و کنترل‌ها
- اصلاح تعداد شهرهای پیش‌فرض به ۳۵

## [2.0.0] - 1405 / 2025

### Added · افزوده شده

- ✅ **Live Jalali and Gregorian Calendar** - تقویم زنده شمسی و میلادی
  - Borkowski (1996) algorithm implementation
  - Saturday-first Persian week
  - Persian numerals display
  - Today highlight with orange border
  - Cross-date display (shows equivalent in other calendar)

- ✅ **NTP Time Synchronization** - همگام‌سازی زمان NTP
  - Cloudflare edge time source
  - WorldTimeAPI fallback
  - RTT (Round-Trip Time) measurement
  - Millisecond-accurate offset calculation
  - Live status bar (source, RTT, offset)
  - Auto re-sync every 5 minutes
  - Manual sync button

- ✅ **Enhanced World Clocks** - ساعت‌های جهان بهبودیافته
  - 38 cities across 6 regions
  - Day/night indicator
  - Country flags with Unicode
  - Search functionality
  - Regional filters (Americas, Europe, Middle East, Africa, Asia Pacific)
  - "Show more" pagination

- ✅ **Bilingual Support** - پشتیبانی دو زبانه
  - Complete Persian (RTL) translations
  - Complete English (LTR) translations
  - Persian numerals (۰۱۲۳۴۵۶۷۸۹)
  - True RTL layout with Vazirmatn font

- ✅ **Professional Documentation** - مستندات حرفه‌ای
  - Comprehensive bilingual README
  - 13-page Wiki documentation
  - Contribution guidelines
  - Security policy
  - Feature request template
  - Bug report template

### Changed · تغییر یافته

- 🎨 **Redesigned UI** - طراحی مجدد رابط کاربری
  - New hero section with gradient globe
  - Improved card design
  - Better typography hierarchy
  - Enhanced calendar panel

- 📱 **Improved Responsiveness** - واکنش‌گرایی بهبودیافته
  - Better mobile layouts
  - Optimized breakpoints
  - Touch-friendly controls

- ⚡ **Performance** - عملکرد
  - Optimized render loop
  - Reduced DOM updates
  - Efficient calendar calculations

### Fixed · رفع شده

- 🐛 RTL layout issues
- 🐛 Calendar navigation direction
- 🐛 Search filtering behavior

---

## [1.0.0] - Initial Release · انتشار اولیه

### Added · افزوده شده

- 🌐 Basic world clocks
- 🌍 Bilingual support (Persian/English)
- 📱 Responsive design
- 🎨 Dark theme
- 🇮🇷 Country flags
- 🔍 City search
- 🎨 Light/dark theme toggle

---

## 📋 Versioning · نسخه‌بندی

We use [Semantic Versioning](https://semver.org/):

```
MAJOR.MINOR.PATCH
2.0.0
│ │ └─ Patch: Bug fixes
│ └─── Minor: New features (backwards compatible)
└───── Major: Breaking changes
```

### Version History · تاریخچه نسخه‌ها

| Version | Date | Jalali Year | Status        |
| ------- | ---- | ----------- | ------------- |
| 2.0.0   | 2025 | ۱۴۰۴        | 🎉 Current    |
| 1.0.0   | 2024 | ۱۴۰۳        | ⚠️ Deprecated |

---

## 🔄 Release Process · فرآیند انتشار

1. Create release branch: `release/v2.x.x`
2. Test all features thoroughly
3. Update CHANGELOG.md
4. Create GitHub release with release notes
5. Merge to main branch
6. Deploy to GitHub Pages via workflow

---

## 🐛 Reporting Issues · گزارش مشکلات

Found a bug? Please report it using our [Bug Report Template](./.github/ISSUE_TEMPLATE/bug_report.yml).

Please include:

- Browser name and version
- Device type (mobile/desktop)
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 💡 Suggesting Features · پیشنهاد ویژگی

Have an idea? Use our [Feature Request Template](./.github/ISSUE_TEMPLATE/feature_request.yml).

---

**Full Changelog**: https://github.com/Kourosh242/iva-time/commits/main
