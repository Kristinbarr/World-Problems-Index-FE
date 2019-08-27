import React from 'react'
import { Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import HomeDisplay from './components/HomeDisplay'
import ProblemDisplay from './components/ProblemDisplay'

import '../src/scss/App.scss'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
        <Route path='/' render={(props) => <HomeDisplay {...props} />} />
        <Route path='/problem' render={(props) => <ProblemDisplay {...props} />} />
      </header>
    </div>
  )
}

export default App
