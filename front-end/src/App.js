
import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import '../src/scss/App.scss'

import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
