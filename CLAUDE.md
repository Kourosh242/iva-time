# Architecture Decision Records · سوابق تصمیم معماری

## ADR-001: استفاده از JavaScript خالص

**تاریخ**: ۱۴۰۵
**وضعیت**: ✅ پذیرفته شده

### زمینه

نیاز به یک ساعت جهانی بدون وابستگی‌های خارجی

### تصمیم

استفاده از Vanilla JavaScript، CSS و HTML بدون framework

### دلایل

- **بدون وابستگی**: کاهش آسیب‌پذیری‌های امنیتی
- **سادگی**: نگهداری آسان‌تر
- **عملکرد**: بارگذاری سریع‌تر
- **مستقل**: کار در هر محیطی

### پیامدها

- کد JavaScript بیشتر
- مدیریت دستی DOM
- بدون hot reload در توسعه

---

## ADR-002: پشتیبانی از NTP برای همگام‌سازی زمان

**تاریخ**: ۱۴۰۵
**وضعیت**: ✅ پذیرفته شده

### زمینه

ساعت دستگاه کاربر ممکن است دقیق نباشد

### تصمیم

همگام‌سازی زمان با منابع NTP-disciplined

### راه‌حل

1. Cloudflare edge (اولیه)
2. WorldTimeAPI (fallback)
3. ساعت محلی (آخرین fallback)

### دلایل

- دقت میلی‌ثانیه
- بدون نیاز به API key
- قابل اعتماد

---

## ADR-003: الگوریتم Borkowski برای تقویم جلالی

**تاریخ**: ۱۴۰۵
**وضعیت**: ✅ پذیرفته شده

### زمینه

نیاز به تبدیل دقیق بین تقویم‌های جلالی و میلادی

### تصمیم

استفاده از الگوریتم Borkowski (1996)

### دلایل

- دقت بالا (سال‌های -61 تا 3177)
- سازگار با Intl API مرورگر
- بدون وابستگی خارجی

---

## ADR-004: فونت Vazirmatn

**تاریخ**: ۱۴۰۵
**وضعیت**: ✅ پذیرفته شده

### زمینه

نیاز به فونت فارسی با کیفیت

### تصمیم

استفاده از Vazirmatn به صورت self-hosted

### دلایل

- متن‌باز و رایگان
- پشتیبانی از متغیرها (variable)
- عملکرد عالی در وب
- Persian-friendly

### جایگزین‌های رد شده

- Google Fonts: نیاز به اینترنت
- Web Yazd: پشتیبانی کمتر
- IRANSans: لایسنس محدود

---

## ADR-005: RTL/LTR با CSS direction

**تاریخ**: ۱۴۰۵
**وضعیت**: ✅ پذیرفته شده

### زمینه

پشتیبانی کامل از زبان فارسی با RTL

### تصمیم

استفاده از `dir="rtl"` و `lang="fa"`

### دلایل

- ساده و استاندارد
- پشتیبانی مرورگرها
- بدون نیاز به کتابخانه

### CSS مورد نیاز

```css
[dir="rtl"] nav {
  direction: rtl;
}
[dir="rtl"] .globe {
  right: auto;
  left: 20px;
}
```

---

## ADR-006: بدون localStorage/cookies

**تاریخ**: ۱۴۰۵
**وضعیت**: ✅ پذیرفته شده

### زمینه

عدم نیاز به ذخیره‌سازی داده کاربر

### تصمیم

عدم استفاده از localStorage یا cookies

### دلایل

- حریم خصوصی بهتر
- بدون tracking
- ساده‌تر
- کش مرورگر کافی است

---

## 🇬🇧 English

### ADR-001: Pure JavaScript

**Date**: 2025
**Status**: ✅ Accepted

### Context

Need for a world clock without external dependencies

### Decision

Use Vanilla JavaScript, CSS, and HTML without frameworks

### Rationale

- **No dependencies**: Reduced security vulnerabilities
- **Simplicity**: Easier maintenance
- **Performance**: Faster loading
- **Independent**: Works anywhere

---

### ADR-002: NTP Time Synchronization

**Date**: 2025
**Status**: ✅ Accepted

### Context

User device clock may not be accurate

### Decision

Sync time with NTP-disciplined sources

### Solution

1. Cloudflare edge (primary)
2. WorldTimeAPI (fallback)
3. Local clock (last resort)

---

### ADR-003: Borkowski Algorithm for Jalali Calendar

**Date**: 2025
**Status**: ✅ Accepted

### Context

Need for precise conversion between Jalali and Gregorian calendars

### Decision

Use Borkowski (1996) algorithm

### Rationale

- High accuracy (years -61 to 3177)
- Compatible with browser Intl API
- No external dependencies

---

### ADR-004: Vazirmatn Font

**Date**: 2025
**Status**: ✅ Accepted

### Context

Need for quality Persian font

### Decision

Use Vazirmatn self-hosted

### Rationale

- Open source and free
- Variable font support
- Excellent web performance
- Persian-friendly
