import { combineReducers } from 'redux';
import userReducer from './userReducer';
import userDataReducer from './userDataReducer';
import problemsReducer from './problemsReducer';

export default combineReducers({
  userReducer,
  userDataReducer,
  problemsReducer,
});
