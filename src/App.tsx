import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value, setValue] = useState(0)

    const incHandler = () => {
        setValue(value + 1)
    }
  return (
    <div className="App">
      <h1>{value}</h1>
        <button onClick={incHandler}>inc</button>
    </div>
  );
}

export default App;
