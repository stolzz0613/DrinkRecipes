import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
export const RecetasContext = createContext();


const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([]);
    const [busquedaRecetas, setBusquedaRecetas] = useState({
        nombre: "",
        categoria: ""
    });

    const [consultar, setConsultar] = useState(false);
    const { nombre, categoria } = busquedaRecetas;

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                let url = ``;
                if (nombre !== "" && categoria === "") {
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`;
                } else if (categoria !== "" && nombre === "") {
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`;
                } else if (categoria === "" && nombre === "") {
                    url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
                } else {
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}&i=${nombre}`;
                }

                const resultado =
                    await axios
                        .get(url)
                        .then(response => {
                            if (response.data === "") {
                                setRecetas([{
                                    "strDrink": "No se encontraron resultados",
                                    "strDrinkThumb": "https://www.123dreamit.com/static/new_dream/img/no-resultados_sm.png",
                                    "idDrink": "0000"
                                }])
                            } else {
                                setRecetas(response.data.drinks);
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
            }
            obtenerRecetas();
        }
    }, [busquedaRecetas]);

    return (
        <RecetasContext.Provider
            value={{
                recetas,
                setBusquedaRecetas,
                setConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;