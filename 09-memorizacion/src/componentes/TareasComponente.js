import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ComponenteUseCallback } from './ComponenteUseCallback';
export const TareasComponente = () => {

  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(500);

  const guardarTareas = e => {
    e.preventDefault();

    setTareas(tarea => [...tarea, e.target.descripcion.value]);

    console.log(tareas);
  }

  const borrarTarea = (indice) =>{
    const tareasFiltradas = tareas.filter((filtroTarea, indiceFiltro) => indiceFiltro !== indice);

    setTareas(tareasFiltradas);
  }


  const sumarContador = ()=>{
    setContador(contador + 1);
  }

  const contadoresPasados = (acumulacion)=>{
    for(let i =0; i <=acumulacion; i++ ) {
      console.log("Ejecutando contador pasado");
    }

    return `contador manual de tareas: ${acumulacion}`;
  }

  const memoContadores = useMemo(() => contadoresPasados(contador), [contador]);

  const mostrarMensaje = useCallback(()=>{
    console.log("mostrar mensaje");
  }, [contador]);

  return (
    <div>
        <h1>Mis Tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type='text' name='descripcion' placeholder='describe tu tarea'/>
            <input type='submit' value='Guardar'/>
        </form>
        <ComponenteUseCallback mensaje={mostrarMensaje}/>
        <h3>{memoContadores}</h3>
        <h2>Contador Actual Tareas: {contador}</h2>
        <h4><button onClick={sumarContador}>Sumar</button></h4>
        <h2>Lista de Tareas: </h2>
        {
          tareas.map((tarea, indice) => {
            return(
              <p key={indice}>{tarea} <button onClick={()=>borrarTarea(indice)}>x</button></p>
            )
          })
        }
    </div>
  )
}
