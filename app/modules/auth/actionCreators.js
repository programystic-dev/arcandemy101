import { LOGGED_IN } from './actionTypes.js';

export const login = (user) => {
  return {
    type: LOGGED_IN,
    user
  }
}

export const register = (user) => {
  return {
    type: LOGGED_IN,
    user
  }
}
