import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      data : "Ram"
    }
  }
  render()
  {
    return (
      <div className="App">
        <h1>Hello World {this.state.data}</h1>
      </div>
    );
  }
  
  
}

export default App;
