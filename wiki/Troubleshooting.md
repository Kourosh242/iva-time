# Troubleshooting · عیب‌یابی

## 🇮🇷 فارسی

### مشکلات رایج و راه‌حل‌ها

#### ❌ زمان اشتباه است

**راه‌حل‌ها:**

1. ساعت دستگاه خود را بررسی کنید
2. روی "همگام‌سازی" کلیک کنید
3. اگر زمان هنوز اشتباه است، منطقه زمانی دستگاه را بررسی کنید
4. "منبع" را روی "خودکار" تنظیم کنید

#### ❌ متن فارسی درست نمایش داده نمی‌شود

**راه‌حل‌ها:**

1. مطمئن شوید مرورگر UTF-8 را پشتیبانی می‌کند
2. کش مرورگر را پاک کنید
3. از Chrome یا Firefox آخرین نسخه استفاده کنید
4. Encoding مرورگر را روی UTF-8 تنظیم کنید

#### ❌ فونت Vazirmatn بارگذاری نمی‌شود

**راه‌حل‌ها:**

1. اتصال اینترنت خود را بررسی کنید
2. کش را پاک کنید
3. Ctrl+Shift+R را برای رفرش سخت بزنید
4. فایل font را مستقیم بررسی کنید: `/assets/fonts/Vazirmatn-Variable.woff2`

#### ❌ همگام‌سازی NTP انجام نمی‌شود

**راه‌حل‌ها:**

1. اتصال اینترنت را بررسی کنید
2. مطمئن شوید دسترسی به `cloudflare.com` و `worldtimeapi.org` باز است
3. "منبع" را روی "فقط ساعت محلی" تغییر دهید (fallback)
4. بعداً دوباره تلاش کنید

#### ❌ تقویم ماه اشتباه را نشان می‌دهد

**راه‌حل‌ها:**

1. صفحه را رفرش کنید
2. از فلش‌های ‹ › برای پیمایش استفاده کنید
3. نوع تقویم (شمسی/میلادی) را بررسی کنید

#### ❌ تم تغییر نمی‌کند

**راه‌حل‌ها:**

1. Ctrl+Shift+R برای رفرش سخت
2. کش CSS را پاک کنید
3. مطمئن شوید JavaScript فعال است

---

## 🇬🇧 English

### Common Problems & Solutions

#### ❌ Time is incorrect

**Solutions:**

1. Check your device clock
2. Click "Sync now" button
3. If still wrong, verify device timezone
4. Set "Source" to "Auto"

#### ❌ Persian text displays incorrectly

**Solutions:**

1. Ensure browser supports UTF-8
2. Clear browser cache
3. Use latest Chrome or Firefox
4. Set browser encoding to UTF-8

#### ❌ Vazirmatn font not loading

**Solutions:**

1. Check internet connection
2. Clear cache
3. Hard refresh: Ctrl+Shift+R
4. Check font file directly: `/assets/fonts/Vazirmatn-Variable.woff2`

#### ❌ NTP sync not working

**Solutions:**

1. Check internet connection
2. Ensure access to `cloudflare.com` and `worldtimeapi.org`
3. Set "Source" to "Local clock only" (fallback)
4. Try again later

#### ❌ Calendar shows wrong month

**Solutions:**

1. Refresh page
2. Use ‹ › arrows for navigation
3. Check calendar type (Jalali/Gregorian)

#### ❌ Theme won't change

**Solutions:**

1. Hard refresh: Ctrl+Shift+R
2. Clear CSS cache
3. Ensure JavaScript is enabled

---

## 🐛 Debug Mode

To help with troubleshooting, you can access internal state:

```javascript
// In browser console:
const state = window.state ? state() : null;
console.log(state);
```

This will show:

- Current language
- Selected region
- Calendar system
- NTP offset and status
- All configuration

---

## 📞 Still Having Issues?

1. Check [GitHub Issues](https://github.com/Kourosh242/iva-time/issues)
2. Create a new issue with bug report template
3. Include browser, OS, and reproduction steps
