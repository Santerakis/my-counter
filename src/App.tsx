import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(() =>
            {return Number(localStorage.getItem('counterValue')) || 0}

        // {let valueAsString = localStorage.getItem('counterValue')
        //     if (valueAsString) {
        //         let newValue = JSON.parse(valueAsString)
        //         return newValue
        //     } else return 0}

    )

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value)) //value.toString
    }, [value])

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

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
