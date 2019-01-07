import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from "../modules/auth/reducer.js"

const enhancer = compose(applyMiddleware(thunk));

export default createStore(authReducer, enhancer);
