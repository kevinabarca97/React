import React, { useState } from 'react'

export const BuscadorComponente = ({ listado, setListado }) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPelicula = (e) => {
    setBusqueda(e.target.value);
    console.log(busqueda);
    let peliculasEncontradas = listado.filter(pelicula => {
      return pelicula.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1 || peliculasEncontradas <= 0) {
      peliculasEncontradas = JSON.parse(localStorage.getItem('pelis'));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }



    setListado(peliculasEncontradas);
  }
  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      {
        noEncontrado === true ? (
          <span className='no-encontrado'> No se encontro ninguna coincidencia</span>
        ) : (<br />)
      }

      <form>
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete='off'
          value={busqueda}
          onChange={buscarPelicula}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  )
}
