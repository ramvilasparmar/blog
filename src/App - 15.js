import React, {useState} from 'react'
// import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null)
  const [print, setPrint] = useState(false)
  
  function getData(val)
  {
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
      {
        print?
        <h1>{data}</h1>
        : null
      }
      <input type='text' onChange={getData} />
      <button onClick={()=>setPrint(true)}>Print Data</button>
    </div>
    
  );
  
}

export default App;
