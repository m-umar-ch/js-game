if (import.meta.hot) {
  import.meta.hot.accept(() => {
    // console.log("index.ts updated via HMR");
  });
}

import { Assets } from "@/assets/Assets";

const ELEMENTS_ID = { Canvas1: "canvas1" } as const;
type HTML_ELEMENTS = keyof typeof ELEMENTS_ID;

const canvas = document.getElementById(ELEMENTS_ID.Canvas1) as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const PLAYER_SPRITE = new Image();

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
PLAYER_SPRITE.src = Assets.DogSprite;

console.log("hello3");

function animate() {
  ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  /**
   * ctx?.drawImage(image, SOURCE_X, SOURCE_Y, SOURCE_WIDTH, SOURCE_HEIGHT, DESTINATION_X, DESTINATION_Y, DESTINATION_WIDTH, DESTINATION_HEIGHT);
   * source: where on sprite is character located
   * destination: where on canvas character has to show
   */
  ctx?.drawImage(PLAYER_SPRITE, 0, 0, 542, 542, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  requestAnimationFrame(animate);
}
animate();
