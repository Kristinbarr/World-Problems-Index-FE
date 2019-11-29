import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProblems } from '../actions';

const HomeDisplay = props => {
  // console.log('props HOME DISPLAY', props)
  // const [problemArr, setProblemArr] = useState([])
  useEffect(() => {
    props.fetchProblems();
  }, []);

  const problemList = props.problemsList.reduce((unique, curr) => {
    if (!unique.some(obj => obj.id === curr.id && obj.title === curr.title)) {
      unique.push(curr);
    }
    return unique;
  }, []);

  return (
    <div className='home-container'>
      <h1>World Problems Index</h1>
      <div className='home-content'>
        <div className='home-divider'></div>
        <h2 className='home-headline'>
          Investigate different problems of the world touching many lives.
          <br />
          Consider, contribute to and support their crowd sourced solutions.
          <br />
          Explore and compare related problems and solutions to
          discover impactful connections.
        </h2>
        <div className='home-problems'>
          <div className='home-problems-wrapper'>
            {problemList.map((item) => {
              return (
                <Link to={`problems/${item.id}`} key={item.id}>
                  <button className='problem-bubble'>{item.title}</button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problemsList: state.problemsReducer.problemsList,
  };
};
export default connect(
  mapStateToProps,
  { fetchProblems },
)(HomeDisplay);
