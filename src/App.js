import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer.js'
import DogBreedImagesContainer from "./components/DogBreedImagesContainer.js";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Route exact path='/' component={DogsListContainer} />
        <Route path='/dog-breeds/:breed' component={DogBreedImagesContainer} />
      </main>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
