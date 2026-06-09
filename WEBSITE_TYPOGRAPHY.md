# Emertech Website Font Configuration

## Overview
This document describes the exact typography setup used in the current Emertech website implementation. It is designed to be copied into other websites with the same body and heading font system, weight usage, and spacing rules.

---

## 🎯 Current Fonts

### 1. Body Text Font
- **Font Name**: Raleway
- **Source**: Google Fonts
- **Imported Weights**: 400, 500, 600, 700
- **Fallback**: sans-serif
- **Import URL**:
  ```text
  https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap
  ```

### 2. Heading Font
- **Font Name**: Trebuchet MS
- **Fallback Stack**: Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif
- **Source**: System font (no external import needed)

---

## 📦 Implementation Details

### Google Fonts setup (Next.js head)
Add these tags inside the `<head>` of your HTML/layout:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### CSS import
In the top of your main CSS file:

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
```

### Root font variables
Use the same custom properties as the project:

```css
:root {
  --font-heading: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  --font-display: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  --font-body: 'Raleway', sans-serif;
  --font-sans: 'Raleway', sans-serif;
}
```

### Global font application
These are the exact rules used in `src/app/globals.css`:

```css
body {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.7;
  font-feature-settings: 'cv11', 'ss01';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body h1,
body h2,
body h3,
body h4,
body h5,
body h6 {
  font-family: var(--font-heading);
  letter-spacing: -0.022em;
  font-weight: 700;
  color: inherit;
}

p {
  line-height: 1.7;
}
```

### Tailwind CSS configuration
If you are using Tailwind, match the project by adding these font family mappings:

```ts
extend: {
  fontFamily: {
    sans: ['Raleway', 'sans-serif'],
    body: ['Raleway', 'sans-serif'],
    heading: [
      'Trebuchet MS',
      'Lucida Sans Unicode',
      'Lucida Grande',
      'Lucida Sans',
      'Arial',
      'sans-serif',
    ],
  },
},
```

Use `font-heading` for headings and `font-body` / `font-sans` for body text.

---

## 🎨 Typography Rules

| Element | Font | Weight | Line Height | Letter Spacing | Notes |
|--------|------|--------|-------------|----------------|-------|
| Body copy | Raleway | 400 | 1.7 | normal | Default paragraph text |
| Emphasis / subtle strong text | Raleway | 500 | 1.7 | normal | Use `font-medium` |
| Labels & UI accents | Raleway | 600 | 1.7 | normal | Use `font-semibold` |
| Headings | Trebuchet MS | 700 | inherit* | -0.022em | Use `font-heading` and `font-bold` |

*Heading line-height is typically inherited from the surrounding text or utility classes.

### Weight usage
- `font-normal` / `400`: default body text
- `font-medium` / `500`: highlighted body phrases and inline emphasis
- `font-semibold` / `600`: subheads, labels, bold UI text
- `font-bold` / `700`: main headings, section titles, strong emphasis

---

## ✅ Recommended Copy for Another Website

1. Load Raleway weights `400`, `500`, `600`, `700` only.
2. Keep Trebuchet MS as the primary heading face.
3. Apply Raleway to the page body and all normal text.
4. Apply Trebuchet MS to all heading tags (`h1`–`h6`).
5. Use `display=swap` when loading Google Fonts.
6. Keep heading letter-spacing at `-0.022em` for the same Emertech feel.
7. Maintain body paragraph line-height at `1.7`.

---

## 📝 Notes

- The live project does not import Trebuchet MS; it relies on the system font stack.
- The font stack is intentionally broad to ensure consistent rendering across devices.
- Raleway is the only externally imported font.
- Avoid importing unnecessary extra weights.

---

## 🚀 Validation Checklist

- [ ] Confirm `Raleway` is loaded from Google Fonts with weights `400`, `500`, `600`, `700`
- [ ] Confirm body text is using `var(--font-body)`
- [ ] Confirm headings are using `var(--font-heading)`
- [ ] Confirm paragraphs use `line-height: 1.7`
- [ ] Confirm headings use `letter-spacing: -0.022em`
- [ ] Confirm body font weight defaults to `400`
- [ ] Confirm heading font weight is `700`
- [ ] Test on Chrome, Firefox, Safari, and Edge

