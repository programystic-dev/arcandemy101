import { auth } from '../../config/firebase.js';

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(response => response.user)
      .then(user => {
        resolve(user);
      }).catch(function(error) {
        reject(error);
      });
  });
}

export const registerUser = (email, password) => {
  return new Promise((resolve, reject) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(response => response.user)
      .then(user => {
        resolve(user);
      }).catch(function(error) {
        reject(error);
      });
  });
}
