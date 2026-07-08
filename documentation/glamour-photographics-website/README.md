# Glamour Photographics — Website Package

## What's in this folder
```
index.html      → Main page markup
styles.css      → All styling (extracted from inline <style>)
script.js       → All interactivity/animations (extracted from inline <script>)
images/         → All images as real files (extracted from base64)
  ├─ logo.png
  ├─ cii-event-coverage.jpg
  ├─ celebrity-portrait.jpg
  ├─ outdoor-event.jpg
  └─ corporate-event.jpg
```

## How to use
1. Keep all files in the same relative folder structure — `index.html` links to `styles.css` and `script.js` via relative paths, and both reference `images/`.
2. Open `index.html` directly in a browser to preview, or drop the whole folder onto any static host (Netlify, Vercel, cPanel, WordPress theme assets folder, etc.).
3. No build step, no dependencies — it's plain HTML/CSS/JS. The only external dependency is Google Fonts (Cormorant Garamond, Inter, Bebas Neue), loaded via `<link>` tags in the `<head>`.

## Notes for the developer
- This was originally a single self-contained HTML file (all CSS/JS/images inline as base64) — it's been split out here into standard files for easier editing, version control, and browser caching.
- The interactive image strip (hover/lightbox behavior), the branded loader screen, and the cursor-follow effect are all in `script.js`.
- Site sections (as ordered in `index.html`): nav → hero/loader → about → image strip → services → clients (CII, CGI, Presidency University, Tata Elxsi) → contact (with embedded Google Map) → footer.
- Contact number and social links are hardcoded in a few places in `index.html` — search for `wa.me` / `facebook.com` / `instagram.com` if these ever need updating.
