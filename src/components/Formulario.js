import React, { useContext } from 'react';
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {

    const { hola } = useContext(CategoriasContext);
    alert(hola);
    return (
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="" >-- Seleccion Categoría --</option>

                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="shadow btn btn-block btn-danger rounded"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    );
}

export default Formulario;