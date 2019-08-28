import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {} from '../actions'
import data from '../data'

const Dashboard = (props) => {
  const solutionMockData = data.slice(0, 4);
  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <h1>Test</h1>
      </div>
      <div className='dashboard-content'>
        <div className='saved-problems'>
          <h4>Saved Problems</h4>
          <div className='saved-problems-list'>
            {solutionMockData.map((sol) => (
              <button key={sol} className='problem-bubble'>
                {sol}
              </button>
            ))}
          </div>
        </div>
        <div className='problem-contributions'>
          <h4>Problem Contributions</h4>
          <div className='problem-contributions-list'>
            {solutionMockData.map((sol) => (
              <button key={sol} className='problem-bubble'>
                {sol}
              </button>
            ))}
          </div>
        </div>
        <div className='solution-contributions'>
          <h4>Solution Contributions</h4>
          <div className='solution-contributions-list'>
            {solutionMockData.map((sol) => (
              <button key={sol} className='problem-bubble'>
                {sol}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
  }
}
export default connect(
  mapStateToProps,
  {}
)(Dashboard)
