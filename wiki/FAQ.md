# FAQ · سوالات متداول

## 🇮🇷 فارسی

### عمومی

**س: آیوا تایم چیست؟**
ج: آیوا تایم یک ساعت جهانی دو‌زبانه است که زمان شهرهای مختلف جهان را نمایش می‌دهد.

**س: آیا نیاز به نصب دارم؟**
ج: خیر! فقط کافی است فایل index.html را باز کنید.

**س: آیا نیاز به اینترنت دارم؟**
ج: برای نمایش ساعت‌ها خیر، ولی برای همگام‌سازی NTP بله.

**س: آیا رایگان است؟**
ج: بله، تحت مجوز MIT منتشر شده.

### فنی

**س: چرا همگام‌سازی NTP مهم است؟**
ج: ساعت دستگاه شما ممکن است دقیق نباشد. NTP انحراف را محاسبه و اصلاح می‌کند.

**س: چرا اعداد فارسی نمایش داده می‌شوند؟**
ج: این یک ویژگی است! در حالت فارسی، اعداد به ۰۱۲۳۴۵۶۷۸۹ تبدیل می‌شوند.

**س: چرا تقویم جلالی مهم است؟**
ج: ایران و افغانستان از تقویم جلالی استفاده می‌کنند. این تقویم با فصول مطابقت دارد.

**س: چگونه شهر جدید اضافه کنم؟**
ج: فایل app.js را ویرایش کنید و شهر را به لیست P اضافه کنید. راهنمای کامل در [Adding New Cities](Adding-New-Cities).

---

## 🇬🇧 English

### General

**Q: What is IVA TIME?**
A: IVA TIME is a bilingual world clock that displays time for cities around the world.

**Q: Do I need to install anything?**
A: No! Just open the index.html file in your browser.

**Q: Do I need internet?**
A: For clock display, no. For NTP sync, yes.

**Q: Is it free?**
A: Yes, released under MIT License.

### Technical

**Q: Why is NTP sync important?**
A: Your device clock may not be accurate. NTP calculates and corrects the offset.

**Q: Why are Persian numerals displayed?**
A: This is a feature! In Persian mode, numbers are converted to ۰۱۲۳۴۵۶۷۸۹.

**Q: Why is the Jalali calendar important?**
A: Iran and Afghanistan use the Jalali calendar. This calendar aligns with seasons.

**Q: How do I add a new city?**
A: Edit app.js and add the city to the P list. Complete guide at [Adding New Cities](Adding-New-Cities).

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Time is wrong | Check device clock, try NTP sync |
| Persian text broken | Ensure UTF-8 encoding |
| Font not loading | Check network, clear cache |
| Calendar shows wrong month | Refresh page |
| Theme won't change | Try hard refresh (Ctrl+Shift+R) |

---

## 💡 Tips & Tricks

1. **Quick Language Switch**: Press the "فا/EN" button in header
2. **Search**: Type partial city names for quick filtering
3. **NTP Status**: Green dot means synced, yellow means local clock
4. **Today Highlight**: Current date is highlighted in orange
5. **Theme Toggle**: Click ☼ for light/dark mode
