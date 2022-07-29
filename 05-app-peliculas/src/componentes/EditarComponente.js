import React from 'react'
export const EditarComponente = ({ pelicula, conseguirPeliculas, setEditar, setListado }) => {
    const titulo = "Formulario Editar";

    const guardarEdicion = (e, id) => {

        e.preventDefault();
        let target = e.target;

        const peliculasAlmacenadas = conseguirPeliculas(setListado);
        const indice = peliculasAlmacenadas.findIndex(peli => peli.id === id);

        let pelicula = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        peliculasAlmacenadas[indice] = pelicula;

        localStorage.setItem('pelis', JSON.stringify(peliculasAlmacenadas));

        setListado(peliculasAlmacenadas);
        setEditar(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo}</h3>
            <form onSubmit={(e) => guardarEdicion(e, pelicula.id)}>
                <input
                    type="text"
                    name="titulo"
                    className='tituloEditado'
                    defaultValue={pelicula.titulo}
                />

                <textarea
                    name="descripcion"
                    defaultValue={pelicula.descripcion}
                    className='descripcion_editada'
                    cols="30"
                    rows="10"
                ></textarea>

                <input 
                    type="submit" 
                    value="Actualizar" 
                    className='editar'
                />
            </form>
        </div>
    )
}
