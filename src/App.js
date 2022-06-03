import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

export default function App() {
  return (
    <div className="App">
    <div className="outer">
      <div className="inner">
        <Router>
          <Routes>
           <Route path="/" element={<Registration />} />
           <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>
        
      </div>
    </div>
  </div>
  )
}
