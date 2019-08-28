import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSingleProblem } from '../actions'

import data from '../data'
import SolutionForm from './SolutionForm'

const ProblemDisplay = (props) => {
  console.log('props single', props)
  const id = props.match.params.id
  // const [problem, setProblem] = useState(props.problem)
  const [prob, setProb] = useState([])
  const [solutions, setSolutions] = useState([])
  console.log('sols', props.problem.problemSolutions)
  const solutionMockData = data.slice(0, 4)

  useEffect(() => {
    const fetch = props.fetchSingleProblem(id).then((data) => {
      // if (!props.fetchingProblems) {
      setProb(data)
      // }
    })
    console.log('data', fetch)
  }, [prob])
  console.log('prob', prob)
  // console.log('soltions', solutions)
  console.log('arr', props.problem)

  return (
    <>
      <div className='problem-container'>
        <div className='problem-header'>
          <h1>{props.problem.title}</h1>
          <p>{props.problem.description}</p>
        </div>
        <div className='problem-content'>
          <div className='problem-solutions-container'>
            <h4>Solutions</h4>
            <div className='problem-solutions'>
              {/* {props.fetchingProblems ? (<p>Loading Solutions...</p>) : (solutions.map((sol) => (
                <div key={sol._id} className='problem-solutions-bubble'>
                  {sol.name}
                </div>
              )))
              } */}
            </div>
          </div>
          <div className='problem-related-container'>
            <h4>Problems with related solutions</h4>
            <div className='problem-related-solutions'>
              {solutionMockData.map((sol) => (
                <button key={sol} className='problem-bubble'>
                  {sol}
                </button>
              ))}
            </div>
          </div>
          <SolutionForm />
        </div>
      </div>
    </>
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
)(ProblemDisplay)
