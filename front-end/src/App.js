import React from 'react'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import HomeDisplay from './components/HomeDisplay'
import ProblemDisplay from './components/ProblemDisplay'

import '../src/scss/App.scss'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/' render={(props) => <HomeDisplay {...props} />} />
      <Route
        path='/problem'
        render={(props) => <ProblemDisplay {...props} />}
      />
    </div>
  )
}

export default App
