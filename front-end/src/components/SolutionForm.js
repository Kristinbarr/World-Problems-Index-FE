import React from 'react'
import { connect } from 'react-redux'
import { submitSolution } from '../actions'

class SolutionForm extends React.Component {
  constructor() {
    super()
    this.state = {
      problem_id: '',
      solution: ''
    }
  }

  handleChange = (e) => {
    this.setState({ ...this.state, solution: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    submitSolution(this.state.solution)
    this.setState({
      problem_id: '',
      solution: ''
    })
  }

  render() {
    return (
      <>
        <div className='solution-form'>
          <h4>add a solution to this problem</h4>
          <form onSubmit={this.handleSubmit}>
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
    isSubmitting: state.problemsReducer.isSubmitting,
    solution: state.problemsReducer.solution
  }
}
export default connect(
  mapStateToProps,
  {submitSolution}
)(SolutionForm)
