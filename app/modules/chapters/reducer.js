import * as types from './actionTypes';
import data from '../../assets/data.json';
import { updateChapters, updatePages } from './api.js';
import { auth, database } from '../../config/firebase.js';

/* Generate initial states for Chapters and Pages based on JSON data
   when user register for the first time */
const generateInitialChaptersState = (chapters) => {
  const chaptersLocked = [ false ];
  for (let i = 1; i < chapters.length; i++)  {
    chaptersLocked.push(true);
  };
  return chaptersLocked;
}

const generateInitialPagesState = (chapters) => {
  const pagesRead = [];
  for (let i = 0; i < chapters.length; i++)  {
    pagesRead.push([]);
    for (let j = 0; j < chapters[i].pages.length; j++) {
      pagesRead[i].push(false);
    }
  };
  return pagesRead;
}

export const initialState = {
  chapters: generateInitialChaptersState(data.chapters),
  pages: generateInitialPagesState(data.chapters),
};

/* Create Chapters reducer */
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

    case types.GET_PROGRESS:
      const progress = action.progress;
      return {...state, chapters: progress.chapters, pages: progress.pages}

    default:
      return state;
  }
};

export default chapterReducer;
