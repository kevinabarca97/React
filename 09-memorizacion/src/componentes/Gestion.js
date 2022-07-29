import React, {useEffect, useRef, useState} from 'react'
import { Empleados } from './Empleados'
export const Gestion = () => {
    const [ nombre, setNombre ] = useState("");
    const [ pagina, setPagina ] = useState(1);

    const asignarGestor = e => {
        setNombre(e.target.value);
    }

    useEffect(()=>{
      console.log("se ejecuto gestion componente");
    },[nombre, pagina]);

  return (
    <div>
        <h1>Nombre del Gestor: {nombre}</h1>
        <input type='text' onChange={asignarGestor} placeholder='Introduce tu nombre de Gestor'/>

        <h2>Listado empleados</h2>
        <p>Los Usuarios son gestionados por: {nombre} y vienen de JsonPlaceHolder</p>
        <button onClick={() => setPagina(1)}> Pagina 1</button>
        <button onClick={() => setPagina(2)}> Pagina 2</button>
        <Empleados page={pagina}/>
    </div>
  )
}
