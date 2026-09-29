/**
 * Tiny shared state between the DOM and the fixed WebGL stage.
 *
 * Dark sections declare which set they want behind them with
 * `data-stage="ribbons" | "shield"`; the stage watches those, and the hero's
 * click-and-hold writes `hold` here so the 3D can surge while it is pressed.
 */
export type StageMode = 'ribbons' | 'shield';

export const stageBus = {
  hold: false,
  listeners: new Set<() => void>(),
  setHold(v: boolean) {
    this.hold = v;
    this.listeners.forEach((l) => l());
  }
};
