import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProblems } from '../actions'

const HomeDisplay = (props) => {

  useEffect(() => {
    props.fetchProblems()
  }, [])

  return (
    <div className='home-container'>
      <div className='home-content'>
        <h2 className='home-headline'>
          Investigate problems of the world, consider their solutions, and
          explore related problems and solutions
        </h2>
        {props.problemsList.map((item) => {
          return (
            <Link to={`problems/${item.title}`} key={item.id}>
              <button className='problem-bubble'>{item.title}</button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fetchingProblems: state.problemsReducer.fetchingProblems,
    problemsList: state.problemsReducer.problemsList
  }
}
export default connect(
  mapStateToProps,
  { fetchProblems }
)(HomeDisplay)
