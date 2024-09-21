import React from 'react'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Pages/Users";
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import SignUp from './Pages/SignUp';

function App(){
  return (
    <div className="App">
      <Router basename="/">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/signup" element={<SignUp />} />
          </Routes>
      </Router>
    </div>
  );
  
  
  
}

export default App;
