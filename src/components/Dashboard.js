import React from 'react'
import { connect } from 'react-redux'
import { deleteSolution } from '../actions'
import UserSavedProblemsList from './UserSavedProblemsList'
import UserProblemContributionsList from './UserProblemContributionsList'
import UserSolutionContributionsList from './UserSolutionContributionsList'
import UserProblemForm from './UserProblemForm'

// import data from '../data'

const Dashboard = (props) => {
  console.log('dash props', props)
  // const solutionMockData = data.slice(0, 4)
  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <div className='title'>
          <h1>{props.user.message}</h1>
        </div>
        <div className='logout'>
          <button>Log Out</button>
        </div>
      </div>
      <div className='dashboard-content'>
        <UserSavedProblemsList />
        <UserProblemContributionsList />
        <UserSolutionContributionsList />
      </div>
      <UserProblemForm />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    user: state.userReducer.user
  }
}
export default connect(
  mapStateToProps,
  { deleteSolution }
)(Dashboard)
