# API Reference · مرجع API

> **توجه**: آیوا تایم یک برنامه سمت کلاینت است و HTTP API ندارد.
> این صفحه توابع JavaScript داخلی `app.js` را مستند می‌کند که از طریق `module.exports` در Node.js (برای تست) و به صورت global در مرورگر در دسترس هستند.

---

## توابع تقویم جلالی · Jalali Calendar Functions

### `g2j(gy, gm, gd)` → `[jy, jm, jd]`

تبدیل تاریخ میلادی به جلالی. / Convert Gregorian to Jalali.

```javascript
g2j(2026, 8, 26); // → [1405, 6, 4]  (شهریور)
g2j(2024, 3, 20); // → [1402, 12, 30] (اسفند)
```

### `j2g(jy, jm, jd)` → `[gy, gm, gd]`

تبدیل تاریخ جلالی به میلادی. / Convert Jalali to Gregorian.

```javascript
j2g(1405, 6, 4); // → [2026, 8, 26]
j2g(1404, 1, 1); // → [2025, 3, 21]  (نوروز)
```

### `jalLeap(jy)` → `0 | 1 | 2 | 3 | 4`

بررسی سال کبیسه جلالی. / Check Jalali leap year.
مقدار بازگشتی `0` یعنی سال کبیسه (اسفند ۳۰ روزه).

```javascript
jalLeap(1403); // → 0  (کبیسه — Esfand has 30 days)
jalLeap(1404); // → 4  (معمولی — Esfand has 29 days)
jalLeap(1405); // → 0  (کبیسه)
```

### `jalMonthLen(jy, jm)` → `number`

تعداد روزهای ماه جلالی. / Number of days in a Jalali month.

```javascript
jalMonthLen(1405, 1); // → 31  (ماه‌های ۱–۶)
jalMonthLen(1405, 7); // → 30  (ماه‌های ۷–۱۱)
jalMonthLen(1405, 12); // → 30  (اسفند — سال کبیسه)
jalMonthLen(1404, 12); // → 29  (اسفند — سال معمولی)
```

### `jalaliOf(date)` → `[jy, jm, jd]`

تبدیل شیء Date به تاریخ جلالی. / Convert a JS Date to Jalali.

```javascript
jalaliOf(new Date()); // → [1405, 6, 4] (امروز)
```

### توابع سطح پایین · Low-level Functions

| تابع              | توضیح                                  |
| ----------------- | -------------------------------------- |
| `g2d(gy, gm, gd)` | Gregorian → Julian Day Number          |
| `d2g(jdn)`        | Julian Day Number → `[gy, gm, gd]`     |
| `j2d(jy, jm, jd)` | Jalali → Julian Day Number             |
| `d2j(jdn)`        | Julian Day Number → `[jy, jm, jd]`     |
| `jalCal(jy)`      | اطلاعات سال جلالی: `{leap, gy, march}` |

---

## توابع NTP · NTP Functions

### `doSync(mode)` → `Promise<void>`

شروع همگام‌سازی با سرور زمان. / Start NTP synchronization.

```javascript
// حالت خودکار — Cloudflare → WorldTimeAPI → local fallback
doSync("auto");

// فقط ساعت محلی
doSync("local");
```

**جریان sync:**

1. درخواست به `https://www.cloudflare.com/cdn-cgi/trace`
2. در صورت شکست: درخواست به `https://worldtimeapi.org/api/timezone/Etc/UTC`
3. محاسبه `offsetMs = serverMs - (Date.now() - rtt/2)`
4. بروزرسانی UI و رندر ساعت‌ها

### `TIME_SOURCES` (array)

آرایه منابع زمانی. / Time sources array.

```javascript
TIME_SOURCES.forEach((source) => {
  console.log(source.id); // 'cloudflare' | 'worldtime'
  console.log(source.name); // 'Cloudflare edge' | 'WorldTimeAPI'
  // source.get() → Promise<{serverMs, rtt}|null>
});
```

---

## توابع رندر · Render Functions

### `render()`

