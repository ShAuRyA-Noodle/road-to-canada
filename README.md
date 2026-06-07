# Road to Germany

A personal, installable progress tracker for the journey to a German CS master's (October 2027 intake). Everything you tick is saved on your device with `localStorage`. No login, no backend, no data leaves your phone.

## Run it

```bash
cd germany-journey
npm install
npm run dev
```

Open the printed `localhost` URL.

## Install on your phone

1. Deploy it free: `npm run build`, then drag the `dist/` folder to [vercel.com](https://vercel.com) or [netlify.com](https://app.netlify.com/drop).
2. Open the live URL on your phone.
3. iPhone Safari: Share, then "Add to Home Screen". Android Chrome: the "Install app" prompt appears.

It then runs full screen like a real app, offline.

## What is inside

- **Today** daily ritual tracker with a live streak (German, DSA, system design, courses, IELTS).
- **The Eleven** university tracker with a status dropdown per uni and an offers counter.
- **Paperwork** checklist for IELTS, LORs, APS, documents, and visa.
- **Route** the full 16-month timeline.
- A countdown ring to 1 October 2027 and a rotating wall of why-you-are-doing-this.

## Make it yours

All content lives in `src/lib/data.ts`. Edit universities, deadlines, rituals, checklist items, timeline, and affirmations there. The UI updates automatically.

## Notes

- PWA icons: `public/icon.svg` works for install. For best Android polish, export a 192px and 512px PNG named `icon-192.png` and `icon-512.png` into `public/`.
- Reset your data anytime: open the browser console and run `localStorage.clear()`.
