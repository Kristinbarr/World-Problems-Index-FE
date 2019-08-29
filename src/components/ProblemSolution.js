import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addVote, removeVote } from '../actions';

const ProblemSolution = props => {
  const voted = () => {
    const user = props.user.user.id.toString();
    const problem = props.problem._id.toString();
    // props.problem.problemSolutions.forEach(solution => solution._id === props.solution._id  && (solution.votes.filter(vote => )))
  };

  return (
    <div className='problem-solution'>
      <button onClick={voted}>{props.solution.name}</button>
      <p></p>
      <p>votes</p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mapstate', state);
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problem: state.problemsReducer.problem,
    user: state.userReducer.user,
  };
};
export default connect(
  mapStateToProps,
  { addVote, removeVote },
)(ProblemSolution);
