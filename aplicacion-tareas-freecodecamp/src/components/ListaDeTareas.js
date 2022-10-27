import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../stylesheets/ListaDeTareas.css";

function ListaDeTareas() {
  // Trim es un metodo que permite quitar los espacios del principio y final de una cadena de caracteres
  // Agregamos la tarea al principio, y luego con el operador spread concatenamos las que ya teniamos en el estado
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
    // console.log(tarea);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);

    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
