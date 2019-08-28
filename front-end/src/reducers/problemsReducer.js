import {
  PROBLEMS_FETCHING,
  PROBLEMS_SUCCESS,
  PROBLEMS_FAILURE
} from '../actions'

export const initialState = {
  fetchingProblems: false,
  problemsList: [],
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
        problemsList: [...state.problemsList, ...action.payload]
      }
    case PROBLEMS_FAILURE:
      return {
        ...state,
        fetchingProblems: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default problemsReducer
