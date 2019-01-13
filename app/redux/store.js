import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../modules/auth/reducer.js';

export default store = createStore(authReducer, applyMiddleware(thunk));
