import * as types from './actionTypes';

export const initialState = {
  user_progress: {
    chapters: [false, true, true ],
    pages: [
      [false, true, true, true],
      [false, true, true, true, true, true, true],
      [false, true, true, true, true]
    ],
  },
};

const chapterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UNLOCKED:
      return state;

    default:
      return state;
  }
};

export default chapterReducer;
