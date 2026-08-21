<div align="center">
  <img src="assets/iva-logo.svg" width="92" alt="IVA TIME logo">
  <h1>IVA TIME · آیوا تایم</h1>
  <p><strong>Every city. One moment. · هر شهر، یک لحظه</strong></p>
  <p>A premium bilingual world clock for the open web.</p>
  <p><img alt="HTML" src="https://img.shields.io/badge/HTML5-ready-E34F26?style=flat-square&logo=html5&logoColor=white"> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=111"> <img alt="License" src="https://img.shields.io/badge/license-MIT-ff5a36?style=flat-square"> <img alt="RTL" src="https://img.shields.io/badge/RTL-ready-24a148?style=flat-square"></p>
</div>

![IVA TIME repository poster](assets/og.png)

## فارسی

آیوا تایم یک ساعت جهانی زنده، سریع و دو‌زبانه است. رابط فارسی با چیدمان کامل راست‌چین، جست‌وجوی شهر و کشور، فیلتر منطقه‌ای، تشخیص روز و شب، ساعت محلی و حالت روشن/تیره ارائه می‌شود. هیچ API Key یا سرویس خارجی لازم نیست.

## English

IVA TIME is a polished bilingual live world clock with Persian RTL and English LTR layouts, search, regional filters, day/night status, local time, themes, and zero external API keys.

## Highlights

- Live clocks updated every second
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
index.html           Website structure
style.css            Responsive visual system
app.js               Clocks, filters and bilingual logic
assets/              Logo and social poster
.github/workflows/   GitHub Pages automation
```

Read [CONTRIBUTING.md](CONTRIBUTING.md) before contributing. Released under the [MIT License](LICENSE).
