import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
export const PaginaPanelControl = () => {
  return (
    <div>
        <h1>PaginaPanelControl</h1>
        <nav>
          <li>
            <NavLink 
              to='inicio'
              className={({ isActive }) => isActive ? 'activado' : ''}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='acerca'
              className={({ isActive }) => isActive ? 'activado' : ''}
            >
              Acerca
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='crear'
              className={({ isActive }) => isActive ? 'activado' : ''}
            >
              Crear
            </NavLink>
          </li>
        </nav>

        <div>
            {/** aqui cargaran la subrutas */}
            <Outlet/>
        </div>
    </div>
  )
}
