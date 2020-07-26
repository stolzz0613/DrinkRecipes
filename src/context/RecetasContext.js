import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, setRecetas] = useState([]);
    const [busquedaRecetas, setBusquedaRecetas] = useState({
        nombre: "",
        categoria: ""
    });

    return (
        <RecetasContext.Provider
            value={{
                setBusquedaRecetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;