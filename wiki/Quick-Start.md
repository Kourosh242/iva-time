# Quick Start · شروع سریع

## 🇮🇷 فارسی

### روش ۱: اجرای مستقیم (بدون سرور)

1. فایل `index.html` را در مرورگر باز کنید
2. تمام! هیچ نصبی لازم نیست

### روش ۲: سرور محلی

```bash
# Python (توصیه‌شده)
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000

# Go
go run github.com/shurcooL/goexec@latest
```

سپس به آدرس `http://localhost:8000` بروید.

### استفاده از ساعت‌های جهان

1. **تغییر زبان**: روی دکمه «فا» یا «EN» در هدر کلیک کنید
2. **جستجو**: نام شهر یا کشور را در کادر جستجو تایپ کنید
3. **فیلتر منطقه**: از دکمه‌های فیلتر (Americas, Europe, ...) استفاده کنید
4. **نمایش بیشتر**: روی «نمایش ساعت‌های بیشتر» کلیک کنید
5. **تم**: روی دکمه ☼ برای تغییر بین روشن/تیره کلیک کنید

### استفاده از تقویم

1. **تغییر ماه**: از فلش‌های ‹ و › استفاده کنید
2. **تغییر نوع تقویم**: بین شمسی و میلادی سوئیچ کنید
3. **همگام‌سازی NTP**: روی «همگام‌سازی» کلیک کنید

---

## 🇬🇧 English

### Method 1: Direct Open (No Server)

1. Open `index.html` in your browser
2. That's it! No installation required

### Method 2: Local Server

```bash
# Python (recommended)
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000

# Go
go run github.com/shurcooL/goexec@latest
```

Then visit `http://localhost:8000`.

### Using World Clocks

1. **Change Language**: Click "فا" or "EN" button in the header
2. **Search**: Type city or country name in the search box
3. **Filter Region**: Use filter buttons (Americas, Europe, ...)
4. **Show More**: Click "Show more clocks" button
5. **Theme**: Click ☼ button to toggle light/dark mode

### Using the Calendar

1. **Change Month**: Use ‹ and › arrows
2. **Switch Calendar Type**: Toggle between Jalali and Gregorian
3. **NTP Sync**: Click "Sync now" button

---

## 📱 Browser Requirements

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 80+ | ✅ Tested |
| Firefox | 75+ | ✅ Tested |
| Safari | 13+ | ✅ Tested |
| Edge | 80+ | ✅ Tested |
| Opera | 68+ | ✅ Should work |
| Mobile Safari | 13+ | ✅ Tested |
| Chrome Mobile | 80+ | ✅ Tested |

---

## ⚠️ Common Issues

| Issue | Solution |
|-------|----------|
| Time not updating | Refresh page, check NTP sync status |
| Wrong timezone | Verify your device's timezone setting |
| Persian text broken | Ensure UTF-8 encoding |
| Fonts not loading | Check network connection for font files |
| Search not working | Clear browser cache |
