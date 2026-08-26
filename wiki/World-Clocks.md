# World Clocks · ساعت‌های جهان

## 🇮🇷 فارسی

### شهرهای پیش‌فرض (۳۵ شهر)

#### قاره آمریکا

| شهر          | کشور          | منطقه زمانی                    |
| ------------ | ------------- | ------------------------------ |
| New York     | United States | America/New_York               |
| Los Angeles  | United States | America/Los_Angeles            |
| Toronto      | Canada        | America/Toronto                |
| Mexico City  | Mexico        | America/Mexico_City            |
| São Paulo    | Brazil        | America/Sao_Paulo              |
| Buenos Aires | Argentina     | America/Argentina/Buenos_Aires |

#### اروپا

| شهر       | کشور           | منطقه زمانی      |
| --------- | -------------- | ---------------- |
| London    | United Kingdom | Europe/London    |
| Paris     | France         | Europe/Paris     |
| Berlin    | Germany        | Europe/Berlin    |
| Madrid    | Spain          | Europe/Madrid    |
| Rome      | Italy          | Europe/Rome      |
| Amsterdam | Netherlands    | Europe/Amsterdam |
| Stockholm | Sweden         | Europe/Stockholm |
| Istanbul  | Türkiye        | Europe/Istanbul  |

#### خاورمیانه

| شهر        | کشور         | منطقه زمانی     |
| ---------- | ------------ | --------------- |
| Dubai      | UAE          | Asia/Dubai      |
| **Tehran** | **Iran**     | **Asia/Tehran** |
| Riyadh     | Saudi Arabia | Asia/Riyadh     |
| Doha       | Qatar        | Asia/Qatar      |

#### آفریقا

| شهر        | کشور         | منطقه زمانی         |
| ---------- | ------------ | ------------------- |
| Cairo      | Egypt        | Africa/Cairo        |
| Lagos      | Nigeria      | Africa/Lagos        |
| Nairobi    | Kenya        | Africa/Nairobi      |
| Cape Town  | South Africa | Africa/Johannesburg |
| Casablanca | Morocco      | Africa/Casablanca   |

#### آسیا و اقیانوسیه

| شهر       | کشور        | منطقه زمانی      |
| --------- | ----------- | ---------------- |
| Tokyo     | Japan       | Asia/Tokyo       |
| Seoul     | South Korea | Asia/Seoul       |
| Beijing   | China       | Asia/Shanghai    |
| Singapore | Singapore   | Asia/Singapore   |
| Bangkok   | Thailand    | Asia/Bangkok     |
| Jakarta   | Indonesia   | Asia/Jakarta     |
| Mumbai    | India       | Asia/Kolkata     |
| Karachi   | Pakistan    | Asia/Karachi     |
| Dhaka     | Bangladesh  | Asia/Dhaka       |
| Sydney    | Australia   | Australia/Sydney |
| Perth     | Australia   | Australia/Perth  |
| Auckland  | New Zealand | Pacific/Auckland |

### افزودن شهر سفارشی

دکمه **«＋ مدیریت شهرها»** → جستجوی timezone → تیک زدن.  
شهرهای انتخاب‌شده در `localStorage` ذخیره می‌شوند و تا حذف باقی می‌مانند.

برای راهنمای کامل: [Adding-New-Cities](Adding-New-Cities)

### نشانگر روز/شب

هر کارت وضعیت خورشید را نمایش می‌دهد:

- **Day / روز** — ساعت محلی بین ۶:۰۰ تا ۱۸:۵۹
- **Night / شب** — ساعت محلی بین ۱۹:۰۰ تا ۵:۵۹

رنگ accent کارت بر اساس موقعیت در گرید تغییر می‌کند (طلایی، آبی‌فیروزه‌ای، بنفش، سبز).

### جستجو

جستجو روی موارد زیر اعمال می‌شود:

- نام شهر (انگلیسی)
- نام کشور (انگلیسی)
- نام فارسی شهر (از `FA_NAMES`)
- نام فارسی کشور (از `FA_NAMES`)

### مرتب‌سازی

| حالت       | توضیح                         |
| ---------- | ----------------------------- |
| Default    | ترتیب اصلی لیست `P`           |
| Favorites  | علاقه‌مندها اول، بقیه الفبایی |
| Name       | الفبایی بر اساس زبان جاری     |
| UTC offset | از غرب به شرق                 |

---

## 🇬🇧 English

### Card Anatomy

Each clock card shows:

```
┌─────────────────────────┐
│ 🇮🇷   Night             │  ← flag + day/night indicator
│                         │
│  23:15:42               │  ← current local time (HH:MM:SS)
│                         │
│  Tehran                 │  ← city name (translated)
│  Iran                   │  ← country name (translated)
├─────────────────────────┤
│  4 Shahrivar 1405       │  ← local date
│                    ★  × │  ← favorite + remove buttons
└─────────────────────────┘
```

### Favorites

Click **★** to add a city to favorites.  
Use **Sort → Favorites** to pin them to the top.  
Favorites persist in `localStorage`.

### Remove & Restore

Click **×** on a card to hide that city.  
Use **Manage cities** dialog to restore hidden cities or add new ones.

### Share Settings

"Share settings" button builds a URL like:

```
https://kourosh242.github.io/iva-time/?cities=Asia%2FTehran%2CAmerica%2FNew_York&lang=fa&theme=dark&cal=j
```

Anyone opening this link sees the same city selection, language, theme, and calendar.
