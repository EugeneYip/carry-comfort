# Carry Comfort Website

This project is a Vite + React landing page originally generated with lovable.dev.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages deployment (Custom domain: `carryco.pro`)

This repository is configured for GitHub Pages deployment via GitHub Actions.

### What is set up

- `.github/workflows/deploy-gh-pages.yml` installs dependencies (`npm install --no-audit --no-fund`), builds, and deploys on every push to `main`.
- `public/CNAME` contains `carryco.pro`, so GitHub Pages keeps the custom domain during deploys.
- `npm run build:pages` creates a SPA-friendly `dist/404.html` by copying `dist/index.html`.

### First-time GitHub configuration

1. Push this repo to GitHub.
2. In **Settings → Pages**:
   - Set **Source** to **GitHub Actions**.
3. In your DNS provider, point `carryco.pro` to GitHub Pages by adding the required A/AAAA/CNAME records shown in GitHub Pages settings.
4. Wait for DNS propagation, then verify HTTPS is enabled in Pages settings.
