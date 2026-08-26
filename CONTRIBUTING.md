# Contributing to IVA TIME · مشارکت در آیوا تایم

## فارسی

### راهنمای مشارکت

1. **Fork و Branch**: مخزن را Fork کنید و یک branch ویژگی متمرکز بسازید.
2. **دو زبانه بودن**: تجربه فارسی و انگلیسی باید معادل و برابر باشند.
3. **دسترسی‌پذیری**: دسترس‌پذیری کیبورد، رفتار واکنشی و پشتیبانی RTL را حفظ کنید.
4. **کیفیت کد**: کد تمیز، مستند و بدون هشدار بنویسید.
5. **توضیح واضح**: مشکل و راه‌حل را واضح توضیح دهید.

### افزودن شهر

برای افزودن شهر جدید، از منطقه زمانی معتبر IANA و کد کشور ISO alpha-2 استفاده کنید.

---

## English

### Contribution Guidelines

1. **Fork & Branch**: Fork the repository and create a focused feature branch.
2. **Bilingual Parity**: Keep Persian and English experiences equivalent.
3. **Accessibility**: Preserve keyboard accessibility, responsive behavior and RTL support.
4. **Code Quality**: Write clean, documented, warning-free code.
5. **Clear Description**: Explain the problem and solution clearly.

### Adding Cities

For city additions, use a valid IANA timezone and ISO alpha-2 country code. Verify the timezone using the [IANA Time Zone Database](https://www.iana.org/time-zones).

### Development Setup

This is a pure static site — no build step, npm, or dependencies required. Simply open `index.html` in a browser or serve with any static server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8000
```

### Pull Request Checklist

- [ ] Both Persian and English text updated equivalently
- [ ] RTL/LTR layouts tested
- [ ] Responsive design verified on mobile
- [ ] No console errors
- [ ] New features documented
