import {
  PROBLEMS_FETCHING,
  PROBLEMS_SUCCESS,
  PROBLEMS_FAILURE
} from '../actions'

export const initialState = {
  fetchingProblems: false,
  problemList: [],
  problem: {},
  error: ''
}

const problemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROBLEMS_FETCHING:
      return {
        ...state,
        fetchingProblems: true
      }
    case PROBLEMS_SUCCESS:
      return {
        ...state,
        fetchingProblems: false,
        user: {
          ...action.payload
        }
      }
    case PROBLEMS_FAILURE:
      return {
        ...state,
        fetchingProblems: false,
        signUpErr: action.payload
      }
    default:
      return state
  }
}

export default problemsReducer
