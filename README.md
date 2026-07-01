# Road to Canada

An installable, offline-first progress tracker for the journey to a Canadian CS master's (September intake). Every box you tick is saved on your device with `localStorage`. No login, no backend, no data leaves your phone.

Built with React, TypeScript, Vite, Tailwind CSS, and a service worker, so it installs and runs like a native app.

## What is inside

- **Today** a daily ritual tracker with a live streak (French, DSA, system design, courses, IELTS).
- **The Eleven** a university tracker with a status dropdown per school and an offers counter.
- **Curriculum and DSA** focused study trackers for the long grind.
- **Paperwork** a checklist for IELTS, French, APS, documents, and visa.
- **Route** the full 16-month timeline.
- A countdown ring to the intake date and a rotating wall of why you are doing this.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL.

## Build and deploy

```bash
npm run build
```

The static output lands in `dist/`. Deploy it to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Because it is a PWA, the live site can be installed to a home screen and used offline.

## Install on your phone

1. Open the deployed URL on your phone.
2. iPhone Safari: Share, then "Add to Home Screen".
3. Android Chrome: tap the "Install app" prompt.

It then runs full screen, like a real app, offline.

## Make it yours

All content lives in `src/lib/data.ts`: universities, deadlines, rituals, checklist items, timeline, and affirmations. The UI updates automatically. The intake date and journey start live at the top of that file.

## Notes

- PWA icons live in `public/`: `icon.svg` plus `icon-192.png` and `icon-512.png` for Android polish.
- Reset your data anytime: open the browser console and run `localStorage.clear()`.

## Tech

- React 18 and TypeScript
- Vite 7 with `vite-plugin-pwa`
- Tailwind CSS 4
- Motion (Framer Motion) and Lenis for animation and smooth scrolling
- Phosphor Icons and Fontsource (Fraunces, Inter)
