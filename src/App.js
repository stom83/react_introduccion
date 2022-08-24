import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [checkAbierto, setCheckAbierto] = useState(false);
  const cambio = () => {
  setCheckAbierto(!checkAbierto);
  return checkAbierto;
  };
  const [door1, useDoor1] = useState(checkAbierto);
  const abiertoCerrado = (e) => {
    e.PreventDefault();
    console.log('abierto / cerrado');
    
  };
  
  // function cerrar(){
  //   const puerta1 = false;
  //   let puertacerrada = true;
  //   if (puerta1){
  //     return puertacerrada;
  //   }
  // };
  
  return (
    <div className="App">
    <h2>Control de puerta 1: {door1  ? "abierto" : "cerrado"}</h2>
    <h2>Control de puerta 2: Abierto</h2>
    <div className="topping">
        <input
          type="checkbox"
          name="abiertoCerrado"
          value="abiertoCerrado"
          checked={checkAbierto}
          onChange={cambio}
        />
        Abierto
    </div>
    <button type="button" onClick={abiertoCerrado}>Control de puerta</button>
    </div>
  );
}

export default App;
