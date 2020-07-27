import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idReceta, setIdReceta] = useState(null);
    const [receta, setReceta] = useState({});

    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idReceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`

            const resultado =
                await Axios
                    .get(url)
                    .then(response => (
                        setReceta(response.data.drinks[0])
                    ))
                    .catch(
                        setReceta("No se encontro la receta")
                    )
        }
        obtenerReceta();
    }, [idReceta])

    return (
        <ModalContext.Provider
            value={{
                setIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;