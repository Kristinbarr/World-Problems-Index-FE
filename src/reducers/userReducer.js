import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions";
import { LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";
import { USER_FETCHING, USER_SUCCESS, USER_FAILURE } from "../actions";

export const initialState = {
  signingUp: false,
  user: {},
  userData: {},
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_FETCHING:
      return {
        ...state,
        signingUp: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        user: action.payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
    case LOGIN_FETCHING:
      return {
        ...state,
        signingUp: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        signingUp: false,
        user: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
    case USER_FETCHING:
      return {
        ...state,
        signingUp: true
      };
    case USER_SUCCESS:
      return {
        ...state,
        signingUp: false,
        userData: action.payload
      };
    case USER_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
