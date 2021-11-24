import React, { useState } from 'react'
import PropTypes  from 'prop-types';

export const AddCategorie = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue( (v) => e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length >= 1 ){
            setCategories( categories => [inputValue, ...categories] );
            setInputValue( (v) => "" )
        }
    
    }
    
    return (
        <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            value={ inputValue }
            onChange= { handleInputChange }
        />
        </form>
    )
}

AddCategorie.propTypes = {
    setCategories : PropTypes.func.isRequired,
}
