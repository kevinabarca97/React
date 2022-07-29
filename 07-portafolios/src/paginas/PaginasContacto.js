import React from 'react'

export const PaginasContacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact'>
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Motivo de Contacto'></textarea>

        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}
