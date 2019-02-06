import { auth, database } from '../../config/firebase.js';
import { initialState } from '../chapters/reducer.js';

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(resp => {
        database.ref('users').child(resp.user.uid).once('value')
          .then(snapshot => {
            if (snapshot.val() !== null) {
              let user = snapshot.val();
              resolve(user);
            }
          }).catch((error) => reject(error));
      }).catch((error) => reject({message: error}));
  });
}

export const registerUser = (email, password) => {
  return new Promise((resolve, reject) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(resp => {
        let user = {email, uid: resp.user.uid, progress: initialState}
        createUser(user)
          .then(resolve(user))
          .catch((error) => reject({message: error}));
      }).catch(function(error) {
        reject(error);
      });
  });
}

export function createUser(user) {
  return new Promise((resolve, reject) => {
    const userRef = database.ref().child('users');
    userRef.child(user.uid).update({...user})
      .then(() => { resolve(user); })
      .catch((error) => reject({message: error}));
  });
}
