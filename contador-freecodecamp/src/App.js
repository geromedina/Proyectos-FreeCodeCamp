import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import logo from "./imagenes/freecodecamp-logo.png";
import { useState } from "react";

function App() {
  // Primero va el nombre del estado y luego la funcion
  // Esta es la convencion que normalmente se usa en ingles..
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log("Clic");
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    console.log("Reiniciar contador");
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} alt="freecodecamp-logo" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reinciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
