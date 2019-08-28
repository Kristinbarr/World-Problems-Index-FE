import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProblem } from '../actions'

const Dashboard = (props) => {
  // bring in state to check if logged in or not
  // needs conditional to show loading visual if not logged in

  return (
    <div>
      <h1>test</h1>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problem: state.problemsReducer.problem
  }
}
export default connect(
  mapStateToProps,
  { fetchSingleProblem }
)(Dashboard)
