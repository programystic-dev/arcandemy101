import * as types from './actionTypes';
import { AsyncStorage } from 'react-native';

let initialState = { isLoggedIn: false, user: null };

const storeUser = async (user) => {
  try {
    await AsyncStorage.multiSet([['isLoggedIn', 'true'], ['user', JSON.stringify(user)]]);
  } catch (error) {
    console.log(error);
  }
}

const deleteUser = async () => {
  try {
    await AsyncStorage.multiRemove(['isLoggedIn', 'user']);
  } catch (error) {
    console.log(error);
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGGED_IN:
      const user = action.user;
      storeUser(user);
      return {...state, isLoggedIn: true, user }

    case types.LOGGED_OUT:
      deleteUser();
      return {...state, isLoggedIn: false, user: null};

    default:
      deleteUser();
      return state;
  }
};

export default authReducer;
