import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions'

const Signup = (props) => {
  const [creds, setCreds] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('creds', creds)
    props.signup(creds)
    setCreds({ username: '', password: '' })
  }

  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <h1></h1>
        <label>username</label>
        <input
          type='text'
          name='username'
          placeholder='username'
          onChange={handleChange}
          value={creds.username}
        />
        <label>password</label>
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChange}
          value={creds.password}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}
export default connect(
  mapStateToProps,
  { signup }
)(Signup)
