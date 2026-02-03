/**
 * @info Global constants and derived values
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

  GAME_FRAME: 0,
  STAGGER_FRAME: 4,
  FRAME_X: 0,
  FRAME_Y: 0,
};
