import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import User from './User';


function App() {

  const [name, setName]=React.useState("Ram");
    return (
      <div className="App">
        <h1>Hello World</h1>
        <User name={name}/>
        <button onClick={()=>setName("Siya")}>Update Name</button>
      </div>
    );
  
  
  
}

export default App;
