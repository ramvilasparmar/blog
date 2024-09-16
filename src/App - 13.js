import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {

  const [name,setName] = useState("Ram")
  return (
    <div className="App">
      <h1>Props in React :) </h1>  
      <Student name={name} other={{address:'indore',mobile:'9874563210'}}/>  
      <button onClick={()=>{setName('Piter')}}>Update Name</button>
    </div>
    
  );
  
  
}

export default App;
