# The Ugly

This project is a TanStack Start site that embeds the archived Flash version of **The Ugly** in a modern browser through Ruffle.

## Credits

- Original Flash game: **Aran**
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

## Notes

- The project embeds the archived original Flash release rather than a remake.
- The archived SWF is Flash Player 7 era content.
- Runtime behavior depends on current Ruffle AVM1 compatibility.
- The game contains horror and graphic material.
- Original creator credit is based on public listings for the Flash release.
