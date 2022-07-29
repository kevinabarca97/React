import React, { useRef, useState, useEffect } from 'react'

export const Contador = () => {
    const [numeroSaludo, setNumeroSaludo] = useState(0);

    const saludosCola = useRef(numeroSaludo);

    useEffect(() =>{
        saludosCola.current = numeroSaludo;
        setTimeout(()=>{
            console.log("Saludos en Cola" + saludosCola.current);
        }, 2000);
    }, [numeroSaludo]);


    const enviarSaludo = e => {
        setNumeroSaludo(numeroSaludo + 1);
    }
  return (
    <div>
        <h1>Ejemplo uso useRef</h1>
        <h2>Saludos enviados: {numeroSaludo}</h2>
        <button onClick={enviarSaludo}>Enviar</button>
    </div>
  )
}
