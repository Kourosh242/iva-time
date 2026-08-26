# Adding New Cities · افزودن شهرهای جدید

## 🇮🇷 فارسی

### راهنمای گام به گام

#### ۱. پیدا کردن منطقه زمانی معتبر

از پایگاه داده IANA استفاده کنید:

🔗 [IANA Time Zone Database](https://www.iana.org/time-zones)

#### ۲. پیدا کردن کد کشور

از استاندارد ISO 3166-1 alpha-2 استفاده کنید:

🔗 [ISO 3166 Country Codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

#### ۳. ویرایش فایل app.js

خطوط مربوط به `P` (Places) را پیدا کنید:

```javascript
const P = `New York|United States|US|America/New_York|Americas
Los Angeles|United States|US|America/Los_Angeles|Americas
...
`.split('\n').map(x => {
  const [city, country, code, zone, region] = x.split('|');
  return {city, country, code, zone, region};
});
```

#### ۴. افزودن شهر جدید

یک خط جدید با فرمت زیر اضافه کنید:

```
نام_شهر|نام_کشور|کد_کشور|منطقه_زمانی_IANA|منطقه
```

مثال:
```
Paris|France|FR|Europe/Paris|Europe
```

#### ۵. تعیین منطقه

| منطقه | توضیح |
|-------|-------|
| Americas | آمریکای شمالی و جنوبی |
| Europe | اروپا |
| Middle East | خاورمیانه |
| Africa | آفریقا |
| Asia Pacific | آسیا و اقیانوسیه |

---

## 🇬🇧 English

### Step-by-Step Guide

#### 1. Find a Valid Timezone

Use the IANA Time Zone Database:

🔗 [IANA Time Zone Database](https://www.iana.org/time-zones)

#### 2. Find the Country Code

Use ISO 3166-1 alpha-2 standard:

🔗 [ISO 3166 Country Codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

#### 3. Edit app.js

Find the `P` (Places) constant:

```javascript
const P = `New York|United States|US|America/New_York|Americas
Los Angeles|United States|US|America/Los_Angeles|Americas
...
`.split('\n').map(x => {
  const [city, country, code, zone, region] = x.split('|');
  return {city, country, code, zone, region};
});
```

#### 4. Add New City

Add a new line with this format:

```
CityName|CountryName|COUNTRY_CODE|IANA_TIMEZONE|Region
```

Example:
```
Paris|France|FR|Europe/Paris|Europe
```

#### 5. Assign Region

| Region | Description |
|--------|-------------|
| Americas | North & South America |
| Europe | European countries |
| Middle East | Middle Eastern countries |
| Africa | African countries |
| Asia Pacific | Asia & Oceania |

---

## 📝 Example: Adding Mumbai

### Step 1: Timezone
Mumbai uses `Asia/Kolkata` (not `Asia/Mumbai`)

### Step 2: Country Code
India = `IN`

### Step 3: Region
Asia Pacific

### Step 4: Add to P

```javascript
const P = `...
Mumbai|India|IN|Asia/Kolkata|Asia Pacific
...
`.split('\n').map(...)
```

---

## ✅ Checklist for New Cities

Before submitting a pull request, verify:

- [ ] Valid IANA timezone (check at [time.is](https://time.is/))
- [ ] Correct ISO 3166-1 alpha-2 country code
- [ ] Correct region assignment
- [ ] Both Persian and English names are correct
- [ ] Daylight saving time works correctly
- [ ] Clock displays correctly with NTP sync

---

## 🌍 Popular Timezones Reference

| City | Timezone | DST? |
|------|----------|------|
| Dubai | Asia/Dubai | ❌ No |
| Tehran | Asia/Tehran | ❌ No |
| Mumbai | Asia/Kolkata | ❌ No |
| Hong Kong | Asia/Hong_Kong | ❌ No |
| Shanghai | Asia/Shanghai | ❌ No |
| Bangkok | Asia/Bangkok | ❌ No |
| Singapore | Asia/Singapore | ❌ No |
| Sydney | Australia/Sydney | ✅ Yes |
| Auckland | Pacific/Auckland | ✅ Yes |
| London | Europe/London | ✅ Yes |
| New York | America/New_York | ✅ Yes |
| Los Angeles | America/Los_Angeles | ✅ Yes |
| São Paulo | America/Sao_Paulo | ✅ Yes |
