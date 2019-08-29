import React from 'react'
import { connect } from 'react-redux'
import { submitProblem } from '../actions'

class UserProblemForm extends React.Component {
  constructor() {
    super()
    this.state = {
      id: '',
      title: '',
      description: ''
    }
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    submitProblem(this.state.problem)
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return (
      <div className='problem-form'>
        <h2>Add a world problem</h2>
        <form onSubmit={this.handleSubmit}>
          <h6>Problem</h6>
          <input
            type='text'
            name='title'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <h6>Description</h6>
          <textarea
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button>submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSubmitting: state.problemsReducer.isSubmitting,
  }
}
export default connect(
  mapStateToProps,
  { submitProblem }
)(UserProblemForm)
