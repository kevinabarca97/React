import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListadoTrabajosComponente } from '../componentes/ListadoTrabajosComponente'
export const PaginasInicio = () => {
  return (
    <div className='inicio'>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aut iure quos? Incidunt tempora  <strong> iste adipisci sunt</strong>
      </h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur. <NavLink to='/contacto'> Contacta conmigo</NavLink>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis proyectos</p>

        <ListadoTrabajosComponente limite="3"/>
      </section>
    </div>
  )
}
