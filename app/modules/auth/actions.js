import {auth, database, provider} from "../../config/firebase";
import * as types from './actionTypes';

export function register(email, password) {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((resp) => {
      console.log('User created:' + resp);
    }).catch(function(error) {
      console.log(error.message);
    });
  }
}

export function login(email, password) {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((resp) => {
      let { user } = resp;
      console.log('User logged in:' + user);
      dispatch({ type: t.LOGGED_IN, user });
    }).catch(function(error) {
      console.log(error.message);
    });
  }
}
