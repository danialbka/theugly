import { createFileRoute } from "@tanstack/react-router";
import { GameStage } from "../components/GameStage";
import {
  PLAYER_HEIGHT,
  PLAYER_URL,
  PLAYER_WIDTH,
  POSTER_URL,
  SITE_URL,
} from "../site";

const CARD_TITLE = "THE UGLY";
const CARD_DESCRIPTION =
  "Play the original Flash horror game right here. Click to start.";

export const Route = createFileRoute("/")({
  // X player card: a tweet linking here plays /embed inline in the timeline.
  head: () => ({
    meta: [
      { name: "twitter:card", content: "player" },
      { name: "twitter:title", content: CARD_TITLE },
      { name: "twitter:description", content: CARD_DESCRIPTION },
      { name: "twitter:image", content: POSTER_URL },
      { name: "twitter:player", content: PLAYER_URL },
      { name: "twitter:player:width", content: String(PLAYER_WIDTH) },
      { name: "twitter:player:height", content: String(PLAYER_HEIGHT) },
      { property: "og:type", content: "website" },
      { property: "og:title", content: CARD_TITLE },
      { property: "og:description", content: CARD_DESCRIPTION },
      { property: "og:image", content: POSTER_URL },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="page-shell">
      <h1 className="page-title">THE UGLY</h1>
      <div className="stage-shell">
        <GameStage />
      </div>
    </main>
  );
}
