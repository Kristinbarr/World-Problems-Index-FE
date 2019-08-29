import { USER_FETCHING, USER_SUCCESS, USER_FAILURE } from '../actions';

export const initialState = {
  userData: {},
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCHING:
      return {
        ...state,
        signingUp: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        signingUp: false,
        userData: action.payload,
      };
    case USER_FAILURE:
      return {
        ...state,
        signingUp: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
