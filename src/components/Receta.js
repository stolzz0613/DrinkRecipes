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
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>
                    <Modal
                        open={open}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>Desde Modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Receta;