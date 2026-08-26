# Deployment Guide · راهنمای استقرار

## 🇮🇷 فارسی

این راهنما روش‌های مختلف استقرار پروژه آیوا تایم را شرح می‌دهد.

---

## 🚀 روش ۱: GitHub Pages (توصیه‌شده)

### مراحل

1. **فعال‌سازی GitHub Pages**
   - مخزن GitHub را باز کنید
   - به **Settings** → **Pages** بروید
   - **Source** را روی **GitHub Actions** تنظیم کنید

2. **Push به main**

   ```bash
   git push origin main
   ```

3. **بررسی وضعیت**
   - به **Actions** tab بروید
   - workflow در حال اجرا را بررسی کنید
   - پس از اتمام، سایت در `https://username.github.io/iva-time/` در دسترس است

### به‌روزرسانی

```bash
# هر تغییری که push شود، به‌طور خودکار منتشر می‌شود
git add .
git commit -m "Update"
git push origin main
```

---

## 🖥️ روش ۲: cPanel / Direct Upload

### مراحل

1. **دانلود فایل‌ها**

   ```bash
   # از GitHub دانلود کنید یا clone کنید
   git clone https://github.com/Kourosh242/iva-time.git
   ```

2. **آپلود به cPanel**
   - وارد cPanel شوید
   - به **File Manager** بروید
   - پوشه `public_html` را باز کنید
   - تمام فایل‌ها را آپلود کنید **(به جز `.github/`)**

3. **ساختار صحیح**
   ```
   public_html/
   ├── index.html
   ├── style.css
   ├── app.js
   ├── assets/
   │   ├── iva-logo.svg
   │   ├── og.png
   │   └── fonts/
   └── ...
   ```

### نکات مهم

- ⚠️ فایل `.github/` را آپلود **نکنید**
- ⚠️ مطمئن شوید `index.html` در ریشه است
- ✅ فایل‌ها باید با فرمت UTF-8 باشند

---

## ☁️ روش ۳: Netlify

### مراحل

1. **آماده‌سازی**
   - مخزن را در GitHub ایجاد یا fork کنید

2. **اتصال به Netlify**
   - به [Netlify](https://netlify.com) بروید
   - روی **Add new site** → **Import an existing project** کلیک کنید
   - مخزن GitHub را انتخاب کنید

3. **تنظیمات**
   - **Build command**: خالی بگذارید
   - **Publish directory**: `/`

4. **Deploy**
   - روی **Deploy site** کلیک کنید

### دامنه سفارشی (اختیاری)

- به **Domain settings** بروید
- **Add custom domain** را بزنید
- DNS را تنظیم کنید

---

## 🌐 روش ۴: Vercel

### مراحل

1. **CLI**

   ```bash
   npm i -g vercel
   vercel login
   vercel --prod
   ```

2. **GUI**
   - به [Vercel](https://vercel.com) بروید
   - مخزن GitHub را import کنید
   - تنظیمات پیش‌فرض را قبول کنید
   - Deploy!

---

## 📦 روش ۵: Docker

### Dockerfile

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

### Build & Run

```bash
docker build -t iva-time .
docker run -d -p 8080:80 iva-time
```

---

## 🖥️ روش ۶: VPS (Ubuntu)

### با Nginx

```bash
# نصب Nginx
sudo apt update
sudo apt install nginx

# پیکربندی
sudo nano /etc/nginx/sites-available/iva-time
```

### پیکربندی

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/iva-time;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

### فعال‌سازی

```bash
sudo ln -s /etc/nginx/sites-available/iva-time /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# کپی فایل‌ها
sudo cp -r /path/to/iva-time/* /var/www/iva-time/
```

---

## 🔒 HTTPS با Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## ✅ چک‌لیست قبل از انتشار

- [ ] همه فایل‌ها صحیح آپلود شده‌اند
- [ ] `index.html` در ریشه است
- [ ] لینک‌ها کار می‌کنند
- [ ] تصاویر نمایش داده می‌شوند
- [ ] فونت Vazirmatn بارگذاری می‌شود
- [ ] HTTPS فعال است
- [ ] در موبایل تست شده

---

## 🐛 عیب‌یابی

| مشکل                       | راه‌حل                            |
| -------------------------- | --------------------------------- |
| صفحه سفید                  | بررسی کنید `index.html` وجود دارد |
| CSS اعمال نمی‌شود          | کش مرورگر را پاک کنید             |
| تصاویر نمایش داده نمی‌شوند | مسیرها را بررسی کنید              |
| فونت بارگذاری نمی‌شود      | فایل font را بررسی کنید           |

---

## 🇬🇧 English

This guide explains various deployment methods for IVA TIME.

---

## 🚀 Method 1: GitHub Pages (Recommended)

### Steps

1. **Enable GitHub Pages**
   - Open GitHub repository
   - Go to **Settings** → **Pages**
   - Set **Source** to **GitHub Actions**

2. **Push to main**

   ```bash
   git push origin main
   ```

3. **Check Status**
   - Go to **Actions** tab
   - Check running workflow
   - Site available at `https://username.github.io/iva-time/`

---

## 🖥️ Method 2: cPanel / Direct Upload

### Steps

1. **Download files** from repository

2. **Upload to cPanel**
   - Open File Manager
   - Navigate to `public_html`
   - Upload all files **(except `.github/`)**

3. **Correct Structure**
   ```
   public_html/
   ├── index.html
   ├── style.css
   ├── app.js
   └── assets/
   ```

---

## ☁️ Method 3: Netlify

1. Connect GitHub repository
2. Set build command: empty
3. Set publish directory: `/`
4. Deploy!

---

## 🌐 Method 4: Vercel

```bash
vercel --prod
```

---

## 📦 Method 5: Docker

```bash
docker build -t iva-time .
docker run -d -p 8080:80 iva-time
```

---

## 🖥️ Method 6: VPS (Ubuntu)

With Nginx:

```bash
sudo apt install nginx
sudo cp -r /path/to/iva-time/* /var/www/iva-time/
```

---

## 🔒 HTTPS with Let's Encrypt

```bash
sudo certbot --nginx -d your-domain.com
```

---

## ✅ Pre-Deployment Checklist

- [ ] All files uploaded correctly
- [ ] `index.html` in root
- [ ] Links working
- [ ] Images displaying
- [ ] Vazirmatn font loading
- [ ] HTTPS enabled
- [ ] Tested on mobile
