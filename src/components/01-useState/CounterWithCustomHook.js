import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './Counter.css'

export const CounterWithCustomHook = () => {

    const { state: counter , increment, decrement, reset } = useCounter( 100 )

    return (
        <>
            <h1>Counter with Custom Hook: { counter }</h1>
            <hr/>

            <button id="btn-izq" className= "btn btn-outline-primary btn-lg" onClick= {() => increment() }> + 1 </button>
            <button  id="btn-izq" className= "btn btn-outline-info btn-lg" onClick= { reset }> Reset </button>
            <button className= "btn btn-outline-danger btn-lg" onClick= { () => decrement() }> - 1 </button>
        </>
    )
}
