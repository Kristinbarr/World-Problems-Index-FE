import React from 'react'
import data from '../data'

const HomeDisplay = () => {
  //Axios junk here
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h3 className='home-headline'>
          Investigate problems of the world, consider their solutions, and
          explore related problems and solutions
        </h3>
        {data.map((item) => {
          return <div className='problem-bubble'>{item}</div>
        })}
      </div>
    </div>
  )
}

export default HomeDisplay
