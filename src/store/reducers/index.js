// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './loginReducer'; // import loginReducer

const rootReducer = combineReducers({
  login: loginReducer, // add loginReducer
});

export default rootReducer;