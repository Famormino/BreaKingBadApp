import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setstate] = useState({ 
        data: null, 
        loading: true, 
        error: null
     })

    useEffect( () => {
        setstate({loading: true, error: null, data: null,});

        fetch(url)
            .then( resp => resp.json())
            .then( data => {

                setstate({
                    loading: false,
                    error: null,
                    data
                })
            })

    }, [ url ]) 
   
    return state;
}
