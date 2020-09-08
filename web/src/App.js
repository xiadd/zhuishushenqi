import React from 'react';
import './App.css';

function App() {
  useEffect(() => {
    getDocs().then(res => {

    })
  }, [])
  return (
    <div className="App">
      <h1>zhuishushenqi</h1>
      <p>修整中</p>
    </div>
  );
}

export default App;
