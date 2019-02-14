import React, { Component } from 'react';
import './App.css';


//components
import LibraryContainer from './Containers/LibraryContainer'

//

class App extends Component {
  render() {
    return (
      <div className="App">
        <LibraryContainer/>
      </div>
    );
  }
}



export default App;
