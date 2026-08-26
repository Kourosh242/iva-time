# Bilingual Support · پشتیبانی دو زبانه

## 🇮🇷 فارسی

### زبان‌های پشتیبانی‌شده

| زبان | کد | جهت | اعداد |
|------|-----|------|-------|
| فارسی | `fa` | RTL (راست به چپ) | اعداد فارسی (۰۱۲۳۴۵۶۷۸۹) |
| انگلیسی | `en` | LTR (چپ به راست) | اعداد عربی (0123456789) |

### ویژگی‌های RTL

هنگامی که زبان فارسی انتخاب می‌شود:
1. **جهت متن** (`dir`) به `rtl` تغییر می‌کند
2. **فونت** به Vazirmatn تغییر می‌کند
3. **چیدمان** عناصر تغییر می‌کند:
   - منو از سمت چپ به راست
   - فلش‌های تقویم معکوس می‌شوند
   - گلوب در سمت چپ قرار می‌گیرد
4. **حروف فارسی** به درستی نمایش داده می‌شوند

### عناصر ترجمه‌شده

تمام متن‌های کاربردی در هر دو زبان موجود هستند:

| کلید | فارسی | انگلیسی |
|------|-------|---------|
| clocks | ساعت‌های جهان | World clocks |
| about | درباره | About |
| calendar | تقویم | Calendar |
| lead | توضیحات | Description |
| search | جستجو... | Search... |
| today | امروز | Today |

### فونت Vazirmatn

[Vazirmatn](https://github.com/rastikerdg/vazirmatn) یک فونت متن‌باز فارسی است که:
- به صورت محلی (self-hosted) میزبانی می‌شود
- متغیر (Variable) است و تمام وزن‌ها را دارد
- از UTF-8 پشتیبانی می‌کند
- عملکرد عالی در وب دارد

---

## 🇬🇧 English

### Supported Languages

| Language | Code | Direction | Numerals |
|----------|------|-----------|----------|
| Persian | `fa` | RTL (Right-to-Left) | Persian numerals (۰۱۲۳۴۵۶۷۸۹) |
| English | `en` | LTR (Left-to-Right) | Arabic numerals (0123456789) |

### RTL Features

When Persian language is selected:
1. **Text direction** (`dir`) changes to `rtl`
2. **Font** changes to Vazirmatn
3. **Layout** elements adjust:
   - Navigation moves from left to right
   - Calendar arrows are reversed
   - Globe moves to the left side
4. **Persian text** displays correctly

### Translated Elements

All user-facing text is available in both languages:

| Key | Persian | English |
|-----|---------|---------|
| clocks | ساعت‌های جهان | World clocks |
| about | درباره | About |
| calendar | تقویم | Calendar |
| lead | توضیحات | Description |
| search | جستجو... | Search... |
| today | امروز | Today |

### Vazirmatn Font

[Vazirmatn](https://github.com/rastikerdg/vazirmatn) is an open-source Persian font that:
- Is self-hosted locally
- Is variable (Variable) with all weights
- Supports UTF-8
- Has excellent web performance

---

## 🔧 Implementation Details

### Language Detection

```javascript
// Default language
let lang = 'en';

// Switch language
function toggleLanguage() {
  lang = lang === 'en' ? 'fa' : 'en';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  translate();
}
```

### Translation System

```javascript
const C = {
  en: { /* English strings */ },
  fa: { /* Persian strings */ }
};

// Apply translations
function translate() {
  const t = C[lang];
  document.querySelectorAll('[data-i]').forEach(e => {
    if (t[e.dataset.i] !== undefined) {
      e.textContent = t[e.dataset.i];
    }
  });
}
```

### Persian Numeral Conversion

```javascript
const toFa = s => String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[+d]);
// "2024" → "۲۰۲۴"
```

### RTL CSS

```css
/* Persian (RTL) specific styles */
[dir="rtl"] body {
  font-family: Vazirmatn, Arial, sans-serif;
}

[dir="rtl"] nav {
  margin-right: auto;
  margin-left: 30px;
}

[dir="rtl"] .globe {
  right: auto;
  left: 20px;
}
```

---

## 🌐 Browser Language Detection

IVA TIME respects the browser's language preference on first load:

```javascript
// Check browser language
const browserLang = navigator.language || navigator.userLanguage;
// Default to English, Persian if 'fa' detected
const defaultLang = browserLang.startsWith('fa') ? 'fa' : 'en';
```

---

## 📱 Accessibility

- Language can be toggled via keyboard (button focus)
- Screen readers announce language changes
- RTL/LTR is properly conveyed to assistive technologies
- All text alternatives are provided for visual elements
