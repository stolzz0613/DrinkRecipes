import React, { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContext } from "../context/ModalContext";




function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        overflow: 'scroll',
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
    },
}));


const Receta = ({ receta }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { informacion, setIdReceta, setInformacion } = useContext(ModalContext);

    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (informacion[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>
                        {informacion[`strIngredient${i}`] + "\t"}
                        {informacion[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes;
    }

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
                            if (receta.idDrink === "0") return;
                            setIdReceta(receta.idDrink)
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            setInformacion({});
                            setIdReceta(null);
                            handleClose();
                        }}

                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{informacion.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {informacion.strInstructions}
                            </p>
                            <img
                                className="img-fluid my-4"
                                src={informacion.strDrinkThumb}
                                alt={`imagen de ${informacion.strDrink}`}
                            />
                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                {mostrarIngredientes(informacion)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Receta;