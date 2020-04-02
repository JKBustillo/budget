import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Error from './Error';

const Form = ({ setGasto, setCrearGasto }) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        // Validación
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };

        setGasto(gasto);
        setCrearGasto(true);

        // Resetear form
        setNombre('');
        setCantidad('');
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gatos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatios o presupuesto incorrecto" /> : null }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej: Transporte"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Valor del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 300"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
};

Form.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired,
}
 
export default Form;