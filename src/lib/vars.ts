if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("vars.ts updated via HMR");
  });
}

const animationStates = [
  { name: "idle", frames: 7 },
  { name: "jump", frames: 7 },
  { name: "fall", frames: 7 },
  { name: "run", frames: 9 },
  { name: "dizzy", frames: 11 },
  { name: "sit", frames: 5 },
  { name: "roll", frames: 7 },
  { name: "bite", frames: 7 },
  { name: "KO", frames: 12 },
  { name: "getHit", frames: 4 },
] as const;
type AnimationName = (typeof animationStates)[number]["name"];
type SpriteAnimations = Record<AnimationName, { loc: { x: number; y: number }[] }>;

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
    return this.DOG_SPRITE_WIDTH / this.DOG_SPRITE_COLUMNS + 2; // 2 is arbitrary, just for width adjustment
  },
  get SPRITE_HEIGHT() {
    return this.DOG_SPRITE_HEIGHT / this.DOG_SPRITE_ROWS;
  },

  gameFrame: 0,
  staggerFrame: 5,
  frameX: 0,
  frameY: 0,
  playerState: "fall" as AnimationName,
};

const spriteAnimations: SpriteAnimations = {} as SpriteAnimations;

animationStates.forEach((item, idx) => {
  spriteAnimations[item.name] = { loc: [] };

  for (let i = 0; i < item.frames; i++) {
    spriteAnimations[item.name].loc.push({
      x: V.SPRITE_WIDTH * i,
      y: V.SPRITE_HEIGHT * idx,
    });
  }
});

export { spriteAnimations, type AnimationName, animationStates };
