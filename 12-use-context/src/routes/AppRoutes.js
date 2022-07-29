import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import { PruebaContext } from '../context/PruebaContext'
import { Acerca } from '../pages/Acerca'
import { Articulos } from '../pages/Articulos'
import { Contacto } from '../pages/Contacto'
import { Inicio } from '../pages/Inicio'
import { Login } from '../pages/Login'
export const AppRoutes = () => {

  const {usuario, setUsuario} = useContext(PruebaContext);

  const cerrarSesion = (evento) => {
    console.log("cerrando sesion");
    setUsuario({});

  }
  return (
    <BrowserRouter>

    {/** menu navegacion */}
    <nav>
      <div>
        <p>useContext</p>
      </div>
      <ul>
        <li>
          <NavLink to='/inicio'>inicio</NavLink>
        </li>
        <li>
        <NavLink to='/acerca'>acerca</NavLink>
        </li>
        <li>
        <NavLink to='/articulos'>articulos</NavLink>
        </li>
        <li>
          <NavLink to='/contacto'>contacto</NavLink>
        </li>
            {
          usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
            <>
            <li> <NavLink className='login' to='/'>{usuario.nick}</NavLink> </li>
            <li> <NavLink className='login' to='/' onClick={cerrarSesion}>Cerrar Sesion</NavLink> </li>
            </>
            
          ) : (<li> <NavLink to='/login'>Identificate</NavLink> </li>)
          }     
          
       
      </ul>
    </nav>

    {/** configuracion rutas */}
    <main>
    <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/acerca' element={<Acerca/>}/>
        <Route path='/articulos' element={<Articulos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={(
            <div>
                <h1>This page not Found (404)</h1>
            </div>
        )}/>
    </Routes>
    </main>
    
    </BrowserRouter>
  )
}
