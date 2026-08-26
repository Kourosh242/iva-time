# Calendar System · سیستم تقویم

## 🇮🇷 فارسی

### انواع تقویم

آیوا تایم از دو نوع تقویم پشتیبانی می‌کند:

#### ۱. تقویم شمسی (جلالی)

- نام‌های ماه‌ها: فروردین، اردیبهشت، خرداد، تیر، مرداد، شهریور، مهر، آبان، آذر، دی، بهمن، اسفند
- هفته از **شنبه** شروع می‌شود (Saturday-first)
- سال‌های کبیسه: اسفند ۳۰ روزه
- اعداد فارسی در نمایش

#### ۲. تقویم میلادی (Gregorian)

- نام‌های ماه‌ها: January, February, March, ...
- هفته از **یکشنبه** شروع می‌شود (Sunday-first)
- سال‌های کبیسه: فوریه ۲۹ روزه

### الگوریتم تبدیل

پروژه از الگوریتم **Borkowski (1996)** برای تبدیل بین تقویم‌ها استفاده می‌کند:

```
g2j(gy, gm, gd) → [jy, jm, jd]  // Gregorian to Jalali
j2g(jy, jm, jd) → [gy, gm, gd]  // Jalali to Gregorian
```

### ویژگی‌های تقویم

| ویژگی              | توضیح                            |
| ------------------ | -------------------------------- |
| نمایش امروز        | تاریخ امروز با هایلایت نارنجی    |
| تاریخ امروز متقابل | نمایش تاریخ معادل در تقویم دیگر  |
| پیمایش ماه         | فلش‌های چپ/راست برای ماه قبل/بعد |
| سال کبیسه          | تشخیص خودکار سال‌های کبیسه       |

---

## 🇬🇧 English

### Calendar Types

IVA TIME supports two calendar systems:

#### 1. Jalali (Persian Solar) Calendar

- Month names: Farvardin, Ordibehesht, Khordad, Tir, Mordad, Shahrivar, Mehr, Aban, Azar, Dey, Bahman, Esfand
- Week starts on **Saturday** (Saturday-first)
- Leap years: Esfand has 30 days
- Persian numerals in display

#### 2. Gregorian Calendar

- Month names: January, February, March, ...
- Week starts on **Sunday** (Sunday-first)
- Leap years: February has 29 days

### Conversion Algorithm

The project uses the **Borkowski (1996)** algorithm for calendar conversion:

```
g2j(gy, gm, gd) → [jy, jm, jd]  // Gregorian to Jalali
j2g(jy, jm, jd) → [gy, gm, gd]  // Jalali to Gregorian
```

### Calendar Features

| Feature          | Description                               |
| ---------------- | ----------------------------------------- |
| Today Display    | Current date highlighted in orange        |
| Cross-date       | Shows equivalent date in other calendar   |
| Month Navigation | Left/right arrows for previous/next month |
| Leap Year        | Automatic leap year detection             |

---

## 📅 Jalali Leap Years

The Jalali calendar has leap years approximately every 33 years. The leap year pattern:

```
Jalali year % 33 ∈ {1, 5, 9, 13, 17, 22, 26, 30} → Leap year
```

### Recent & Upcoming Leap Years

| Jalali Year | Gregorian Year | Esfand Days |
| ----------- | -------------- | ----------- |
| 1399        | 2020-2021      | 30          |
| 1400        | 2021-2022      | 29          |
| 1401        | 2022-2023      | 29          |
| 1402        | 2023-2024      | 30          |
| 1403        | 2024-2025      | 29          |
| 1404        | 2025-2026      | 29          |
| 1405        | 2026-2027      | 30          |
| 1406        | 2027-2028      | 29          |

---

## 🔢 Persian Numerals

IVA TIME converts Western numerals to Persian (Arabic-Indic) numerals:

```
0 1 2 3 4 5 6 7 8 9
۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹
```

This conversion is applied in the Persian (RTL) language mode.

---

## 📊 Technical Details

### Julian Day Number (JDN) System

The calendar uses the Julian Day Number system for all conversions:

1. Convert Gregorian date to JDN
2. Convert JDN to Jalali date
3. Or reverse the process

This ensures accurate date arithmetic across all systems.

### Accuracy

The algorithm is:

- **Exact** for Jalali years -61 to 3177
- **Verified** against `Intl.DateTimeFormat` with `calendar: 'persian'` for 1800-2256 CE
- **Leap-aware** for both Gregorian and Jalali systems
