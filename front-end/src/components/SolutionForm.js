import React from 'react'
import { connect } from 'react-redux'
import { postSolution } from '../actions'

class SolutionForm extends React.Component {
  constructor() {
    super()
    this.state = {
      problem_id: '',
      solution: '',
      user: ''
    }
  }

  handleChange = (e) => {
    this.setState({ ...this.state, solution: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    postSolution(this.state.solution)
    this.setState({
      problem_id: '',
      solution: '',
      user: ''
    })
  }

  render() {
    return (
      <>
        <div className='solution-form'>
          <h4>add a solution to this problem</h4>
          <form onSubmit={handleSubmit}>
            <input type='text' name='solution' value={this.state.solution} onChange={this.handleChange} />
            <button>submit</button>
          </form>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    submitting: state.problemsReducer.submitting,
    solution: state.problemsReducer.solution
  }
}
export default connect(
  mapStateToProps,
  {}
)(SolutionForm)
