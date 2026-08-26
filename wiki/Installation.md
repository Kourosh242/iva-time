# Installation · نصب

## 🇮🇷 فارسی

آیوا تایم یک پروژه **کاملاً استاتیک** است و نیازی به نصب ندارد.

### استقرار روی GitHub Pages

1. مخزن را Fork کنید
2. به **Settings** → **Pages** بروید
3. **Source** را روی **GitHub Actions** تنظیم کنید
4. به branch `main` push کنید
5. سایت در `https://username.github.io/iva-time/` در دسترس خواهد بود

### استقرار روی cPanel

1. فایل‌ها را از مخزن دانلود کنید
2. تمام فایل‌ها (به جز `.github/`) را در `public_html` آپلود کنید
3. فایل‌ها را استخراج کنید
4. سایت آماده است!

### استقرار روی Netlify

1. مخزن را به GitHub وصل کنید
2. Build command را خالی بگذارید
3. Publish directory را `/` تنظیم کنید
4. Deploy!

### استقرار روی Vercel

```bash
vercel --prod
```

### ساختار فایل‌های مورد نیاز

```
├── index.html       ✅ ضروری
├── style.css       ✅ ضروری
├── app.js          ✅ ضروری
└── assets/
    ├── iva-logo.svg    ✅ توصیه‌شده
    ├── og.png          📄 برای SEO
    └── fonts/
        └── Vazirmatn-Variable.woff2  ✅ توصیه‌شده
```

---

## 🇬🇧 English

IVA TIME is a **fully static** project and requires no installation.

### Deploy to GitHub Pages

1. Fork the repository
2. Go to **Settings** → **Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` branch
5. Site will be available at `https://username.github.io/iva-time/`

### Deploy to cPanel

1. Download files from repository
2. Upload all files (except `.github/`) to `public_html`
3. Extract files
4. Site is ready!

### Deploy to Netlify

1. Connect repository to GitHub
2. Leave build command empty
3. Set publish directory to `/`
4. Deploy!

### Deploy to Vercel

```bash
vercel --prod
```

### Required Files Structure

```
├── index.html       ✅ Required
├── style.css       ✅ Required
├── app.js          ✅ Required
└── assets/
    ├── iva-logo.svg    ✅ Recommended
    ├── og.png          📄 For SEO
    └── fonts/
        └── Vazirmatn-Variable.woff2  ✅ Recommended
```

---

## 🔧 Environment Variables

IVA TIME does not use environment variables. All configuration is done through JavaScript constants in `app.js`.

## 🌐 CDN Alternative

If you prefer, you can also use the GitHub Pages version directly:

```html
<script src="https://kourosh242.github.io/iva-time/app.js"></script>
<link rel="stylesheet" href="https://kourosh242.github.io/iva-time/style.css" />
```

Note: This requires the files to be served from the same origin for full functionality.
