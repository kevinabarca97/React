import React from 'react'
import { GuardarStorage } from '../helpers/GuardarStorage';
export const CrearComponente = ({ setListado }) => {
    const titulo = "Añadir pelicula";

    const conseguirDatosFormulario = (e) => {
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        

        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        GuardarStorage(pelicula);
        setListado( elementos =>{
            return[...elementos, pelicula];
        });
    };

    

  return (
    <div className="add">
        <h3 className="title">{titulo}</h3>
        <form onSubmit={conseguirDatosFormulario}>
            <input type="text" 
                   id="title" 
                   placeholder="Titulo"
                   name='titulo' 
            />
            <textarea id="description" 
                      placeholder="Descripción"
                      name='descripcion'
            ></textarea>
            <input type="submit" 
                   id="save" 
                   value="Guardar" 
            />
        </form>
    </div>
  )
}
