import { CHAPTER_UNLOCKED, PAGE_UNLOCKED } from './actionTypes.js';

export const unlockChapter = (chapterUnlocked) => {
  return {
    type: CHAPTER_UNLOCKED,
    chapterUnlocked
  }
}

export const unlockPage = (pageData) => {
  return {
    type: PAGE_UNLOCKED,
    pageData
  }
}
