import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg';
export const HeaderComponente = () => {
  return (
    <header>
      <nav>
        <div className='logo'>
            <img src={logo} width="70"/>
        </div>
        <ul>
          <li>
            <NavLink 
                to='/inicio'
                className={({ isActive }) => isActive ? 'pagina-activado' : 'pagina-desactivado'}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
                to='/portafolio'
                className={({ isActive }) => isActive ? 'pagina-activado' : 'pagina-desactivado'}
            >
              Portafolio
            </NavLink>
          </li>
          <li>
            <NavLink 
                to='/servicios'
                className={({ isActive }) => isActive ? 'pagina-activado' : 'pagina-desactivado'}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink 
                to='/curriculum'
                className={({ isActive }) => isActive ? 'pagina-activado' : 'pagina-desactivado'}
            >
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink 
                to='/contacto'
                className={({ isActive }) => isActive ? 'pagina-activado' : 'pagina-desactivado'}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
