# Architecture · معماری

## 🇮🇷 فارسی

### نمای کلی

آیوا تایم یک برنامه **کاملاً سمت کلاینت** (client-side) است که از سه فایل اصلی تشکیل شده:

```
┌─────────────────────────────────────────────┐
│                  index.html                  │
│  ┌─────────────────────────────────────────┐ │
│  │              style.css                   │ │
│  │  ┌─────────────────────────────────────┐ │ │
│  │  │              app.js                  │ │ │
│  │  │  ┌─────────────────────────────────┐ │ │ │
│  │  │  │  Calendar Engine (Jalali/Greg)  │ │ │ │
│  │  │  ├─────────────────────────────────┤ │ │ │
│  │  │  │  NTP Synchronization Module     │ │ │ │
│  │  │  ├─────────────────────────────────┤ │ │ │
│  │  │  │  Clock Renderer                 │ │ │ │
│  │  │  ├─────────────────────────────────┤ │ │ │
│  │  │  │  i18n (Bilingual) System        │ │ │ │
│  │  │  └─────────────────────────────────┘ │ │ │
│  │  └─────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

### ساختار فایل‌ها

#### index.html
- ساختار سمانتیک HTML5
- شامل تمام عناصر UI
- بدون JavaScript inline

#### style.css
- متغیرهای CSS برای تم‌ها
- Grid و Flexbox برای چیدمان
- Media queries برای واکنش‌گرایی
- RTL styles برای فارسی

#### app.js
- منطق تجاری کامل
- موتور تقویم جلالی
- ماژول همگام‌سازی NTP
- سیستم دو زبانی

### ماژول‌ها

| ماژول | توضیح |
|-------|-------|
| Calendar Engine | تبدیل بین تقویم‌های Jalali و Gregorian |
| NTP Module | همگام‌سازی زمان شبکه |
| Clock Renderer | رندر ساعت‌ها و تقویم |
| i18n System | مدیریت ترجمه‌ها |
| Search/Filter | جستجو و فیلتر شهرها |

---

## 🇬🇧 English

### Overview

IVA TIME is a **fully client-side** application built from three main files:

```
┌─────────────────────────────────────────────┐
│                  index.html                  │
│  ┌─────────────────────────────────────────┐ │
│  │              style.css                   │ │
│  │  ┌─────────────────────────────────────┐ │ │
│  │  │              app.js                  │ │ │
│  │  │  ┌─────────────────────────────────┐ │ │ │
│  │  │  │  Calendar Engine (Jalali/Greg)  │ │ │ │
│  │  │  ├─────────────────────────────────┤ │ │ │
│  │  │  │  NTP Synchronization Module     │ │ │ │
│  │  │  ├─────────────────────────────────┤ │ │ │
│  │  │  │  Clock Renderer                 │ │ │ │
│  │  │  ├─────────────────────────────────┤ │ │ │
│  │  │  │  i18n (Bilingual) System        │ │ │ │
│  │  │  └─────────────────────────────────┘ │ │ │
│  │  └─────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

### File Structure

#### index.html
- Semantic HTML5 structure
- Contains all UI elements
- No inline JavaScript

#### style.css
- CSS variables for theming
- Grid and Flexbox for layout
- Media queries for responsiveness
- RTL styles for Persian

#### app.js
- Complete business logic
- Jalali calendar engine
- NTP sync module
- Bilingual system

### Modules

| Module | Description |
|--------|-------------|
| Calendar Engine | Conversion between Jalali and Gregorian calendars |
| NTP Module | Network time synchronization |
| Clock Renderer | Clock and calendar rendering |
| i18n System | Translation management |
| Search/Filter | City search and filtering |

---

## 📊 Data Flow

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   User       │────►│  Input       │────►│  Business    │
│   Action     │◄────│  Handler     │◄────│  Logic       │
└──────────────┘     └──────────────┘     └──────────────┘
                                                  │
                     ┌────────────────────────────┤
                     │                            │
                     ▼                            ▼
              ┌──────────────┐           ┌──────────────┐
              │   NTP        │           │   DOM        │
              │   Sync       │           │   Update     │
              └──────────────┘           └──────────────┘
```

---

## 🔄 Update Loop

```javascript
// Main render loop - updates every second
setInterval(render, 1000);

// NTP sync loop - every 5 minutes
setInterval(() => {
  if (!syncing) doSync();
}, 5 * 60 * 1000);
```

---

## 🎨 Theme System

```css
:root {
  --bg: #141512;      /* Background */
  --panel: #1c1d19;   /* Panel backgrounds */
  --ink: #f3f1e9;     /* Text color */
  --muted: #9b9d93;   /* Muted text */
  --line: #353630;    /* Borders */
  --orange: #ff5a36;  /* Accent color */
  --card: #20211d;    /* Card backgrounds */
}

body.light {
  --bg: #f2f0ea;
  --panel: #faf9f5;
  --ink: #171814;
  --muted: #73766d;
  --line: #d9d8d0;
  --card: #e9e7e0;
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| > 1000px | Full 4-column grid, side-by-side calendar |
| 700-1000px | 3-column grid, stacked calendar |
| < 700px | 2-column grid, mobile nav hidden |
| < 450px | Single column grid |
