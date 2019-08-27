import React from 'react'
import data from '../data'

// get request to view problem and it's data
// new solution endpoint needs: problem name, userid, solution name

function ProblemDisplay() {
  const solutionMockData = data.slice(0, 4)
  return (
    <div className='problem-container'>
      <div className='problem-header'>
        <h1>climate change</h1>
        <p>
          The global temperatures are rising, and are estimated to increase from
          2.6 degrees Celsius to 4.8 degrees Celsius by 2100. This would cause
          more severe weather, crises with food and resources and the spread of
          diseases.
        </p>
      </div>
      <div className='problem-content'>
        <div className='problem-solutions-container'>
          <h4>Solutions</h4>
          <div className='problem-solutions'>
            {solutionMockData.map((sol) => (
              <div key={sol} className='problem-solutions-bubble'>
                {sol}
              </div>
            ))}
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
        <div className='solution-form'>
          <h4>add a solution to this problem</h4>
          <form>
            <input />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProblemDisplay
