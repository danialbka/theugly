# The Ugly

This project is a TanStack Start site that embeds the archived Flash version of **The Ugly** in a modern browser through Ruffle.

## Credits

- Original Flash game: **Juliano Reina** (`jreinalab`)
- Modern web wrapper: TanStack Start + Ruffle integration by this repo

## Overview

The app keeps the original Flash game intact and serves it inside a minimal web page:

- `public/THE_UGLY.swf` contains the archived game file
- `public/ruffle/` contains the self-hosted Ruffle runtime
- `src/routes/index.tsx` mounts the Flash movie in the center of the page

## Tech

- TanStack Start
- TanStack Router
- React
- Vite
- TypeScript
- Ruffle

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

To build and run production locally:

```bash
npm run build
npm run start
```

## Live site

- GitHub: [danialbka/theugly](https://github.com/danialbka/theugly)
- Vercel: [theugly.vercel.app](https://theugly.vercel.app)

## Play inside a tweet (X player card)

Tweet `https://theugly.vercel.app/` and the game plays right in the timeline, so nobody has to leave X.

- `/` serves the `twitter:card=player` tags, which point X at `/embed`
- `/embed` is just the game, filling X's 640x480 iframe
- `public/x-poster.png` (1200x900) is the preview image shown before someone clicks play
- `vite.config.ts` lets X frame `/embed` (`frame-ancestors`) and sends CORS headers on the game files, because X's sandboxed iframe may load the page with an opaque origin

X caches a card the first time it sees a URL. If you change the tags after tweeting, tweet `https://theugly.vercel.app/?v=2` to get a fresh card.

## Notes

- The project embeds the archived original Flash release rather than a remake.
- The archived SWF is Flash Player 7 era content.
- Runtime behavior depends on current Ruffle AVM1 compatibility.
- The game contains horror and graphic material.
- Original creator credit is based on the Newgrounds release page and `jreinalab` author profile.
