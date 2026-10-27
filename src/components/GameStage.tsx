import { useEffect, useRef, useState } from "react";

export const SWF_PATH = "/THE_UGLY.swf";
const RUFFLE_SCRIPT_PATH = "/ruffle/ruffle.js";

type PlayerStatus = "loading" | "ready" | "error";

type RufflePlayerHandle = HTMLElement & {
  ruffle: () => {
    load: (movie: string) => Promise<unknown> | unknown;
  };
};

type RuffleFactory = {
  createPlayer: () => RufflePlayerHandle;
};

declare global {
  interface Window {
    RufflePlayer?: {
      newest?: () => RuffleFactory;
      config?: Record<string, unknown>;
    };
  }
}

let ruffleScriptPromise: Promise<void> | null = null;

export function GameStage() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<PlayerStatus>("loading");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function mountPlayer() {
      try {
        setStatus("loading");
        setErrorText("");

        await ensureRuffleLoaded();
        if (cancelled || !hostRef.current || !window.RufflePlayer?.newest) {
          return;
        }

        hostRef.current.innerHTML = "";

        const player = window.RufflePlayer.newest().createPlayer();
        player.style.width = "100%";
        player.style.height = "100%";
        player.style.display = "block";

        hostRef.current.appendChild(player);
        await player.ruffle().load(SWF_PATH);

        if (!cancelled) {
          setStatus("ready");
        }
      } catch (error) {
        if (!cancelled) {
          setStatus("error");
          setErrorText(
            error instanceof Error ? error.message : "Ruffle failed to load the movie.",
          );
        }
      }
    }

    mountPlayer();

    return () => {
      cancelled = true;
      if (hostRef.current) {
        hostRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="stage-frame">
      <div ref={hostRef} className="ruffle-host" />
      {status === "loading" ? (
        <div className="overlay-message">Loading…</div>
      ) : null}
      {status === "error" ? (
        <div className="overlay-message overlay-message--error">
          <p>Could not load the game.</p>
          <p>{errorText}</p>
          <p>
            {/* Links must open a new tab: the X player card iframe is sandboxed. */}
            <a href={SWF_PATH} target="_blank" rel="noopener">
              Open the SWF
            </a>
          </p>
        </div>
      ) : null}
    </div>
  );
}

function ensureRuffleLoaded() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.RufflePlayer?.newest) {
    return Promise.resolve();
  }

  if (ruffleScriptPromise) {
    return ruffleScriptPromise;
  }

  ruffleScriptPromise = new Promise<void>((resolve, reject) => {
    window.RufflePlayer = window.RufflePlayer ?? {};

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${RUFFLE_SCRIPT_PATH}"]`,
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Ruffle script failed to load.")),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = RUFFLE_SCRIPT_PATH;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Ruffle script failed to load.")),
      { once: true },
    );
    document.head.appendChild(script);
  });

  return ruffleScriptPromise;
}
