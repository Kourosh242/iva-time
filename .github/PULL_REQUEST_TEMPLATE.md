# IVA TIME · آیوا تایم
# Documentation Pull Request · درخواست Pull مستندات

## 🇮🇷 فارسی

### چک‌لیست مستندات

- [ ] مستندات به هر دو زبان (فارسی و انگلیسی) نوشته شده‌اند
- [ ] کدها و مثال‌ها تست شده‌اند
- [ ] لینک‌ها معتبر هستند
- [ ] تصاویر و اسکرین‌شات‌ها (در صورت وجود) واضح هستند
- [ ] ساختار فایل‌ها رعایت شده است

### نکات مهم

- ویکی باید با فایل `Home.md` شروع شود
- فایل‌ها باید فرمت Markdown داشته باشند
- برای تصاویر از مسیرهای مطلق استفاده نکنید

---

## 🇬🇧 English

### Documentation Checklist

- [ ] Documentation written in both languages (Persian and English)
- [ ] Code examples tested
- [ ] Links are valid
- [ ] Images and screenshots (if any) are clear
- [ ] File structure followed

### Important Notes

- Wiki should start with `Home.md`
- Files must be in Markdown format
- Don't use absolute paths for images

---

## 📂 File Structure

```
wiki/
├── Home.md                 ← Required
├── _Sidebar.md            ← Navigation
├── *.md                   ← Other pages
└── images/                ← Local images (optional)
```

---

## ✍️ Writing Style

### Persian (RTL)
- Use RTL text direction
- Persian numerals: ۰۱۲۳۴۵۶۷۸۹
- Persian punctuation where appropriate
- Vazirmatn font for code blocks

### English (LTR)
- Clear, concise language
- American or British spelling consistently
- Proper grammar and punctuation

---

## 🔗 Linking

### Internal Links
```markdown
[Quick Start](Quick-Start)           ← Same folder
[Home](../wiki/Home)                ← Parent folder
```

### External Links
```markdown
[MDN Web Docs](https://developer.mozilla.org/)
[IANA Time Zones](https://www.iana.org/time-zones)
```
