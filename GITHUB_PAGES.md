# Deploying to GitHub Pages

This project is set up to deploy to GitHub Pages via GitHub Actions when you push code to a GitHub repository.

## One-time setup after downloading the code

1. **Create a GitHub repo** and push this code to it.
2. In the repo, go to **Settings → Pages** → under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` runs automatically on push to `main`.
4. Your custom domain `uniquebeautyclinic.com` is pre-configured via `public/CNAME`. In your DNS provider add an `A` record pointing to GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   And a `CNAME` on `www` → `<your-user>.github.io`.

## Important limitations vs. Lovable hosting

GitHub Pages is **static-only**. The following features will NOT work there:

- Server functions (`createServerFn`)
- Server routes under `src/routes/api/*`
- The dynamic `sitemap.xml` route — replaced with a static `public/sitemap.xml`
- Per-route social meta tags via SSR (crawlers see the root `<title>` only)

Client-side routing works because the workflow copies `index.html` → `404.html` (SPA fallback).

## Build output

The workflow uploads whichever of these exists (in order): `.output/public`, `dist`, `.output/dist`, `build`.

If the current TanStack Start build doesn't produce a fully static output on your machine, you can force SPA mode locally by editing `vite.config.ts`:

```ts
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
    prerender: { enabled: true, crawlLinks: true },
  },
});
```

Then run `bun run build` and inspect the output folder.
