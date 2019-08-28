import { combineReducers } from 'redux'
import userReducer from './userReducer'
import problemsReducer from './problemsReducer'

export default combineReducers({
  userReducer, problemsReducer
})
