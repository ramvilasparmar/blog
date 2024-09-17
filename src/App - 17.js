import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState();
  const [interest, setInterest] = useState("");
  function getFormData(e)
  {
    console.warn(name, interest, tnc);
    
    e.preventDefault()
  }

  return (
    <div className="App">
      <h1>Handle Form In React</h1>
      <form onSubmit={getFormData}>
        <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>
        <br/><br/>
        <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>Accept terms and conditions</span>
        <br/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
  
}

export default App;
