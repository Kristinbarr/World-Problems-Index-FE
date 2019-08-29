import React from 'react';
import { connect } from 'react-redux';
import { addVote, removeVote } from '../actions';


const ProblemSolution = props => {
  const voted = () => {};
  
  return (
    <div className='problem-solution'>
      <button>{props.solution.name}</button>
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
  };
};
export default connect(
  mapStateToProps,
  { addVote, removeVote },
)(ProblemSolution);
