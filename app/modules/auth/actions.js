import { auth } from "../../config/firebase";
import * as types from './actionTypes';

export function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
    .then((resp) => {
      console.log('User created!');
    }).catch(function(error) {
      console.log(error.message);
    });
}

export function login(email, password) {
  return (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
    .then((resp) => {
      let { user } = resp;
      console.log('User logged in:' + user);
      dispatch({ type: t.LOGGED_IN, user });
    }).catch(function(error) {
      console.log(error.message);
    });
  }
}
