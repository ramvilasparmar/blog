import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {

  const [status, setStatus] = React.useState(true)

  return (
    <div className="App">
      {
        status? <h1>Hello World !</h1> : null
      }
      {/* <button onClick={()=>setStatus(false)}>Hide</button>
      <button onClick={()=>setStatus(true)}>Show</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
    
  );
  
}

export default App;
