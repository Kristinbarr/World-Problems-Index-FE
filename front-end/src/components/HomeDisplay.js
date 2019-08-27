import React from 'react'
import data from '../data'

const HomeDisplay = () => {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h2 className='home-headline'>
          Investigate problems of the world, consider their solutions, and
          explore related problems and solutions
        </h2>
        {data.map((item) => {
          return <button key={item} className='problem-bubble'>{item}</button>
        })}
      </div>
    </div>
  )
}

export default HomeDisplay
