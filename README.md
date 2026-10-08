# Muhammad Sohaib Farooqi: Portfolio

A static, accessible personal portfolio for a first-semester BS Computer Science student. It describes current studies and interests honestly and makes it easy to add real projects later.

## Features
Responsive layout, sticky navigation with mobile menu (Escape closes it), dark/light theme saved in localStorage, subtle scroll reveal and progress bar, reduced-motion support, content visible without JavaScript, config-driven projects list.

## Technologies
HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JavaScript. System font stack and inline SVG icons: no external dependencies.

## Structure
```
index.html  404.html  robots.txt  sitemap.xml  LICENSE  .gitignore
assets/css/style.css   assets/js/main.js   assets/js/projects-data.js
assets/images/   assets/favicon/favicon.svg   docs/DEPLOYMENT.md
```

## Local setup
Open `index.html` in a browser, or run `python -m http.server` in this folder and visit `http://localhost:8000`.

## Deployment
See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Customization
- Add projects in `assets/js/projects-data.js` (title, description, technologies, repo, optional image). Only add real repositories.
- Colors, spacing and fonts are CSS variables at the top of `assets/css/style.css`.
- Update coursework, education and interests directly in `index.html`.

## Accessibility checklist (to run manually)
- [ ] Tab through the whole page; focus is always visible, no traps
- [ ] Mobile menu works by keyboard; Escape closes it
- [ ] Skip link appears on first Tab
- [ ] Check contrast in both themes
- [ ] Enable reduced motion; nothing animates
- [ ] Test with a screen reader; icon buttons have names
- [ ] Zoom to 200%

No formal WCAG audit has been performed.

## Testing checklist
Widths 320, 375, 768, 1024, 1440 with no horizontal scroll; all links valid; theme persists; no console errors; works with JavaScript disabled.

## Known limitations
No contact form (email and social links only). No canonical URL or social preview image until the final URL and a real screenshot exist. Automated and cross-browser testing have not been run.

## Author
Muhammad Sohaib Farooqi, Karachi, Pakistan · [GitHub](https://github.com/muhammad-sohaib-farooqi) · [LinkedIn](https://www.linkedin.com/in/-muhammad-sohaib-farooqi-/) · 0.sohaibfarooqi.0@gmail.com

## License
MIT, see [LICENSE](LICENSE).
