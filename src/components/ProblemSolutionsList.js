import React from 'react'
import ProblemSolution from './ProblemSolution'

const ProblemSolutionsList = (props) => {
  if (props.solutions) {
    return (
      <div className='problem-solutions'>
        {props.solutions.map((solution) => (
        <ProblemSolution key={solution._id} solution={solution} />
      ))}
      </div>
    )
  } else return null
}

export default ProblemSolutionsList
