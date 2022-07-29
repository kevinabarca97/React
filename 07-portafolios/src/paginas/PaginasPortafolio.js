import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'
export const PaginasPortafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <section className='works'>
      {
        trabajos.map(trabajo => {
          return (
            <article key={trabajo.id} className='works-item'>
              <div className='mask'>
                <img src={'/images/' + trabajo.imagen}/>
              </div>
              <span>{trabajo.categorias}</span>
              <h2><Link to={`/servicio/${trabajo.id}`}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          );
        })
      }
      </section>
    </div>
  )
}