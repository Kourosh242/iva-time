# Coding Standards · استانداردهای کدنویسی

## 🇮🇷 فارسی

### اصول کلی

1. **سادگی**: کد ساده و خوانا بنویسید
2. **مستندات**: توضیحات کافی برای توابع پیچیده
3. **ثابت‌ها**: از Magic Numbers پرهیز کنید
4. **نام‌گذاری**: نام‌های معنادار انتخاب کنید

### JavaScript

```javascript
// ✅ خوب - نام‌گذاری معنادار
const TIME_SOURCES = [...];
const offsetMs = calculateOffset();

// ❌ بد - نام‌های کوتاه و مبهم
const s = [...];
const o = calc();
```

### CSS

```css
/* ✅ خوب - BEM naming */
.card__header {
}
.card__title {
}
.card--featured {
}

/* ❌ بد - بدون ساختار */
.card-header {
}
.title {
}
.featured {
}
```

### HTML

```html
<!-- ✅ خوب - semantic و accessible -->
<button aria-label="Next month" data-action="nav-next">›</button>

<!-- ❌ بد - non-semantic -->
<div onclick="next()">›</div>
```

---

## 🇬🇧 English

### General Principles

1. **Simplicity**: Write simple, readable code
2. **Documentation**: Add comments for complex functions
3. **Constants**: Avoid Magic Numbers
4. **Naming**: Use meaningful names

### JavaScript

```javascript
// ✅ Good - meaningful naming
const TIME_SOURCES = [...];
const offsetMs = calculateOffset();

// ❌ Bad - short and ambiguous
const s = [...];
const o = calc();
```

### CSS

```css
/* ✅ Good - BEM naming */
.card__header {
}
.card__title {
}
.card--featured {
}

/* ❌ Bad - unstructured */
.card-header {
}
.title {
}
.featured {
}
```

### HTML

```html
<!-- ✅ Good - semantic and accessible -->
<button aria-label="Next month" data-action="nav-next">›</button>

<!-- ❌ Bad - non-semantic -->
<div onclick="next()">›</div>
```

---

## 📋 Checklist

- [ ] No console.log statements
- [ ] All event handlers have proper cleanup
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] No duplicate IDs
- [ ] Semantic HTML elements used
- [ ] CSS variables for theming
- [ ] Mobile-first responsive design
- [ ] No inline styles (except dynamic values)
- [ ] No inline scripts

---

## 🔧 Tools

- Use ESLint for JavaScript linting
- Use Prettier for code formatting
- Use WAVE for accessibility checking

## 📚 References

- [JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [CSS Guidelines](https://cssguidelin.es/)
- [HTML Semantics](https://html.spec.whatwg.org/)
- [WAI-ARIA](https://www.w3.org/WAI/ARIA/)
