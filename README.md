# Oppam Family Counselling — www.oppamcounselling.com

A static, single-page site served by GitHub Pages from `main` (root). No build step, no frameworks, no third-party requests.

| Path | What it is |
| --- | --- |
| `index.html` | The whole site (content, SEO/Open Graph tags, JSON-LD, CSP) |
| `assets/css/site.css` | Styles, including dark mode |
| `assets/js/site.js` | Mobile menu and in-place contact form submit (the page works without it) |
| `images/` | Portrait (`sheela-*`), social card (`og-image.jpg`), icons |
| `404.html`, `robots.txt`, `sitemap.xml` | Housekeeping |
| `CNAME` | Custom domain — do not edit or delete |
| `.nojekyll` | Tells Pages to serve files as-is |

The contact form posts to Formspree (`https://formspree.io/f/xwkyqvjz`). If you change form providers, update both the form `action` and the `connect-src` / `form-action` entries in the Content-Security-Policy meta tag.

Before adding photos taken on a phone, strip their metadata (EXIF can include GPS location).
