import React from 'react'
import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom'

//importar paginas

import { PaginaInicio } from '../componentes/PaginaInicio'
import { PaginaContacto } from '../componentes/PaginaContacto'
import { PaginaArticulos } from '../componentes/PaginaArticulos' 
import { PaginaPersonas } from "../componentes/PaginaPersonas";
import { PaginaError } from '../componentes/PaginaError' 
import { PaginaPanelControl } from '../componentes/PaginaPanelControl' 

// SUB RUTAS

import { RutaAcerca } from '../componentes/subRutasPanelControl/RutaAcerca'
import { RutaInicio } from '../componentes/subRutasPanelControl/RutaInicio'
import { RutaCrear } from '../componentes/subRutasPanelControl/RutaCrear'

export const RutaPrincipal = () => {
  return (
    <BrowserRouter>
        <nav>
          <li>
            <NavLink 
              to='/'
              className={({ isActive }) => isActive ? 'activado' : ''}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/contacto'
              className={({ isActive }) => isActive ? 'activado' : ''}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/articulos'
              className={({ isActive }) => isActive ? 'activado' : ''}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/personas'
              className={({ isActive }) => isActive ? 'activado' : ''}
            >
              Personas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/panel'
              className={({ isActive }) => isActive ? 'activado' : ''}
            >
              PanelControl
            </NavLink>
          </li>
        </nav>
        <Routes>
            <Route path='/' element={<PaginaInicio/>}/>
            <Route path='/articulos' element={<PaginaArticulos/>}/>
            <Route path='/contacto' element={<PaginaContacto/>}/>
            <Route path='/personas/:nombre' element={<PaginaPersonas/>}/>
            {/** parametro opcional */}
            <Route path='/personas' element={<PaginaPersonas/>}/>
            {/** navegar */}
            <Route path='/redirigir' element={<Navigate/>}/>
            {/** subrutas */}
            <Route path='/panel/*' element={<PaginaPanelControl/>}>
              <Route path='inicio' element={<RutaInicio/>}/>
              <Route path='crear' element={<RutaCrear/>}/>
              <Route path='acerca' element={<RutaAcerca/>}/>
            </Route>
            <Route path="*" element={<PaginaError/>}/>
        </Routes>
    </BrowserRouter>
  )
}
