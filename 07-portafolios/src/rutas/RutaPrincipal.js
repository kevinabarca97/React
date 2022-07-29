import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import { HeaderComponente } from '../componentes/HeaderComponente'
import { FooterComponente } from '../componentes/FooterComponente'
import { PaginasInicio } from '../paginas/PaginasInicio'
import { PaginasPortafolio } from '../paginas/PaginasPortafolio'
import { PaginasContacto } from '../paginas/PaginasContacto'
import { PaginasCurriculum } from '../paginas/PaginasCurriculum'
import { PaginasServicios } from '../paginas/PaginasServicios'
import { PaginaServicio } from '../paginas/PaginaServicio'
export const RutaPrincipal = () => {
  return (
    <BrowserRouter >
        {/** header y navegacion */}
        <HeaderComponente/>
        {/** conenido central */}

        <Routes>
            <Route path='/' element={<PaginasInicio/>}/>
            <Route path='/inicio' element={<PaginasInicio/>}/>
            <Route path='/portafolio' element={<PaginasPortafolio/>}/>
            <Route path='/contacto' element={<PaginasContacto/>}/>
            <Route path='/curriculum' element={<PaginasCurriculum/>}/>
            <Route path='/servicios' element={<PaginasServicios/>}/>
            <Route path='/servicio/:id' element={<PaginaServicio/>}/>
        </Routes>

        {/** footer principal */}
        <FooterComponente/>
    </BrowserRouter>
  )
}
