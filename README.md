# Studio Rajsri Website

A modern, minimalist React + Vite single-page website for Studio Rajsri.

## Stack
- React 19
- Vite 7
- Plain CSS (no heavy UI library)
- WhatsApp deep links for advance document/printing requests
- Fully static frontend, so it can be deployed on Cloudflare Pages free tier

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```

The production files are created in `dist/`.

## Cloudflare Pages

### Git deployment
1. Put this project in a GitHub repository.
2. In Cloudflare Dashboard → Workers & Pages → Create → Pages.
3. Connect the repository.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Deploy.

### Direct upload
Run `npm install && npm run build`, then upload the generated `dist` directory in Cloudflare Pages.

No server is required for the current version.

## WhatsApp workflow

The advance-order form does not upload files to a server. It creates a pre-filled WhatsApp message and opens WhatsApp, where the customer attaches the actual documents/photos.

This keeps the first version simple and avoids needing a database, authentication, or file-storage backend.

## Important service wording

The CSC list is intentionally limited to common services. Availability can vary by portal, eligibility and local CSC access. The site does not claim Aadhaar enrollment/update services.
