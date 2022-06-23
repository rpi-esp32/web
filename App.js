import parse from 'react';
import React, {Component} from 'react';
import {Test}  from './Test.jsx';

parse = require('react');


import ReactDOM from "react-dom"

const element = <h1>Hello from Create React App</h1>

ReactDOM.render(element, document.getElementById("root"))

class App extends Component {
  render() {
    return (
      <div className="App">
        <div> from App() </div>
        <div> from Test </div>
      </div>
    ) ; 
  }  
  
}

export default App;
