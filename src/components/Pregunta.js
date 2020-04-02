import React, { Fragment, useState } from 'react';

const Pregunta = () => {
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Definir presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();
        
        // Validación
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        setError(false);

    };

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;