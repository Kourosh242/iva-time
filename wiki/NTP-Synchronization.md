# NTP Synchronization · همگام‌سازی NTP

## 🇮🇷 فارسی

### NTP چیست؟

**NTP (Network Time Protocol)** پروتکل استاندارد اینترنت برای همگام‌سازی ساعت دستگاه‌ها با سرورهای زمان دقیق است. این سرورها خود با **GPS** و **ساعت اتمی** هماهنگ هستند.

### چرا مرورگرها نمی‌توانند مستقیماً از NTP استفاده کنند؟

مرورگرها به سوکت‌های **UDP خام** (پورت ۱۲۳) دسترسی ندارند. برای حل این مشکل، آیوا تایم از یک روش جایگزین استفاده می‌کند:

### روش همگام‌سازی آیوا تایم

```
┌─────────────┐     HTTP      ┌────────────────────┐
│   مرورگر    │◄────────────►│  Cloudflare Edge    │
│             │              │  (ts= unix_timestamp)│
└─────────────┘              └────────────────────┘
        │
        │ (if Cloudflare fails)
        ▼
┌─────────────────────┐
│   WorldTimeAPI      │
│  /api/timezone/UTC │
└─────────────────────┘
```

### مراحل همگام‌سازی

1. **درخواست HTTP** به منبع زمانی
2. **اندازه‌گیری RTT** (Round-Trip Time)
3. **محاسبه offset**: `offset = serverTime - (localTime - RTT/2)`
4. **اعمال offset** روی همه ساعت‌ها

### منابع زمانی

| منبع            | آدرس                                    | توضیح           |
| --------------- | --------------------------------------- | --------------- |
| Cloudflare Edge | `cdn-cgi/trace`                         | سریع، CORS باز  |
| WorldTimeAPI    | `worldtimeapi.org/api/timezone/Etc/UTC` | NTP-disciplined |

### وضعیت همگام‌سازی

نوار وضعیت NTP اطلاعات زیر را نمایش می‌دهد:

- **منبع**: Cloudflare یا WorldTimeAPI
- **RTT**: زمان رفت و برگشت به میلی‌ثانیه
- **offset**: انحراف ساعت محلی (مثبت = عقب، منفی = جلو)
- **زمان همگام‌سازی**: آخرین زمان sync

### بازه همگام‌سازی

- **خودکار**: هر ۵ دقیقه
- **دستی**: با کلیک روی دکمه "همگام‌سازی"
- **محلی**: در صورت عدم دسترسی به شبکه

---

## 🇬🇧 English

### What is NTP?

**NTP (Network Time Protocol)** is the Internet's standard protocol for synchronizing device clocks against precision time servers. These servers are disciplined by **GPS** and **atomic clocks**.

### Why Can't Browsers Use NTP Directly?

Browsers cannot access raw **UDP sockets** (port 123). To solve this, IVA TIME uses an alternative method:

### IVA TIME Sync Method

```
┌─────────────┐     HTTP      ┌────────────────────┐
│   Browser    │◄────────────►│  Cloudflare Edge    │
│             │              │  (ts= unix_timestamp)│
└─────────────┘              └────────────────────┘
        │
        │ (if Cloudflare fails)
        ▼
┌─────────────────────┐
│   WorldTimeAPI      │
│  /api/timezone/UTC │
└─────────────────────┘
```

### Synchronization Steps

1. **HTTP Request** to time source
2. **Measure RTT** (Round-Trip Time)
3. **Calculate offset**: `offset = serverTime - (localTime - RTT/2)`
4. **Apply offset** to all clocks

### Time Sources

| Source          | Address                                 | Description     |
| --------------- | --------------------------------------- | --------------- |
| Cloudflare Edge | `cdn-cgi/trace`                         | Fast, CORS open |
| WorldTimeAPI    | `worldtimeapi.org/api/timezone/Etc/UTC` | NTP-disciplined |

### Sync Status

The NTP status bar displays:

- **Source**: Cloudflare or WorldTimeAPI
- **RTT**: Round-trip time in milliseconds
- **Offset**: Local clock deviation (positive = behind, negative = ahead)
- **Sync Time**: Last synchronization timestamp

### Sync Intervals

- **Automatic**: Every 5 minutes
- **Manual**: Click "Sync now" button
- **Local**: If network unavailable

---

## 📊 Technical Implementation

### Offset Calculation Formula

```javascript
// Measure the time offset between local clock and server
const serverTime = response.timestamp; // Unix timestamp from server
const localTime = Date.now(); // Local browser time
const rtt = response.rtt; // Round-trip time in ms

// Estimate what the local clock was when server stamped the time
// Account for half the RTT (time for request to reach server)
offsetMs = serverTime - (localTime - rtt / 2);
```

### Fallback Strategy

```
1. Try Cloudflare Edge (fastest)
   ↓ If fails
2. Try WorldTimeAPI
   ↓ If fails
3. Use local device clock (offset = 0)
```

### Accuracy

The sync achieves **~millisecond accuracy** by:

- Using HTTP Date headers with sub-second precision
- Accounting for network latency with RTT/2 estimation
- Applying consistent offset across all clocks

---

## ⚙️ User Options

### Sync Mode Selector

| Mode               | Description                              |
| ------------------ | ---------------------------------------- |
| Auto · NTP network | Default, uses network sync               |
| Local clock only   | Disables network sync, uses device clock |

### Status Indicators

| Indicator     | Color | Meaning                 |
| ------------- | ----- | ----------------------- |
| 🟢 Green dot  | ok    | NTP synced successfully |
| 🟠 Orange dot | busy  | Currently syncing       |
| 🟡 Yellow dot | warn  | Local clock only        |

---

## 🔧 Troubleshooting

| Issue                          | Solution                              |
| ------------------------------ | ------------------------------------- |
| "Syncing..." never ends        | Check internet connection, try again  |
| Always shows "Local clock"     | Network may be blocking time servers  |
| Offset seems wrong             | Device clock may be significantly off |
| Times don't match other clocks | Try manual sync, check RTT            |
