import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log('submit');

        if (inputValue.trim().length>=2){
            //setCategories viene desde el componente padre. Se agrega el valor del input a las categorias mediante el operador ...
            setCategories( cat=>{
               return [inputValue, ...cat];
            });
            setInputValue('');
        }

    }
    
    return (
        <form onSubmit={handleSubmit}>
          <input 
                type="text"
                value={inputValue}  
                onChange={ handleInputChange }
           />  
        </form>
    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}