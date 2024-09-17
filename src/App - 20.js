import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import User from './User';
import Members from './Members';

function App() {
  function getData()
  {
    alert("Hello from app")
  }
  return (
    <div className="App">
      <User data={getData}/>
      <Members data={getData}/>
    </div>
  );
  
}

export default App;
