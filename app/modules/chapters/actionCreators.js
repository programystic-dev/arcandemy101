import { CHAPTER_UNLOCKED, PAGE_UNLOCKED, GET_PROGRESS } from './actionTypes.js';

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

export const getProgress = (progress) => {
  return {
    type: GET_PROGRESS,
    progress
  }
}
