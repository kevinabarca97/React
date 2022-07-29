import React, {useContext} from 'react'
import { PruebaContext } from '../context/PruebaContext';
export const Contacto = () => {
  const datos = useContext(PruebaContext); 
  return (
    <div className='page'>
      <h1>Contacto</h1>
      <p>Pagina Contacto</p>
      <p>Valor Compartido: {JSON.stringify(datos)}</p>
    </div>
  )
}
