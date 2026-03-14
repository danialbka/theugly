# The Ugly: TanStack Start + Ruffle

## Stack

- TanStack Start
- TanStack Router file-based routes
- React
- Vite
- TypeScript
- Ruffle

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

To build and run the production server:

```bash
npm run build
npm run start
```

## What it does

This app now embeds the archived original Flash movie instead of a reverse-engineered remake.

- `public/THE_UGLY.swf` is the local game binary
- `public/ruffle/` contains the Ruffle runtime files used by the client
- `src/routes/index.tsx` loads Ruffle on the client and mounts the SWF into the page

## Notes

- The archived SWF used here is Flash version 7 content.
- Runtime behavior depends on current Ruffle AVM1 compatibility.
- The embedded movie contains horror material and graphic content.
