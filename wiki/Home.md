# IVA TIME · آیوا تایم

**Every city. One moment.** · **هر شهر، یک لحظه**

_ساعت جهانی دو‌زبانه با تقویم شمسی، همگام‌سازی NTP، مدیریت شهرها و PWA آفلاین_

---

## 🇮🇷 فارسی

به ویکی **آیوا تایم** خوش آمدید! این ویکی مستندات کامل پروژه را پوشش می‌دهد.

### درباره پروژه

**آیوا تایم v5** یک ساعت جهانی زنده، سریع و زیباست که با HTML، CSS و JavaScript خالص نوشته شده.  
هیچ فریمورک، API Key یا بک‌اند نیاز نیست — فقط فایل‌های استاتیک.

### ویژگی‌های کلیدی

| ویژگی                      | توضیح                                                             |
| -------------------------- | ----------------------------------------------------------------- |
| 🌐 **۳۵ شهر جهان**         | با منطقه زمانی IANA معتبر در ۶ قاره                               |
| 📅 **تقویم شمسی و میلادی** | الگوریتم Borkowski (1996) — دقیق برای سال‌های ۶۱- تا ۳۱۷۷         |
| ⏱️ **همگام‌سازی NTP**      | محاسبه انحراف ساعت با دقت میلی‌ثانیه از Cloudflare و WorldTimeAPI |
| ⭐ **مدیریت شهرها**        | افزودن، حذف، علاقه‌مند کردن و مرتب‌سازی از کل پایگاه IANA         |
| 🤝 **برنامه‌ریز جلسه**     | یافتن ساعت کاری مشترک برای چند منطقه زمانی                        |
| 🧭 **مقایسه ساعت**         | محاسبه دقیق اختلاف ساعت دو شهر                                    |
| 🔗 **اشتراک تنظیمات**      | لینک قابل اشتراک برای شهرها، زبان، تم و تقویم                     |
| 🌗 **تشخیص روز/شب**        | نمایش وضعیت خورشید برای هر شهر                                    |
| 🌍 **دو زبانه**            | فارسی (RTL) و انگلیسی (LTR) با تبدیل اعداد                        |
| 🎨 **حالت روشن/تیره**      | تغییر تم با ذخیره خودکار                                          |
| 📲 **PWA آفلاین**          | نصب روی دستگاه، کار بدون اینترنت                                  |

### راهنمای سریع

| صفحه                                       | توضیح                 |
| ------------------------------------------ | --------------------- |
| [Quick-Start](Quick-Start)                 | شروع در ۵ دقیقه       |
| [World-Clocks](World-Clocks)               | راهنمای ساعت‌های جهان |
| [Calendar-System](Calendar-System)         | تقویم شمسی و میلادی   |
| [NTP-Synchronization](NTP-Synchronization) | همگام‌سازی زمان شبکه  |
| [Bilingual-Support](Bilingual-Support)     | پشتیبانی RTL/LTR      |
| [Architecture](Architecture)               | معماری فنی            |
| [API-Reference](API-Reference)             | توابع JavaScript      |
| [Adding-New-Cities](Adding-New-Cities)     | افزودن شهر جدید       |
| [FAQ](FAQ)                                 | پرسش‌های متداول       |
| [Troubleshooting](Troubleshooting)         | عیب‌یابی              |
| [Changelog](Changelog)                     | تاریخچه نسخه‌ها       |

---

## 🇬🇧 English

Welcome to the **IVA TIME** wiki — complete documentation for v5.

### About the Project

**IVA TIME v5** is a live, fast, beautifully designed world clock built with pure HTML, CSS and JavaScript.  
No framework, no API key, no backend — just static files.

### Quick Links

| Page                                       | Description                   |
| ------------------------------------------ | ----------------------------- |
| [Quick-Start](Quick-Start)                 | Get running in 5 minutes      |
| [World-Clocks](World-Clocks)               | World clocks user guide       |
| [Calendar-System](Calendar-System)         | Jalali & Gregorian calendars  |
| [NTP-Synchronization](NTP-Synchronization) | Network time synchronization  |
| [Bilingual-Support](Bilingual-Support)     | RTL/LTR language support      |
| [Architecture](Architecture)               | Technical architecture        |
| [API-Reference](API-Reference)             | Internal JavaScript functions |
| [Adding-New-Cities](Adding-New-Cities)     | Add custom time zones         |
| [FAQ](FAQ)                                 | Frequently asked questions    |
| [Troubleshooting](Troubleshooting)         | Common issues & fixes         |
| [Changelog](Changelog)                     | Version history               |

---

## ✅ Project Highlights

- **Pure Vanilla JS** — No frameworks, no build step required
- **Zero External Dependencies** — Works everywhere, including offline
- **Bilingual** — Persian (RTL) + English (LTR) with numeral conversion
- **NTP Accuracy** — Millisecond-precise time from Cloudflare + WorldTimeAPI
- **Full IANA Timezone Support** — Any timezone, not just the built-in 35
- **PWA** — Installable, offline-capable, Service Worker cached
- **Accessible** — Keyboard nav, ARIA labels, skip link, semantic HTML
- **Open Source** — MIT License
