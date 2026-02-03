// if (import.meta.hot) {
//   import.meta.hot.accept(() => {
//     // console.log("index.ts updated via HMR");
//   });
// }

import { Assets } from "@/assets/Assets";
import { V } from "@/lib/vars";

const ELEMENTS_ID = { Canvas1: "canvas1" } as const;
type HTML_ELEMENTS = keyof typeof ELEMENTS_ID;

const canvas = document.getElementById(ELEMENTS_ID.Canvas1) as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const PLAYER_SPRITE = new Image();

canvas.width = V.CANVAS_WIDTH;
canvas.height = V.CANVAS_HEIGHT;
PLAYER_SPRITE.src = Assets.DogSprite;

function animate() {
  ctx?.clearRect(0, 0, V.CANVAS_WIDTH, V.CANVAS_HEIGHT);
  /**
   * ctx?.drawImage(image, SOURCE_X, SOURCE_Y, SOURCE_WIDTH, SOURCE_HEIGHT, DESTINATION_X, DESTINATION_Y, DESTINATION_WIDTH, DESTINATION_HEIGHT);
   * source: where on sprite is character located
   * destination: where on canvas character has to show
   */
  ctx?.drawImage(
    PLAYER_SPRITE,
    V.FRAME_X * V.SPRITE_WIDTH,
    V.FRAME_Y * V.SPRITE_HEIGHT,
    V.SPRITE_WIDTH,
    V.SPRITE_HEIGHT,
    0,
    0,
    V.SPRITE_WIDTH,
    V.SPRITE_HEIGHT,
  );

  if (V.GAME_FRAME % V.STAGGER_FRAME === 0) {
    if (V.FRAME_X < 6) V.FRAME_X++;
    else V.FRAME_X = 0;
  }

  V.GAME_FRAME++;
  requestAnimationFrame(animate);
}
animate();
