import React, { useState } from 'react';
import './App.css';
import bulbOff from './bulbOff.jpg'
import bulbOn from './bulbOn.jpg'

function App() {
  const [isOn, setIsOn] = useState(false);

  const turnOn = () => {
    setIsOn(true);
  };
  const turnOff = () => {
    setIsOn(false)
  }
  return (
    <div className="App">
      <h1>Bulb Task</h1>
      <img src={isOn ? bulbOn : bulbOff } />
      <div className='bulb'>
        <button onClick={turnOn}>Turn On</button>
        <button onClick={turnOff}>Turn Off</button>
      </div>
    </div>
  );
}

export default App;


