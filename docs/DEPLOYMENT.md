# Deployment (GitHub Pages)

## Repository name decides the URL
- Repository `muhammad-sohaib-farooqi.github.io` gives `https://muhammad-sohaib-farooqi.github.io/` (the URL used in `robots.txt` and `sitemap.xml`).
- Any other name, e.g. `muhammad-sohaib-portfolio`, gives `https://muhammad-sohaib-farooqi.github.io/muhammad-sohaib-portfolio/`. In that case update `robots.txt` and `sitemap.xml`, and add the repo name to the absolute paths in `404.html` (`/assets/...`, `/`).

## Steps
1. Create an empty public repository on GitHub with the name above (no README).
2. Upload: `git init`, `git add .`, `git commit -m "Initial portfolio"`, `git branch -M main`, `git remote add origin <repo-url>`, `git push -u origin main`.
3. Repository Settings, Pages, Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Wait a minute or two, then open the URL.

## Verify the live site
- [ ] Page loads at the final URL with no console errors
- [ ] All nav links scroll to the right section
- [ ] GitHub, LinkedIn and email links work
- [ ] Theme toggle works and persists after reload
- [ ] Mobile menu opens and closes (Escape too)
- [ ] `/robots.txt`, `/sitemap.xml` and a bad URL (404 page) work

## You need to configure
- The final public URL (robots.txt, sitemap.xml; add `<link rel="canonical">` and `og:url` once known)
- Confirm the LinkedIn URL, which has a leading hyphen: `/in/-muhammad-sohaib-farooqi-/`
- Optional: replace the favicon; add a social preview image once you have a real screenshot
