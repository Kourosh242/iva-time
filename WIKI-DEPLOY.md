# Deploying Wiki to GitHub · استقرار ویکی در GitHub

## 🇮🇷 فارسی

### روش ۱: استفاده از GitHub CLI

```bash
# Clone ویکی به صورت جداگانه
git clone https://github.com/Kourosh242/iva-time.wiki.git iva-time-wiki

# کپی فایل‌های ویکی
cp -r wiki/* iva-time-wiki/

# Commit و push
cd iva-time-wiki
git add -A
git commit -m "Update wiki documentation"
git push origin master
```

### روش ۲: استفاده از دستی

1. در مخزن GitHub، روی **Wiki** کلیک کنید
2. روی **Clone this wiki locally** کلیک کنید
3. دستورالعمل‌های نمایش داده شده را دنبال کنید
4. فایل‌های ویکی را از پوشه `wiki/` کپی کنید

### روش ۳: استفاده از gh CLI

```bash
# نصب gh اگر ندارید
# https://github.com/cli/cli#installation

# فعال‌سازی ویکی
gh repo clone Kourosh242/iva-time
cd iva-time

# ایجاد ویکی
gh repo edit --enable-wiki

# Clone ویکی
git clone https://github.com/Kourosh242/iva-time.wiki.git wiki-repo
cp -r wiki/* wiki-repo/
cd wiki-repo
git add -A
git commit -m "Initial wiki documentation"
git push origin master
```

---

## 🇬🇧 English

### Method 1: Using GitHub CLI

```bash
# Clone wiki separately
git clone https://github.com/Kourosh242/iva-time.wiki.git iva-time-wiki

# Copy wiki files
cp -r wiki/* iva-time-wiki/

# Commit and push
cd iva-time-wiki
git add -A
git commit -m "Update wiki documentation"
git push origin master
```

### Method 2: Manual

1. In the GitHub repository, click **Wiki**
2. Click **Clone this wiki locally**
3. Follow the displayed instructions
4. Copy wiki files from `wiki/` folder

### Method 3: Using gh CLI

```bash
# Install gh if you don't have it
# https://github.com/cli/cli#installation

# Clone the repo
gh repo clone Kourosh242/iva-time
cd iva-time

# Enable wiki
gh repo edit --enable-wiki

# Clone wiki
git clone https://github.com/Kourosh242/iva-time.wiki.git wiki-repo
cp -r wiki/* wiki-repo/
cd wiki-repo
git add -A
git commit -m "Initial wiki documentation"
git push origin master
```

---

## 📁 Wiki File Naming · نام‌گذاری فایل‌ها

GitHub Wiki uses Markdown files. The file names become page URLs:

| File             | URL                 |
| ---------------- | ------------------- |
| Home.md          | /wiki/Home          |
| Quick-Start.md   | /wiki/Quick-Start   |
| Installation.md  | /wiki/Installation  |
| API-Reference.md | /wiki/API-Reference |

---

## ⚠️ Important Notes · نکات مهم

- Wiki files **must** have `.md` extension
- The first page is always `Home.md`
- Use underscores in file names (not dashes) for better readability
- Images should be hosted separately (not in wiki repo)

---

## 🔄 Updating Wiki · به‌روزرسانی ویکی

```bash
cd iva-time-wiki
git pull origin master
# Edit files
git add -A
git commit -m "Describe your changes"
git push origin master
```

---

## 📊 Wiki Statistics · آمار ویکی

After deployment, your wiki will have:

| Page                | Title              |
| ------------------- | ------------------ |
| Home                | صفحه اصلی          |
| Quick-Start         | شروع سریع          |
| Installation        | نصب                |
| World-Clocks        | ساعت‌های جهان      |
| Calendar-System     | سیستم تقویم        |
| NTP-Synchronization | همگام‌سازی NTP     |
| Bilingual-Support   | پشتیبانی دو زبانه  |
| Architecture        | معماری             |
| API-Reference       | مرجع API           |
| Adding-New-Cities   | افزودن شهرهای جدید |
| Changelog           | تاریخچه تغییرات    |
| FAQ                 | سوالات متداول      |
| Troubleshooting     | عیب‌یابی           |
