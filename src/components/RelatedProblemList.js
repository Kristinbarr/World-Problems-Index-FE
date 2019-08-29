import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleProblem } from '../actions';

const RelatedProblemList = props => {
  return (
    <div>
      {props.relatedProblems &&
        props.relatedProblems.map(relatedProblem => {
          return (
            <Link to={`problems/${relatedProblem.id}`} key={relatedProblem.id}>
              <button>{relatedProblem.title}</button>
            </Link>
          );
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { fetchSingleProblem },
)(RelatedProblemList);
