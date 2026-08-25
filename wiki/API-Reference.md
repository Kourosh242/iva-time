# API Reference · مرجع API

## 🇮🇷 فارسی

> **توجه**: آیوا تایم یک برنامه سمت کلاینت است و API HTTP ندارد. این صفحه مرجع توابع JavaScript داخلی است.

### توابع تقویم

#### `g2j(gy, gm, gd)`
تبدیل تاریخ میلادی به جلالی

```javascript
// Input: [year, month, day]
const jalali = g2j(2024, 8, 25);
// Output: [1403, 6, 4]
```

#### `j2g(jy, jm, jd)`
تبدیل تاریخ جلالی به میلادی

```javascript
// Input: [year, month, day]
const gregorian = j2g(1403, 6, 4);
// Output: [2024, 8, 25]
```

#### `jalLeap(jy)`
بررسی سال کبیسه جلالی

```javascript
jalLeap(1403); // Output: 0 (not leap)
jalLeap(1404); // Output: 1 (leap year)
```

#### `jalMonthLen(jy, jm)`
طول ماه جلالی

```javascript
jalMonthLen(1403, 12); // Output: 29 or 30 (depends on leap year)
jalMonthLen(1403, 6);  // Output: 31
```

---

## 🇬🇧 English

> **Note**: IVA TIME is a client-side application and has no HTTP API. This page documents internal JavaScript functions.

### Calendar Functions

#### `g2j(gy, gm, gd)`
Convert Gregorian to Jalali date

```javascript
// Input: [year, month, day]
const jalali = g2j(2024, 8, 25);
// Output: [1403, 6, 4]
```

#### `j2g(jy, jm, jd)`
Convert Jalali to Gregorian date

```javascript
// Input: [year, month, day]
const gregorian = j2g(1403, 6, 4);
// Output: [2024, 8, 25]
```

#### `jalLeap(jy)`
Check Jalali leap year

```javascript
jalLeap(1403); // Output: 0 (not leap)
jalLeap(1404); // Output: 1 (leap year)
```

#### `jalMonthLen(jy, jm)`
Get Jalali month length

```javascript
jalMonthLen(1403, 12); // Output: 29 or 30 (depends on leap year)
jalMonthLen(1403, 6);  // Output: 31
```

---

### NTP Functions

#### `doSync(mode)`
شروع همگام‌سازی NTP

```javascript
// Auto mode (try network, fallback to local)
await doSync('auto');

// Local only mode
await doSync('local');
```

#### `TIME_SOURCES`
آرایه منابع زمانی

```javascript
TIME_SOURCES.forEach(source => {
  console.log(source.id);   // 'cloudflare', 'worldtime'
  console.log(source.name); // 'Cloudflare edge', 'WorldTimeAPI'
});
```

---

### Render Functions

#### `render()`
رندر ساعت‌های جهان

```javascript
render();
```

#### `renderCal()`
رندر تقویم

```javascript
renderCal();
```

#### `renderToday()`
رندر بخش "امروز"

```javascript
renderToday();
```

#### `translate()`
اعمال ترجمه‌ها

```javascript
translate();
```

---

### State Functions

#### `state()`
دریافت وضعیت فعلی

```javascript
const s = state();
// s.lang: 'en' | 'fa'
// s.region: 'All' | 'Americas' | ...
// s.calSys: 'j' | 'g'
// s.offsetMs: number
// s.syncState: {status, source, rtt, at}
```

#### `setLang(lang)`
تنظیم زبان

```javascript
setLang('fa'); // Switch to Persian
setLang('en'); // Switch to English
```

#### `setOffset(ms)`
تنظیم offset NTP دستی

```javascript
setOffset(0);        // Reset to local clock
setOffset(3600000);   // Add 1 hour offset
```

---

### Constants

#### `J_MONTHS`
نام‌های ماه‌های جلالی

```javascript
J_MONTHS.fa; // ['فروردین', 'اردیبهشت', ...]
J_MONTHS.en; // ['Farvardin', 'Ordibehesht', ...]
```

#### `G_MONTHS`
نام‌های ماه‌های میلادی

```javascript
G_MONTHS.fa; // ['ژانویه', 'فوریه', ...]
G_MONTHS.en; // ['January', 'February', ...]
```

#### `DOW_FA`, `DOW_EN`
نام‌های روزهای هفته

```javascript
DOW_FA; // ['یکشنبه', 'دوشنبه', ...]
DOW_EN; // ['Sunday', 'Monday', ...]
```
