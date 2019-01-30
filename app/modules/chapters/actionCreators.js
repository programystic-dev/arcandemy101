import { UNLOCKED } from './actionTypes.js';

export const unlock = (chapters) => {
  return {
    type: UNLOCKED,
    chapters
  }
}
