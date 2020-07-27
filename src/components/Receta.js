import React, { useContext } from 'react';
import { ModalContext } from "../context/ModalContext";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const Receta = ({ receta }) => {

    const { setIdReceta } = useContext(ModalContext);

    return (
        <div className="col-md-4 mb-3">
            <div className="card  justify-content-center h-100">
                <h2 className="card-header">
                    {receta.strDrink}
                </h2>
                <img
                    className="card-img-top"
                    src={receta.strDrinkThumb}
                    alt={`imagen de ${receta.strDrink}`}
                />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdReceta(receta.idDrink)
                        }}
                    >
                        Ver Receta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Receta;