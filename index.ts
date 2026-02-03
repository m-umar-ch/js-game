if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("index.ts updated via HMR");
  });
}

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

  /**
   * frameX is used for staggering as well as animation. So there is a formula already for this
   * @formula = Math.floor(gameFrame / staggerFrames) % frames_of_current_action
   */
  //   ctx?.drawImage(
  //     PLAYER_SPRITE,
  //     V.frameX * V.SPRITE_WIDTH,
  //     V.frameY * V.SPRITE_HEIGHT,
  //     V.SPRITE_WIDTH,
  //     V.SPRITE_HEIGHT,
  //     0,
  //     0,
  //     V.SPRITE_WIDTH,
  //     V.SPRITE_HEIGHT,
  //   );

  //   if (V.gameFrame % V.staggerFrame === 0) {
  //     if (V.frameX < 6) V.frameX++;
  //     else V.frameX = 0;
  //   }

  let position = Math.floor(V.gameFrame / V.staggerFrame) % 5;
  V.frameX = position * V.SPRITE_WIDTH;
  ctx?.drawImage(
    PLAYER_SPRITE,
    V.frameX,
    V.frameY * V.SPRITE_HEIGHT,
    V.SPRITE_WIDTH,
    V.SPRITE_HEIGHT,
    0,
    0,
    V.SPRITE_WIDTH,
    V.SPRITE_HEIGHT,
  );

  V.gameFrame++;
  requestAnimationFrame(animate);
}
animate();
