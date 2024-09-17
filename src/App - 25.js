import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import User from './User';


class App extends React.Component{

  constructor()
  {
    super();
    this.state={
      count:0
    }
  }
  componentDidUpdate(preProps, preState, snapshot)
  {
    if(preState.count === this.state.count)
    {
      alert("Data is already same")
    }
  }
  render()
  {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={()=>this.setState({count:1})}>componentDidUpdate</button>
      </div>
    );
  }
  
  
}

export default App;
