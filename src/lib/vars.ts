if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("vars.ts updated via HMR");
  });
}

/**
 * @info Global constants and derived values
 * - constants in caps
 * - variables in camelCase
 */
export const V = {
  CANVAS_WIDTH: 600,
  CANVAS_HEIGHT: 600,
  DOG_SPRITE_WIDTH: 6876,
  DOG_SPRITE_HEIGHT: 5230,
  DOG_SPRITE_COLUMNS: 12,
  DOG_SPRITE_ROWS: 10,
  get SPRITE_WIDTH() {
    return this.DOG_SPRITE_WIDTH / this.DOG_SPRITE_COLUMNS + 2;
  },
  get SPRITE_HEIGHT() {
    return this.DOG_SPRITE_HEIGHT / this.DOG_SPRITE_ROWS;
  },

  gameFrame: 0,
  staggerFrame: 4,
  frameX: 0,
  frameY: 0,
};

const spriteAnimations: any = [];
const animationStates = [
  { name: "idle", frames: 7 },
  { name: "jump", frames: 7 },
  { name: "fall", frames: 9 },
  { name: "run", frames: 9 },
  { name: "dizzy", frames: 11 },
  { name: "sit", frames: 5 },
  { name: "roll", frames: 7 },
  { name: "bite", frames: 7 },
  { name: "KO", frames: 12 },
  { name: "getHit", frames: 4 },
] as const;

animationStates.forEach((item, idx) => {
  let frames: { loc: { x: number; y: number }[] } = {
    loc: [],
  };
  for (let j = 0; j < item.frames; j++) {
    let positionX = j * V.SPRITE_WIDTH;
    let positionY = idx * V.SPRITE_HEIGHT;
    frames.loc.push({ x: positionX, y: positionY });
  }
  spriteAnimations[item.name] = frames;
});

// 38:58
