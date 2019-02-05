import * as types from './actionTypes';

export const initialState = {
  chapters: [ false, true, true ],
  pages: [
    [false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false]
  ],
};

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHAPTER_UNLOCKED:
      const chapterUnlocked = action.chapterUnlocked;
      const newChapters = [ ...state.chapters];
      newChapters[chapterUnlocked] = false;
      return {...state, chapters: newChapters}

    case types.PAGE_UNLOCKED:
      const { pageId, chapterId } = action.pageData;
      const newPages = [ ...state.pages];
      newPages[chapterId][pageId] = true;
      return {...state, pages: newPages}

    default:
      return state;
  }
};

export default chapterReducer;
