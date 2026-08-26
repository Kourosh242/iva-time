# Quick Start · شروع سریع

## 🇮🇷 فارسی

### روش ۱: اجرای مستقیم (بدون سرور)

فایل `index.html` را در مرورگر باز کنید — تمام! هیچ نصبی لازم نیست.

> ⚠️ برخی ویژگی‌ها مثل PWA و Service Worker به سرور HTTP نیاز دارند.

### روش ۲: سرور محلی (توصیه‌شده)

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

سپس به `http://localhost:8000` بروید.

### روش ۳: GitHub Pages

1. ریپو را Fork کنید
2. Settings → Pages → Source → **GitHub Actions**
3. Push به branch `main`
4. سایت در `https://username.github.io/iva-time/` در دسترس است

### راهنمای سریع استفاده

**ساعت‌های جهان:**

- **تغییر زبان** — دکمه «فا/EN» در هدر
- **جستجو** — نام شهر یا کشور را تایپ کنید (فارسی یا انگلیسی)
- **فیلتر منطقه** — دکمه‌های All / Americas / Europe / ...
- **نمایش بیشتر** — دکمه «نمایش ساعت‌های بیشتر»
- **تم** — دکمه ☼ برای روشن/تیره
- **علاقه‌مند** — دکمه ★ روی کارت هر شهر
- **مدیریت شهرها** — دکمه «＋ مدیریت شهرها» برای افزودن timezone دلخواه
- **مرتب‌سازی** — منوی Sort (Default / Favorites / Name / UTC offset)
- **اشتراک** — دکمه «Share settings» برای کپی لینک قابل اشتراک

**تقویم:**

- **تغییر ماه** — فلش‌های ‹ و ›
- **تغییر نوع** — بین شمسی (جلالی) و میلادی
- **همگام‌سازی** — دکمه «همگام‌سازی» یا تغییر منبع

**مقایسه و برنامه‌ریز:**

- **مقایسه ساعت** — دکمه «Compare time» + انتخاب دو شهر
- **برنامه‌ریز جلسه** — دکمه «Meeting planner» + انتخاب شهرها + «Find suitable times»

---

## 🇬🇧 English

### Method 1: Direct Open

Open `index.html` in your browser. No installation needed.

> ⚠️ PWA features (Service Worker, offline) require an HTTP server.

### Method 2: Local Server (Recommended)

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Visit `http://localhost:8000`.

### Method 3: GitHub Pages

1. Fork the repository
2. Settings → Pages → Source → **GitHub Actions**
3. Push to `main` branch
4. Site available at `https://username.github.io/iva-time/`

### Quick Usage

**World Clocks:**

- **Language** — Click «فا/EN» in header
- **Search** — Type city or country name (Persian or English)
- **Filter** — Use region buttons (All / Americas / Europe / ...)
- **Show more** — Click "Show more clocks ＋"
- **Theme** — Click ☼ to toggle light/dark
- **Favorites** — Click ★ on any clock card
- **Manage cities** — "＋ Manage cities" to add any IANA timezone
- **Sort** — Sort dropdown (Default / Favorites / Name / UTC offset)
- **Share** — "Share settings" copies a shareable link

**Calendar:**

- **Navigate** — Use ‹ › arrows for previous/next month
- **Switch type** — Toggle between Persian (Jalali) and Gregorian
- **Sync** — Click "Sync now" or change source

**Compare & Planner:**

- **Compare** — "Compare time" → select two cities
- **Planner** — "Meeting planner" → select cities → "Find suitable times"

---

## 📱 Browser Support

| Browser       | Min Version | Status             |
| ------------- | ----------- | ------------------ |
| Chrome / Edge | 80+         | ✅ Fully supported |
| Firefox       | 75+         | ✅ Fully supported |
| Safari        | 13+         | ✅ Fully supported |
| Mobile Chrome | 80+         | ✅ Tested          |
| Mobile Safari | 13+         | ✅ Tested          |

---

## ⚠️ Common First-Run Issues

| مشکل / Issue                                  | راه‌حل / Solution                                            |
| --------------------------------------------- | ------------------------------------------------------------ |
| زمان بروز نمی‌شود / Time not updating         | صفحه را رفرش کنید / Refresh the page                         |
| فونت بارگذاری نمی‌شود / Font not loading      | از سرور HTTP استفاده کنید / Use an HTTP server               |
| همگام‌سازی NTP ناموفق / NTP sync fails        | اتصال اینترنت را بررسی کنید / Check internet connection      |
| نصب PWA ظاهر نمی‌شود / Install button missing | فقط روی HTTPS و localhost فعال است / HTTPS or localhost only |
