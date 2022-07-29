import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export const PaginaPersonas = () => {

  let { nombre } = useParams();

  if(!nombre) nombre = 'sin Identificar';

  const navegar = useNavigate();

  const redirigirPagina = (e) => {
    e.preventDefault();

    let nombre = e.target.nombre.value;

    navegar(`/personas/${nombre}`);
  }
  return (
    <>
        <div>PaginaPersonas con el parametro nombre: {nombre}</div>
    <form onSubmit={redirigirPagina}>
        <input
            name='nombre'
        />
        <input type="submit"/>
    </form>
    </>
)
}
