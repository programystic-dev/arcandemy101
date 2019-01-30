import { UNLOCKED } from './actionTypes.js';

export const unlock = (chapterUnlocked) => {
  return {
    type: UNLOCKED,
    chapterUnlocked
  }
}
