import React from 'react'
import { Route } from 'react-router-dom'
import Login from './components/Login'
import '../src/scss/App.scss'

import Navigation from './components/Navigation'
import HomeDisplay from './components/HomeDisplay'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navigation />
        <HomeDisplay />
      </header>
    </div>
  )
}

export default App
