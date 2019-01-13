import * as types from './actionTypes';

let initialState = { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGGED_IN:
      const user = action.user;
      return {...state, isLoggedIn: true, user };

    case types.LOGGED_OUT:
      return {...state, isLoggedIn: false, user: null};

    default:
      return state;
  }
};

export default authReducer;
