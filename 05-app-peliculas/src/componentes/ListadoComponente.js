import React, { useEffect, useState } from 'react';
import { EditarComponente } from './EditarComponente';
export const ListadoComponente = ({ listado, setListado }) => {

    const [editar, setEditar] = useState(0);

    const conseguirPeliculas = () => {
        const peliculas = JSON.parse(localStorage.getItem('pelis'));
        setListado(peliculas);
        return peliculas;
    }


    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const borrarPelicula = (id) => {
        
        const peliculasAlmacenadas = conseguirPeliculas();
        const nuevoArrayPeliculas = peliculasAlmacenadas.filter(pelicula => pelicula.id !== parseInt(id));
        setListado(nuevoArrayPeliculas);
        localStorage.setItem('pelis', JSON.stringify(nuevoArrayPeliculas));
    }


    return (
        <>
            {
                listado != null ?
                    listado.map((elemento) => {
                        return (
                            <article className="peli-item" key={elemento.id}>
                                <h3 className="title">{elemento.titulo}</h3>
                                <p className="description">{elemento.descripcion}</p>

                                <button className="edit" onClick={() => setEditar(elemento.id)}>Editar</button>
                                <button className="delete" onClick={() => { borrarPelicula(elemento.id); }}>Borrar</button>


                                {/* aparece formulario editar */}

                                {editar === elemento.id && (
                                    <EditarComponente pelicula={elemento} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListado={setListado} />
                                )}
                            </article>
                        )
                    })
                    : <h2>No Hay Peliculas</h2>
            }
        </>
    )
}
