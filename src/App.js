import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import BookContainer from './Containers/BookContainer'

//

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookContainer/>  
      </div>
    );
  }
}

export default App;
