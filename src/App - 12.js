import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor()
  {
    super();
    this.state={
      data:"Ram"
    }
  }
  apple()
  {
    this.setState({data:"State"})
  }
  render()
  {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>  
        <button onClick={()=>this.apple()}>Click Me</button>
      </div>
      
    );
  }
  
}

export default App;
