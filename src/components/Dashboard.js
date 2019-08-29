import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser, deleteSolution } from '../actions';
import UserSavedProblemsList from './UserSavedProblemsList';
import UserProblemContributionsList from './UserProblemContributionsList';
import UserSolutionContributionsList from './UserSolutionContributionsList';
import UserProblemForm from './UserProblemForm';

const Dashboard = props => {
  // const [userData, setUserData] = useState()
  console.log('dash props', props);
  // console.log('dash user', props.user.user)
  const userId = props.user.user.id;
  console.log('id', userId);

  useEffect(() => {
    props.fetchUser(userId);
    // .then((res)=> {
    //   console.log('dash fetch res', res)
    //   // setUserData(res)
    // })
  }, []);
  // console.log('props user', props.user);
  console.log('inside useeffect', props.userData);

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
        {props.user.userData === undefined ? null : (
          <>
            <UserSavedProblemsList userData={props.user.userData} />
            <UserProblemContributionsList />
            <UserSolutionContributionsList />
          </>
        )}
      </div>
      <UserProblemForm />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    userData: state.userDataReducer.userData,
    user: state.userReducer.user,
  };
};
export default connect(
  mapStateToProps,
  { fetchUser, deleteSolution },
)(Dashboard);
