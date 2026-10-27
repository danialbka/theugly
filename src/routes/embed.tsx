import { createFileRoute } from "@tanstack/react-router";
import { GameStage } from "../components/GameStage";

// The page X loads inside the tweet: just the game, filling the iframe.
export const Route = createFileRoute("/embed")({
  head: () => ({
    meta: [
      { title: "THE UGLY" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Embed,
});

function Embed() {
  return (
    <main className="embed-shell">
      <GameStage />
    </main>
  );
}
