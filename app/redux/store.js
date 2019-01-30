import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../modules/auth/reducer.js';
import chapterReducer from '../modules/chapters/reducer.js';

const rootReducer = combineReducers({ authReducer, chapterReducer });

export default store = createStore(rootReducer, applyMiddleware(thunk));
