import React, { useState, createContext, useEffect } from 'react';
import Axios from 'axios';

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

            const categorias = await Axios.get(url);
            setCategorias(categorias.data.drinks)
        }
        obtenerCategorias();
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;
