import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'
export const ListadoTrabajosComponente = ({ limite = 10 }) => {
    return (
        <section className='works'>
            {
                trabajos.slice(0, limite).map(trabajo => {
                    return (
                        <article key={trabajo.id} className='works-item'>
                            <div className='mask'>
                                <img src={'/images/' + trabajo.imagen} />
                            </div>
                            <span>{trabajo.categorias}</span>
                            <h2 id='tituloEspecial'><Link to={`/servicio/${trabajo.id}`}>{trabajo.nombre}</Link></h2>
                            <h3>{trabajo.tecnologias}</h3>
                        </article>
                    );
                })
        }
        </section>
    )
}
