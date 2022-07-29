import React, { useRef } from 'react'

export const Formulario = () => {

    const nombreValue = useRef();
    const apellidoValue = useRef();
    const emailValue = useRef();

    const miCaja = useRef();
    const mostrar = e => {
        e.preventDefault();


        // micaja
        let { current: caja } = miCaja;

        caja.classList.add('fondoVerde');
        caja.innerHTMLV = "Formulario Enviado!";
        console.log(miCaja);
    }
  return (
    <div>
        <h1>Formulario</h1>
        <div ref={miCaja}>
            <h2>Pruebas con UseRef</h2>
        </div>
        <form onSubmit={mostrar}>
            <input type='text' placeholder='Nombre' ref={nombreValue}/>
            <input type='text' placeholder='Apellidos' ref={apellidoValue}/>
            <input type='email' placeholder='Correo Electronico' ref={emailValue}/>

            <input type='submit' value='Enviar'/>
        </form>
    </div>
  )
}
