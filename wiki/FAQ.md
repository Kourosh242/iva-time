# FAQ · سوالات متداول

## 🇮🇷 فارسی

### عمومی

**آیوا تایم چیست؟**
یک ساعت جهانی دو‌زبانه (فارسی/انگلیسی) زنده است که با HTML، CSS و JavaScript خالص نوشته شده — بدون هیچ وابستگی خارجی.

**آیا نصب لازم است؟**
خیر. فایل `index.html` را مستقیم در مرورگر باز کنید. برای PWA و offline باید از یک سرور HTTP استفاده کنید.

**آیا به اینترنت نیاز دارم؟**
برای نمایش ساعت‌ها: خیر.
برای همگام‌سازی NTP: بله (اتصال به Cloudflare یا WorldTimeAPI).
بعد از اولین بارگذاری و cache شدن توسط Service Worker، بدون اینترنت هم کار می‌کند.

**رایگان است؟**
بله، تحت مجوز MIT منتشر شده — استفاده، تغییر و توزیع آزاد.

---

### فنی

**NTP چیست و چرا مهم است؟**
NTP (Network Time Protocol) پروتکل استاندارد همگام‌سازی ساعت است. ساعت دستگاه شما ممکن است چند ثانیه یا حتی دقیقه انحراف داشته باشد. آیوا تایم این انحراف را اندازه می‌گیرد و روی همه ساعت‌ها اعمال می‌کند.

**چرا مرورگر مستقیم از NTP استفاده نمی‌کند؟**
مرورگرها به سوکت‌های UDP خام (پورت ۱۲۳ — پروتکل اصلی NTP) دسترسی ندارند. آیوا تایم به جای آن از HTTP endpoints که با NTP disciplined هستند استفاده می‌کند (Cloudflare edge + WorldTimeAPI).

**اعداد فارسی چرا نمایش داده می‌شوند؟**
در حالت زبان فارسی، اعداد با تابع `toFa()` تبدیل می‌شوند. این استاندارد نمایش اعداد در فارسی است: ۰۱۲۳۴۵۶۷۸۹

**تقویم شمسی از کجا می‌آید؟**
الگوریتم Borkowski (1996) که در `app.js` پیاده‌سازی شده — بدون هیچ API خارجی. دقیق برای سال‌های جلالی ۶۱- تا ۳۱۷۷.

**چه timezone هایی پشتیبانی می‌شود؟**
همه timezone های استاندارد IANA (بیش از ۵۰۰ گزینه) از طریق City Manager dialog قابل افزودن هستند. ۳۵ شهر به صورت پیش‌فرض موجودند.

**آیا DST (ساعت تابستانی) پشتیبانی می‌شود؟**
بله، به صورت خودکار. از `Intl.DateTimeFormat` مرورگر استفاده می‌شود که همیشه به‌روز است.

**چگونه شهر اضافه کنم؟**
دکمه «＋ مدیریت شهرها» → جستجوی timezone → تیک زدن.
برای راهنمای کامل: [Adding-New-Cities](Adding-New-Cities)

---

## 🇬🇧 English

### General

**What is IVA TIME?**
A live, bilingual (Persian/English) world clock built with pure HTML, CSS, and JavaScript — no frameworks, no external dependencies.

**Installation?**
None needed. Open `index.html` in your browser. Use an HTTP server for PWA/offline features.

**Internet required?**
For clocks: No.
For NTP sync: Yes (Cloudflare or WorldTimeAPI).
After the first load, the Service Worker caches everything for offline use.

**Is it free?**
Yes, MIT License — free to use, modify, and distribute.

---

### Technical

**Why does the city manager show 500+ timezones?**
It uses `Intl.supportedValuesOf('timeZone')` which returns all IANA timezones the browser supports — typically 500+. If the browser doesn't support this API, it falls back to the built-in 35 cities.

**How accurate is the time?**
With NTP sync enabled:

- Cloudflare edge: typically ±50ms
- WorldTimeAPI: typically ±200ms
- Local fallback: depends on your device clock

**How is the offset calculated?**

```javascript
// t0 = before request, t1 = after response
const rtt = t1 - t0;
// serverMs = timestamp from server
const offsetMs = serverMs - (t0 + rtt / 2);
```

This accounts for half the round-trip time, similar to how NTP itself works.

**Why 4 CSS files?**
Each CSS file has a clear responsibility:

- `style.css` — design tokens, layout, base components, RTL
- `features.css` — panels, dialogs, card actions (features.js styles)
- `header-fixes.css` — header-specific layout refinements
- `design-polish.css` — globe, marquee, visual details, dark/light tweaks

**Can I use it without the wiki?**
Yes. The wiki (`wiki/`) is completely optional. The main app is `index.html` + `app.js` + `features.js` + CSS files.
