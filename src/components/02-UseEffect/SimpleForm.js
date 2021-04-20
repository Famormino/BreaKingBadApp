import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( ()=> {
        // console.log('Hola desde useEffect')
    }, [] );

    useEffect( ()=> {
        // console.log('Hola desde useEffect')
    }, [formState] );

    useEffect( ()=> {
        // console.log('Hola desde useEffect')
    }, [email] );

    const handleInputChange = ( e ) =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">

                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange= { handleInputChange }
                
                />

                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange= { handleInputChange }
                />

            { ( name === '123' ) && <Message />}    

            </div>
        </>
    )
}
