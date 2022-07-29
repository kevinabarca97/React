import React, { useEffect, useState } from 'react';
import { AvisoComponente } from './AvisoComponente';

export const PruebasComponentes = () => {
    const [usuario, setUsuario] = useState("usuario");
    const [fecha, setFecha] = useState("01-01-1998");
    const [contador, setContador] = useState(0);
    const modUsuario = e => {
        setUsuario(e.target.value);
    };

    const cambiarFecha = e => {
        setFecha(Date.now());
        setContador(0);
    };
    /* se ejecuta solo una vez agregando , [] */
    useEffect(()=>{
        console.log("has cargado el componente");
    }, []);

    useEffect(()=>{

        
        console.log("se modifico el usuario y contador: " + contador);
        setContador(contador+1);
    }, [usuario]);
  return (
    <div>
        <h1>El efecto - Hook useEffect</h1>

        <strong>{usuario}</strong>
        <br/>
        <p>{fecha}</p>
        <form>
        <input
            type="text"
            onChange={ modUsuario}
            placeholder="cambiar el usuario"/>

        <input 
            type="button" 
            value="Cambiar Fecha" 
            onClick={cambiarFecha}/>
        </form>
        <div>
            {contador > 12 && <AvisoComponente/>}
        </div>
    </div>
  )
}
