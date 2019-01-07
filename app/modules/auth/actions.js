import { auth } from "../../config/firebase";
import * as types from './actionTypes';
import store from '../../redux/store.js';

export function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
    .then((resp) => {
      let {user} = resp;
      store.dispatch({type: types.LOGGED_IN, user});
    }).catch(function(error) {
      console.log(error.message);
    });
}

export function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((resp) => {
      let {user} = resp;
      store.dispatch({type: types.LOGGED_IN, user});
    }).catch(function(error) {
      console.log(error.message);
    });
}
