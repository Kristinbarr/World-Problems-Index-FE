
import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import '../src/scss/App.scss';

import Navigation from "./components/Navigation";
import HomeDisplay from "./components/HomeDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <HomeDisplay/>
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
