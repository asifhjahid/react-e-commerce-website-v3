import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './components/Registration/Registration';

export default function App() {
  return (
    <div className="App">
    <div className="outer">
      <div className="inner">
        <Registration />
      </div>
    </div>
  </div>
  )
}
