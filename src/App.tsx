import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLSHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value)) //value.toString
        localStorage.setItem('counterValue+1', JSON.stringify(value + 1))
    }
    const getFromLSHandler = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    const clearLSHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeFromHandler = () => {
        localStorage.removeItem('counterValue+1')
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLSHandler}>setToLS</button>
            <button onClick={getFromLSHandler}>getFromLS</button>
            <button onClick={clearLSHandler}>clearLS</button>
            <button onClick={removeFromHandler}>removeFromLS</button>

        </div>
    );
}

export default App;
