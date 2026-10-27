// X's crawler needs absolute URLs in the card tags.
export const SITE_URL = "https://theugly.vercel.app";
export const POSTER_URL = `${SITE_URL}/x-poster.png`;
export const PLAYER_URL = `${SITE_URL}/embed`;

// Size of the iframe X renders a player card in on desktop.
export const PLAYER_WIDTH = 640;
export const PLAYER_HEIGHT = 480;

// Lets X (and the old twitter.com domains) frame the player page.
export const FRAME_ANCESTORS =
  "frame-ancestors 'self' https://x.com https://*.x.com https://twitter.com https://*.twitter.com";
