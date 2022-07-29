import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos'
export const PaginaServicio = () => {

    
    const [proyecto, setProyecto ]  = useState({});
    const parametros = useParams();
    console.log(parametros.id);
    useEffect(()=> {
        const proyectos = trabajos.filter(trabajo => trabajo.id === parametros.id);
        setProyecto(proyectos[0]);
    }, []);
  return (
    <div className='page'>
        <div className='mask'>
            <img src={'/images/' + proyecto.imagen}/>
        </div>
        <h1 className='heading'>Proyecto: {proyecto.id}</h1>
        <p className='paragraph'>{proyecto.tecnologias}</p>
        <p className='paragraph'>{proyecto.descripcion}</p>
    </div>
  )
}
