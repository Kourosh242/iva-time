# Troubleshooting Guide · راهنمای عیب‌یابی

## 🇮🇷 فارسی

### مشکلات رایج و راه‌حل‌ها

---

## ❌ مشکلات نمایش

### صفحه سفید است

**راه‌حل:**

1. بررسی کنید `index.html` در ریشه وجود دارد
2. Console مرورگر را باز کنید (F12)
3. خطاهای JavaScript را بررسی کنید

### CSS اعمال نمی‌شود

**راه‌حل:**

1. Ctrl+Shift+R برای رفرش سخت
2. کش مرورگر را پاک کنید
3. فایل `style.css` را بررسی کنید

### تصاویر نمایش داده نمی‌شوند

**راه‌حل:**

1. مسیر تصاویر را بررسی کنید
2. نام فایل‌ها را تأیید کنید
3. کنسول را برای خطاهای 404 بررسی کنید

---

## ❌ مشکلات زمان

### زمان اشتباه است

**راه‌حل:**

1. ساعت سیستم را بررسی کنید
2. منطقه زمانی سیستم را تأیید کنید
3. روی "همگام‌سازی" کلیک کنید
4. منبع را روی "خودکار" تنظیم کنید

### تقویم ماه اشتباه را نشان می‌دهد

**راه‌حل:**

1. صفحه را رفرش کنید
2. نوع تقویم را بررسی کنید
3. با فلش‌ها پیمایش کنید

---

## ❌ مشکلات NTP

### "در حال همگام‌سازی..." متوقف می‌شود

**راه‌حل:**

1. اتصال اینترنت را بررسی کنید
2. دیوار آتش را بررسی کنید
3. از "ساعت محلی" به عنوان fallback استفاده کنید

### همیشه "ساعت محلی" نمایش داده می‌شود

**راه‌حل:**

1. دسترسی به `cloudflare.com` را بررسی کنید
2. دسترسی به `worldtimeapi.org` را بررسی کنید
3. VPN را غیرفعال کنید

---

## ❌ مشکلات فارسی

### متن فارسی به هم ریخته است

**راه‌حل:**

1. Encoding مرورگر را روی UTF-8 تنظیم کنید
2. از Chrome یا Firefox استفاده کنید
3. کش را پاک کنید

### اعداد فارسی نمایش داده نمی‌شوند

**راه‌حل:**

1. زبان را روی "فا" تنظیم کنید
2. فونت Vazirmatn را بررسی کنید

### فونت Vazirmatn بارگذاری نمی‌شود

**راه‌حل:**

1. فایل `assets/fonts/Vazirmatn-Variable.woff2` را بررسی کنید
2. اتصال اینترنت را تأیید کنید
3. از کش CDN استفاده نکنید

---

## ❌ مشکلات RTL

### چیدمان RTL کار نمی‌کند

**راه‌حل:**

1. زبان را روی "فا" تغییر دهید
2. `dir="rtl"` را در DevTools بررسی کنید
3. Ctrl+Shift+R بزنید

### جهت متن اشتباه است

**راه‌حل:**

1. `lang="fa"` و `dir="rtl"` را بررسی کنید
2. DevTools Elements را باز کنید
3. مقادیر را تأیید کنید

---

## ❌ مشکلات موبایل

### در موبایل کار نمی‌کند

**راه‌حل:**

1. مرورگر را آپدیت کنید
2. JavaScript را فعال کنید
3. از Chrome Mobile استفاده کنید

### عناصر کوچک هستند

**راه‌حل:**

1. Zoom مرورگر را بررسی کنید
2. viewport meta tag را تأیید کنید

### Nav نمایش داده نمی‌شود

**راه‌حل:**

- این رفتار عادی است! Nav در موبایل مخفی می‌شود
- از لینک‌های داخلی صفحه استفاده کنید

---

## 🔧 ابزارهای دیباگ

### Console Commands

```javascript
// بررسی وضعیت
state();

// زمان فعلی
new Date();

// offset NTP
offsetMs;

// منبع زمانی فعلی
syncState;

// زبان فعلی
lang;
```

### DevTools Checklist

- [ ] Elements → HTML structure
- [ ] Console → JavaScript errors
- [ ] Network → Failed requests
- [ ] Sources → Debugging

---

## 📞 پشتیبانی

اگر مشکل حل نشد:

1. [GitHub Issues](https://github.com/Kourosh242/iva-time/issues)
2. [Discussion](https://github.com/Kourosh242/iva-time/discussions)
3. شامل کنید:
   - مرورگر و نسخه
   - سیستم‌عامل
   - مراحل بازتولید
   - اسکرین‌شات

---

## 🇬🇧 English

### Common Issues & Solutions

---

## ❌ Display Issues

### Blank page

**Solution:**

1. Check `index.html` exists in root
2. Open browser console (F12)
3. Check for JavaScript errors

### CSS not applied

**Solution:**

1. Ctrl+Shift+R for hard refresh
2. Clear browser cache
3. Verify `style.css` exists

### Images not loading

**Solution:**

1. Check image paths
2. Verify filenames
3. Check console for 404 errors

---

## ❌ Time Issues

### Time is wrong

**Solution:**

1. Check system clock
2. Verify system timezone
3. Click "Sync now"
4. Set source to "Auto"

### Calendar shows wrong month

**Solution:**

1. Refresh page
2. Check calendar type
3. Use arrows to navigate

---

## ❌ NTP Issues

### "Syncing..." stuck

**Solution:**

1. Check internet connection
2. Check firewall
3. Use "Local clock" as fallback

### Always "Local clock"

**Solution:**

1. Check access to `cloudflare.com`
2. Check access to `worldtimeapi.org`
3. Disable VPN

---

## ❌ Persian Issues

### Persian text garbled

**Solution:**

1. Set browser encoding to UTF-8
2. Use Chrome or Firefox
3. Clear cache

### Persian numerals not showing

**Solution:**

1. Set language to "فا"
2. Check Vazirmatn font

### Vazirmatn font not loading

**Solution:**

1. Check `assets/fonts/Vazirmatn-Variable.woff2`
2. Verify internet connection
3. Don't use CDN cache

---

## ❌ RTL Issues

### RTL layout not working

**Solution:**

1. Change language to "فا"
2. Check `dir="rtl"` in DevTools
3. Press Ctrl+Shift+R

---

## ❌ Mobile Issues

### Not working on mobile

**Solution:**

1. Update browser
2. Enable JavaScript
3. Use Chrome Mobile

### Nav not showing

**Solution:**

- This is expected! Nav is hidden on mobile
- Use in-page links instead

---

## 🔧 Debug Tools

```javascript
// Check state
state();

// Current time
new Date();

// NTP offset
offsetMs;

// Current language
lang;
```
