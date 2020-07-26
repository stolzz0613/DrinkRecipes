import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusqueda] = useState({
        ingrediente: "",
        categoria: ""
    });

    return (
        <RecetasContext.Provider>
            value={{
                setRecetas
            }}
            {props.children}

        </RecetasContext.Provider>
    );
}

export default RecetasProvider;