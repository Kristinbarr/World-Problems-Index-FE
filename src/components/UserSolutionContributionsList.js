import React from 'react'
import { connect } from 'react-redux'
import { deleteSolution } from '../actions'
import data from '../data'

const UserSolutionContributionsList = (props) => {
  const solutionMockData = data.slice(0, 4)

  return (
    <div className='solution-contributions'>
      <h4>Solution Contributions</h4>
      <div className='solution-contributions-list'>
        {solutionMockData.map((sol) => (
          <div key={sol} className='bubble-div'>
            <div className='bubble-top-info'>
              <button className='problem-bubble'>{sol}</button>
              <div>
                <p>1,234 votes</p>
                <p onClick={props.deleteSolution} className='delete'>
                  delete
                </p>
              </div>
            </div>
            <div className='bubble-bottom-info'>
              Jack P on August 100th, 3021
            </div>
          </div>
        ))}
      </div>
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
  {deleteSolution}
)(UserSolutionContributionsList)
