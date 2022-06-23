import React, {Component} from 'react';
import {Test}  from './Test';

class App() extends Component {
  render() {
    return (
      <div className="App">
        <div> from App() </div>
        <div> from Test </div>
        <Test />
      </div>
    ) ; 
  }  
  
}

export default App;
