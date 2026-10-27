import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { FRAME_ANCESTORS } from "./src/site";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart(),
    viteReact(),
    nitro({
      routeRules: {
        "/embed": {
          headers: { "Content-Security-Policy": FRAME_ANCESTORS },
        },
        // X's sandboxed iframe can give the embed an opaque origin, which
        // turns its module scripts, wasm and SWF fetches into CORS requests.
        "/assets/**": { cors: true },
        "/ruffle/**": { cors: true },
        "/THE_UGLY.swf": { cors: true },
      },
    }),
  ],
});
