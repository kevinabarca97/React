import React from 'react'
import { useMayus } from '../hooks/useMayus'
export const PruebasCustoms = () => {
    
    const { estado, mayusculas, minusculas, concatenar } = useMayus('jkhsahjksa');
  return (
    <div>
        <h1>Probando hooks personalizados</h1>
        <p>{estado}</p>

        <button onClick={e =>{
            mayusculas()
        }}>Poner en Mayusculas</button>
        <p>{mayusculas}</p>
        <p>{minusculas}</p>
        <p>{concatenar('asdasd')}</p>
    </div>
  )
}
