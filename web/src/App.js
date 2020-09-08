import React, { useEffect, useState } from 'react';
import { getDocs } from './services'
import './App.css';

function App() {
  useEffect(() => {
    getDocs().then(res => {

    })
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
