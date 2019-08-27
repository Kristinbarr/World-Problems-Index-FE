import axios from 'axios'

export const SIGNUP_FETCHING = 'SIGNUP_FETCHING'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signup = (user) => (dispatch) => {
  console.log('User: ', user)
  dispatch({ type: SIGNUP_FETCHING })
  return axios
    .post('https://the-world-problems-index.herokuapp.com/api/auth/register', user)
    .then((res) => {
      console.log('token response: ', res)
      localStorage.setItem('auth-token', res.data.token)
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      console.log('token err: ', err)
      dispatch({ type: SIGNUP_FAILURE, payload: err })
    })
}
