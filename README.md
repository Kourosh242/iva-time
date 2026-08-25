<div align="center">
  <img src="assets/iva-logo.svg" width="92" alt="IVA TIME logo">
  <h1>IVA TIME · آیوا تایم</h1>
  <p><strong>Every city. One moment. · هر شهر، یک لحظه</strong></p>
  <p>A premium bilingual world clock with a solar (Jalali) calendar and NTP time sync.</p>
  <p><img alt="HTML" src="https://img.shields.io/badge/HTML5-ready-E34F26?style=flat-square&logo=html5&logoColor=white"> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=111"> <img alt="License" src="https://img.shields.io/badge/license-MIT-ff5a36?style=flat-square"> <img alt="RTL" src="https://img.shields.io/badge/RTL-ready-24a148?style=flat-square"> <img alt="NTP" src="https://img.shields.io/badge/NTP-synced-0f9d58?style=flat-square"></p>
</div>

![IVA TIME repository poster](assets/og.png)

## فارسی

آیوا تایم یک ساعت جهانی زنده، سریع و دو‌زبانه است. رابط فارسی با چیدمان کامل راست‌چین، جست‌وجوی شهر و کشور، فیلتر منطقه‌ای، تشخیص روز و شب، ساعت محلی، حالت روشن/تیره، **تقویم شمسی (جلالی) و میلادی زنده** و **همگام‌سازی زمان با شبکه (NTP)** ارائه می‌شود. هیچ API Key یا سرویس خارجی لازم نیست.

### NTP چیست؟
NTP (Network Time Protocol) پروتکل استاندارد اینترنت برای همگام‌سازی ساعت دستگاه‌ها با سرورهای زمان دقیق (که خود با GPS و ساعت اتمی سنخ‌فاز هستند) است. مرورگرها به سوکت UDP خام (پورت 123) دسترسی ندارند، بنابراین این سایت زمان را با منابع زمانی «سنخ‌فاز با NTP» (لبه‌های Cloudflare و WorldTimeAPI) می‌سنجد، **انحراف (offset)** ساعت محلی شما را با دقت میلی‌ثانیه محاسبه می‌کند و روی همه‌ی ساعت‌های صفحه اعمال می‌کند. وضعیت زنده (منبع، RTT، انحراف) در نوار پایین بخش تقویم نمایش داده می‌شود و هر ۵ دقیقه خودکار تکرار می‌شود.

## English

IVA TIME is a polished bilingual live world clock with Persian RTL and English LTR layouts, search, regional filters, day/night status, local time, themes, a **live Jalali (Persian solar) and Gregorian calendar**, and **NTP network time synchronization** — zero external API keys.

### What is NTP?
NTP (Network Time Protocol) is the Internet's standard protocol for synchronizing clocks against precision time servers (themselves disciplined by GPS and atomic clocks). Browsers cannot open raw UDP sockets (port 123), so this site measures the offset of your local clock against NTP-disciplined network time sources (Cloudflare edge, WorldTimeAPI) with millisecond precision and applies that offset to every clock on the page. The live status bar (source, RTT, offset) sits below the calendar section and re-syncs automatically every 5 minutes.

## Highlights

- Live clocks updated every second
- **Solar (Jalali) + Gregorian calendar** — accurate Borkowski conversion (matches `Intl` `fa-IR-u-ca-persian`), leap-aware Esfand, Saturday-first Persian week, Persian digits, today highlight
- **NTP time sync** — network offset measured and applied to all clocks, live status (source / RTT / offset), 5-minute auto re-sync, graceful local-clock fallback
- Persian / English switch with true RTL / LTR layouts
- Country flags, search, region filters and automatic DST
- Custom SVG logo and repository social poster
- Pure HTML, CSS and JavaScript — no build step
- GitHub Pages workflow included
- Responsive and accessible

## Run locally

Open `index.html` directly, or serve this directory with any static web server.

## cPanel deployment

Upload **all repository files except `.github/`** to `public_html`. No Node.js, database, API key or build step is required.

## GitHub Pages

Set **Pages → Source** to **GitHub Actions**, then push to `main`. The included workflow publishes the site automatically.

## Project structure

```text
index.html           Website structure (hero, clocks, calendar, sync bar, about)
style.css            Responsive visual system
app.js               Clocks, Jalali/Gregorian calendar, NTP sync, bilingual logic
assets/              Logo, social poster, self-hosted Vazirmatn font
.github/workflows/   GitHub Pages automation
```

Read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing. Released under the [MIT License](LICENSE).
