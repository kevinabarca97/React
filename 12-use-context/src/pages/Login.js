import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'
export const Login = () => {
  const { usuario, setUsuario } = useContext(PruebaContext)
  const guardarDatos = e => {
    e.preventDefault();

    let usuario = {
      nick: e.target.nick.value,
      nombre: e.target.name.value,
      web: e.target.web.value
    }


    setUsuario(usuario);


  }
  return (
    <div className='page'>
      <h1>Identificate</h1>
      <p>Pagina Login</p>
      <form onSubmit={guardarDatos}>
        <input type="text" name="nick" placeholder='nickname'/>
        <input type="text" name="nombre" placeholder='nombre'/>
        <input type="text" name="web" placeholder='web' />
        <input type="submit" value="Enviar" />
      </form>
      
    </div>
  )
}
