import React from 'react'

const ProblemSolution = (props) => {

  return (
    <div className='problem-solution'>
      <button>{props.solution.name}</button>
      <p></p>
      <p>votes</p>
    </div>
  )
}

export default ProblemSolution
