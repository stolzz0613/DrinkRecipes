import React, { useState, createContext } from 'react';

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

    const [hola, sethola] = useState("desde el state");
   
    return (
        <CategoriasContext.Provider
            value={{
                hola
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;
