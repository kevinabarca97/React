import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Inicio = () => {

   const datos = useContext(PruebaContext); 
  return (
    <div className='page'>
      <h1>Inicio</h1>
      <p>Pagina Inicio</p>
      <p>Valor Compartido: {JSON.stringify(datos)}</p>
    </div>
  )
}
