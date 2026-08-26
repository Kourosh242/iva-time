# Security Policy · سیاست امنیتی

## 🇮🇷 فارسی

### گزارش آسیب‌پذیری

ما امنیت پروژه آیوا تایم را جدی می‌گیریم. اگر آسیب‌پذیری امنیتی کشف کردید، لطفاً آن را **خصوصی** گزارش دهید.

### نحوه گزارش

1. یک **Issue جدید** در مخزن GitHub ایجاد **نکنید**
2. به جای آن، از طریق ایمیل با ما تماس بگیرید
3. اطلاعات زیر را شامل کنید:
   - شرح آسیب‌پذیری
   - مراحل بازتولید
   - تاثیر احتمالی
   - در صورت امکان، راه‌حل پیشنهادی

### چه چیزی را گزارش دهید

- مشکلات XSS
- نشت اطلاعات
- آسیب‌پذیری‌های وابستگی‌ها
- مشکلات احراز هویت (اگر اضافه شود)
- هر چیز دیگری که امنیت کاربران را به خطر می‌اندازد

### چه چیزی را گزارش ندهید

- مشکلات جزئی UI
- درخواست ویژگی جدید
- مسائل مربوط به third-party services

### تعهد ما

- ظرف **48 ساعت** به گزارش شما پاسخ می‌دهیم
- آسیب‌پذیری‌ها را در اسرع وقت رفع می‌کنیم
- در release notes اعتبار شما را حفظ می‌کنیم (اگر بخواهید)

---

## 🇬🇧 English

### Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please report it **privately**.

### How to Report

1. Do **NOT** create a public GitHub Issue
2. Contact us via email instead
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Report

- XSS issues
- Information leaks
- Dependency vulnerabilities
- Authentication issues (if added)
- Anything that could compromise user security

### What NOT to Report

- Minor UI issues
- Feature requests
- Third-party service issues

### Our Commitment

- Respond to your report within **48 hours**
- Fix vulnerabilities as soon as possible
- Credit you in release notes (if desired)

---

## 🔒 Security Notes

### Data Storage

IVA TIME:

- ❌ Stores no user data
- ❌ Uses no cookies
- ❌ Requires no authentication
- ❌ Sends data to third parties

### Network Requests

IVA TIME makes requests to:

- `cloudflare.com/cdn-cgi/trace` - Time sync
- `worldtimeapi.org/api/timezone/Etc/UTC` - Time sync (fallback)

These requests:

- Use HTTPS only
- Transfer no personal data
- Are made on-demand (not continuous)

### Dependencies

This project has **zero npm dependencies**:

- Pure HTML, CSS, JavaScript
- Self-hosted fonts
- No external CDNs required

---

## 📋 Security Checklist

- [x] No user data stored
- [x] No cookies used
- [x] HTTPS enforced
- [x] Zero external dependencies
- [x] Self-hosted fonts
- [x] Open source for review
