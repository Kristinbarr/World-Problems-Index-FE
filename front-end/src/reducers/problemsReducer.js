import {
  PROBLEMS_FETCHING,
  PROBLEMS_SUCCESS,
  PROBLEMS_FAILURE
} from '../actions'

import {
  SINGLE_PROBLEM_FETCHING,
  SINGLE_PROBLEM_SUCCESS,
  SINGLE_PROBLEM_FAILURE
} from '../actions'

import {
  SUBMIT_PROBLEM_FETCHING,
  SUBMIT_PROBLEM_SUCCESS,
  SUBMIT_PROBLEM_FAILURE
} from '../actions'

import {
  SUBMIT_SOLUTION_FETCHING,
  SUBMIT_SOLUTION_SUCCESS,
  SUBMIT_SOLUTION_FAILURE
} from '../actions'

export const initialState = {
  fetchingProblems: false,
  isSubmitting: false,
  problemsList: [],
  problem: {},
  solution: {}, //not sure if this is correct for the data
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
      // SINGLE PROBLEM
    case SINGLE_PROBLEM_FETCHING:
      return {
        ...state,
        fetchingProblems: true
      }
    case SINGLE_PROBLEM_SUCCESS:
      return {
        ...state,
        fetchingProblems: false,
        problem: action.payload
      }
    case SINGLE_PROBLEM_FAILURE:
      return {
        ...state,
        fetchingProblems: false,
        error: action.payload
      }
      // SUBMIT PROBLEM
    case SUBMIT_PROBLEM_FETCHING:
      return {
        ...state,
        isSubmitting: true
      }
    case SUBMIT_PROBLEM_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        problemsList: [...state.problemsList, ...action.payload],
        problem: action.payload
      }
    case SUBMIT_PROBLEM_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        error: action.payload
      }
      // SUBMIT SOLUTION
    case SUBMIT_SOLUTION_FETCHING:
      return {
        ...state,
        isSubmitting: true
      }
    case SUBMIT_SOLUTION_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        solution: action.payload
      }
    case SUBMIT_SOLUTION_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default problemsReducer
