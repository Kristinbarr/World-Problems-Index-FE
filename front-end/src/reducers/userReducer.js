import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions'
import { LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions'

export const initialState = {
  loggedin: false,
  loggedinLoading: false,
  problemList: [],
  problem: {},
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_FETCHING:
      return {
        ...state,
        signingUp: true
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        user: {
          ...action.payload
        }
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        signUpErr: action.payload
      }
    default:
      return state
  }
}

export default userReducer
