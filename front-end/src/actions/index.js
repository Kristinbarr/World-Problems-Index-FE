import axios from "axios";

export const SIGNUP_FETCHING = "SIGNUP_FETCHING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signup = user => dispatch => {
  console.log("User: ", user);
  dispatch({ type: SIGNUP_FETCHING });
  return axios
  .post(
    "https://the-world-problems-index.herokuapp.com/api/auth/register",
      user
      )
    .then(res => {
      console.log("token response: ", res);
      localStorage.setItem("auth-token", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("token err: ", err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    });
};

export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = user => dispatch => {
  console.log("loggedinUser: ", user);
  dispatch({ type: LOGIN_FETCHING });
  return axios
  .post("https://the-world-problems-index.herokuapp.com/api/auth/login", user)
    .then(res => {
      console.log("token response: ", res);
      localStorage.setItem("auth-token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("token err: ", err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const PROBLEMS_FETCHING = "PROBLEMS_FETCHING";
export const PROBLEMS_SUCCESS = "PROBLEMS_SUCCESS";
export const PROBLEMS_FAILURE = 'PROBLEMS_FAILURE';

export const fetchProblems = () => dispatch => {
  dispatch({ type: PROBLEMS_FETCHING });
  return axios
    .get('https://the-world-problems-index.herokuapp.com/api/problems')
    .then((res) => {
      console.log('problems list res: ', res)
      dispatch({ type: PROBLEMS_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('token err: ', err)
      dispatch({ type: PROBLEMS_FAILURE, payload: err })
    })
};
