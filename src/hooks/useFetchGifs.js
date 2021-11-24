import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () =>{
       
        getGifs( category ).then( imgs => {

            setstate({
                data: imgs,
                loading: false
            });
       
        })

    }, [category]); // [] significa que solo se ejecutara una sola vez


    return state; // { data:[], loasing: true }

}