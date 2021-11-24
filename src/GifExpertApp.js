import React, { useState } from 'react'
import { AddCategorie } from './components/AddCategorie';
import { GifGrid } from './components/GifGrid';


//functional component
const GifExpertApp = () => {

    // const [categories, setCategories] = useState(["CSGO", "Aliens", "Game Of Thrones", "Crypto NFT"]);

    const [categories, setCategories] = useState(["Game Of Thrones"]);

    // const handleAdd = () => {
    //     setCategories( categories => [...categories, 'Breaking Bad'] );
    // }



    return (
       <>
        <h2>GifExpertApp</h2>
        <AddCategorie setCategories={ setCategories } />
        <hr/>

        {/* <button onClick={ handleAdd }> Agregar </button> */}
        
        <ol>
            {
                categories.map( category => {
                    // return <li key={category}> {category} </li>
                    return <GifGrid
                    key={category} 
                    category={ category }
                    />
                } )
            }
        </ol>
       </>
    );
}


export default GifExpertApp;