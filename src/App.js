import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Form from './components/Form';
import Listado from './components/Listado';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  const agregarNuevoGasto = gasto => {
    setGastos([...gastos, gasto]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          { mostrarPregunta ?
          (<Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostrarPregunta={setMostrarPregunta}
          />) : (
          <div className="row">
            <div className="one-half column">
              <Form
                agregarNuevoGasto={agregarNuevoGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos={gastos}
              />
            </div>
          </div>)}
        </div>
      </header>
    </div>
  );
}

export default App;
