import { LOGGED_IN, LOGGED_OUT } from './actionTypes.js';

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

export const logout = () => {
  return {
    type: LOGGED_OUT,
  }
}
