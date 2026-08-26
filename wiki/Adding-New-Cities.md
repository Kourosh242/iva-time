# Adding New Cities · افزودن شهرهای جدید

## روش ۱: City Manager (بدون کد) — توصیه‌شده

### مراحل

1. روی دکمه **«＋ مدیریت شهرها»** کلیک کنید
2. در کادر جستجو نام شهر یا timezone را تایپ کنید (مثلاً `Kabul` یا `Asia/Kabul`)
3. تیک timezone مورد نظر را بزنید
4. دکمه **Done** را بزنید

شهر سفارشی فوراً ظاهر می‌شود و در `localStorage` ذخیره می‌شود.

**محدودیت:** شهرهای اضافه‌شده از طریق City Manager نام فارسی ندارند و با برچسب «Custom» نمایش داده می‌شوند.

---

## روش ۲: ویرایش مستقیم app.js

برای افزودن دائمی شهر با نام فارسی، باید `app.js` را ویرایش کنید.

### قدم ۱: پیدا کردن timezone معتبر IANA

از [time.is](https://time.is/) یا [IANA Timezone List](https://www.iana.org/time-zones) استفاده کنید.

مثال‌های رایج:

| شهر       | Timezone       |
| --------- | -------------- |
| Kabul     | Asia/Kabul     |
| Tashkent  | Asia/Tashkent  |
| Baku      | Asia/Baku      |
| Yerevan   | Asia/Yerevan   |
| Tbilisi   | Asia/Tbilisi   |
| Islamabad | Asia/Karachi   |
| Colombo   | Asia/Colombo   |
| Kathmandu | Asia/Kathmandu |
| Muscat    | Asia/Muscat    |
| Kuwait    | Asia/Kuwait    |

### قدم ۲: پیدا کردن کد کشور ISO 3166-1

| کشور      | کد  |
| --------- | --- |
| ایران     | IR  |
| افغانستان | AF  |
| ازبکستان  | UZ  |
| آذربایجان | AZ  |
| ارمنستان  | AM  |
| گرجستان   | GE  |
| عمان      | OM  |
| کویت      | KW  |

### قدم ۳: افزودن به رشته `P` در app.js

ساختار هر خط:

```
نام_شهر|نام_کشور|کد_کشور|timezone_IANA|منطقه
```

**مناطق معتبر:** `Americas` / `Europe` / `Middle East` / `Africa` / `Asia Pacific`

مثال — افزودن کابل:

```javascript
const P = `New York|United States|US|America/New_York|Americas
Los Angeles|United States|US|America/Los_Angeles|Americas
...
Kabul|Afghanistan|AF|Asia/Kabul|Middle East
`.split('\n').map(...)
```

### قدم ۴: افزودن نام فارسی

در ثابت `FA_NAMES` در `app.js`:

```javascript
const FA_NAMES = {
  // شهرهای موجود...
  Kabul: "کابل",
  Afghanistan: "افغانستان",
};
```

### قدم ۵: تست

```bash
npm test    # 6 unit test باید همه pass شوند
npm run lint
```

---

## چک‌لیست Pull Request

- [ ] Timezone از IANA معتبر است (تست با `new Intl.DateTimeFormat('en', {timeZone: '...'}).format(new Date())`)
- [ ] کد کشور ISO 3166-1 alpha-2 صحیح است
- [ ] منطقه (`region`) صحیح است
- [ ] نام فارسی در `FA_NAMES` اضافه شده
- [ ] `npm test` همه pass می‌شوند
- [ ] DST در صورت وجود درست نمایش داده می‌شود

---

## مثال کامل: افزودن تاشکند

### ۱. Timezone: `Asia/Tashkent`

### ۲. کشور: Uzbekistan / UZ

### ۳. منطقه: Asia Pacific

### ۴. اضافه به `P`:

```
Tashkent|Uzbekistan|UZ|Asia/Tashkent|Asia Pacific
```

### ۵. اضافه به `FA_NAMES`:

```javascript
'Tashkent': 'تاشکند',
'Uzbekistan': 'ازبکستان',
```

---

## Timezone Reference — مناطق بدون DST

| شهر       | Timezone       | UTC   |
| --------- | -------------- | ----- |
| Dubai     | Asia/Dubai     | +4:00 |
| Tehran    | Asia/Tehran    | +3:30 |
| Riyadh    | Asia/Riyadh    | +3:00 |
| Doha      | Asia/Qatar     | +3:00 |
| Muscat    | Asia/Muscat    | +4:00 |
| Kabul     | Asia/Kabul     | +4:30 |
| Karachi   | Asia/Karachi   | +5:00 |
| Kolkata   | Asia/Kolkata   | +5:30 |
| Colombo   | Asia/Colombo   | +5:30 |
| Dhaka     | Asia/Dhaka     | +6:00 |
| Bangkok   | Asia/Bangkok   | +7:00 |
| Singapore | Asia/Singapore | +8:00 |
| Shanghai  | Asia/Shanghai  | +8:00 |
| Tokyo     | Asia/Tokyo     | +9:00 |