رندر کارت‌های ساعت، marquee ticker و بخش امروز. / Render clock cards and today panel.
هر ثانیه از `setInterval` فراخوانی می‌شود.

```javascript
render(); // رندر فوری
```

### `renderCal()`

رندر گرید تقویم (ماه جاری). / Render calendar grid for current month.

```javascript
renderCal();
```

### `renderToday()`

بروزرسانی پنل «امروز» در کنار تقویم. / Update the today panel beside the calendar.

```javascript
renderToday();
```

### `translate()`

اعمال ترجمه‌های زبان جاری به تمام عناصر `data-i`. / Apply translations for the current language.

```javascript
lang = "fa";
translate(); // همه متن‌ها به فارسی تغییر می‌کند
```

### `setCalSys(sys)`

تغییر سیستم تقویم و رندر مجدد. / Switch calendar system and re-render.

```javascript
setCalSys("j"); // شمسی (جلالی)
setCalSys("g"); // میلادی (Gregorian)
```

---

## State و تنظیمات · State & Config

### `state()` → object

دریافت snapshot کامل وضعیت داخلی. / Get full internal state snapshot.

```javascript
const s = state();
// s.lang        → 'en' | 'fa'
// s.region      → 'All' | 'Americas' | 'Europe' | ...
// s.limit       → number (تعداد کارت‌های نمایش)
// s.q           → string (query جستجو)
// s.calSys      → 'j' | 'g'
// s.calY        → number (سال نمایش‌داده‌شده تقویم)
// s.calM        → number (ماه نمایش‌داده‌شده تقویم)
// s.offsetMs    → number (انحراف NTP به ms)
// s.syncState   → {status:'ok'|'local'|'syncing', source, rtt, at}
// s.syncing     → boolean
```

### `setLang(l)`

تنظیم زبان (بدون بروزرسانی UI). / Set language without UI update.

```javascript
setLang("fa");
setLang("en");
```

### `setOffset(ms)`

تنظیم دستی offset NTP. / Manually set NTP offset.

```javascript
setOffset(0); // بازگشت به ساعت محلی
setOffset(2000); // جلوتر ۲ ثانیه
setOffset(-1500); // عقب‌تر ۱.۵ ثانیه
```

---

## ثابت‌ها · Constants

### `P` (array of objects)

آرایه ۳۵ شهر اصلی. / Array of 35 built-in cities.

```javascript
P[0]; // {city:'New York', country:'United States', code:'US', zone:'America/New_York', region:'Americas'}
P[15]; // {city:'Tehran', country:'Iran', code:'IR', zone:'Asia/Tehran', region:'Middle East'}
```

### `J_MONTHS`

نام ماه‌های جلالی. / Jalali month names.

```javascript
J_MONTHS.fa; // ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند']
J_MONTHS.en; // ['Farvardin','Ordibehesht','Khordad','Tir','Mordad','Shahrivar','Mehr','Aban','Azar','Dey','Bahman','Esfand']
```

### `G_MONTHS`

نام ماه‌های میلادی. / Gregorian month names (both languages).

```javascript
G_MONTHS.fa; // ['ژانویه','فوریه','مارس',...]
G_MONTHS.en; // ['January','February','March',...]
```

### `DOW_FA` / `DOW_EN`

نام روزهای هفته (indexed by `Date.getDay()`). / Day-of-week names.

```javascript
DOW_FA; // ['یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه']
DOW_EN; // ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
```

### `FA_NAMES`

نگاشت نام‌های انگلیسی شهرها/کشورها به فارسی. / English→Persian name mapping.

```javascript
FA_NAMES["Tehran"]; // 'تهران'
FA_NAMES["Iran"]; // 'ایران'
FA_NAMES["Tokyo"]; // 'توکیو'
```

### `toFa(s)` → string

تبدیل اعداد لاتین به فارسی. / Convert Western numerals to Persian.

```javascript
toFa("2026"); // '۲۰۲۶'
toFa("12:30"); // '۱۲:۳۰'
```
