import { auth, database } from '../../config/firebase.js';

export const updateChapters = (chapters) => {
  const uid = auth.currentUser.uid;
  const updates = {};
  updates['/users/' + uid + '/progress/chapters' ] = chapters;
  return database.ref().update(updates);
}

export const updatePages = (pages) => {
  const uid = auth.currentUser.uid;
  const updates = {};
  updates['/users/' + uid + '/progress/pages' ] = pages;
  return database.ref().update(updates);
}
