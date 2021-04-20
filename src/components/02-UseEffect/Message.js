import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [state, setstate] = useState({
        x:0,
        y:0
    });

    const {x, y} = state;

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {
                x : e.x,
                y : e.y
            };
            setstate(coords)
        };

         window.addEventListener('mousemove', mouseMove);
         

        return () => {
            window.removeEventListener('mousemove', mouseMove);    
        }
    }, [])

    return (
        <div>
            <h3>Sos lo más vieja!</h3>
            <p>X: {x} Y: {y}</p>
        </div>
    )
}
