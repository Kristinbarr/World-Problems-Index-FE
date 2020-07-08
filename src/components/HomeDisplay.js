import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProblems } from "../actions";

const HomeDisplay = props => {
  // console.log("HOME DISPLAY props", props)
  // const [problemArr, setProblemArr] = useState([])

  const [problemsList, setProblemsList] = useState(props.problemsList)

  useEffect(() => {
    props.fetchProblems()
  }, [])

  const problemList = props.problemsList.reduce((unique, curr) => {
    if (!unique.some(obj => obj.id === curr.id && obj.title === curr.title)) {
      unique.push(curr)
    }
    return unique;
  }, [])

  return (
    <div className="home-container">
      <h1>World Problems Index</h1>
      <div className="home-content">
        <div className="home-divider"></div>
        <h2 className="home-headline">
          Investigate different problems of the world touching many lives.
          <br />
          Consider, contribute to and support their crowd sourced solutions.
          <br />
          Explore and compare related problems and solutions to discover
          impactful connections.
        </h2>
        <div className="home-problems">
          <div className="home-problems-wrapper">
            {problemList ? (
              problemList.map(item => (
                <Link to={`problems/${item.id}`} key={item.id}>
                  <button className="problem-bubble">{item.title}</button>
                </Link>
              ))
            ) : (
              <p>Loading Problems...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problemsList: state.problemsReducer.problemsList
  };
};
export default connect(mapStateToProps, { fetchProblems })(HomeDisplay);
