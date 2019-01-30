import * as types from './actionTypes';

export const initialState = {
  chapters: [ false, true, true ],
  pages: [
    [false, true, true, true],
    [false, true, true, true, true, true, true],
    [false, true, true, true, true]
  ],
};

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UNLOCKED:
      const chapterUnlocked = action.chapterUnlocked;
      const newChapters = [ ...state.chapters];
      newChapters[chapterUnlocked] = false;
      return {...state, chapters: newChapters}

    default:
      return state;
  }
};

export default chapterReducer;
