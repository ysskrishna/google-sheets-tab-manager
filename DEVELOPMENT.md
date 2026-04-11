## Development

The GitHub Pages site lives in [`website/`](website/) (Astro). To work on it locally:

```bash
cd website && npm ci && npm run dev
```

Production builds use `npm run build` and output to `website/dist/`.

**Deploy:** In the repo’s **Settings → Pages**, set the source to **GitHub Actions** (not `/docs`). Pushes to `main` run [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which publishes `website/dist`.

Screenshots and icons for both the README and the live site live under [`website/public/assets/`](website/public/assets/).