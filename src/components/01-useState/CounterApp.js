import React, { useState } from 'react';
import './Counter.css'

export const CounterApp = () => {

    const [ state, setState] = useState({
        counter1 : 10,
        counter2 : 20
    });

    const { counter1, counter2 } = state;

    return (
        <>
         <h1>Counter1 { counter1 }</h1>
         <h1>Counter2 { counter2 }</h1>

         <hr /> 

        <button 
        className = "btn btn-dark"
        onClick = { () => {
            setState({
                ...state,
                counter1 : counter1 + 1, 
            })
        }}
        >
            +1    
         </button>  
        </>
    )
}
