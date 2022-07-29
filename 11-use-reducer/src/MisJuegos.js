import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useReducer, useState } from 'react'
import { JuegoReducer } from './reducer/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('juegos')) || [];
}

export const MisJuegos = () => {
    const [juegos, setJuegos] = useReducer(JuegoReducer, [], init);
    const conseguirDatoaFormulario = (evento)=>{
        evento.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: evento.target.titulo.value,
            descripcion: evento.target.descripcion.value
        };



        const accion = {
            type: "crear",
            payload: juego
        };

        setJuegos(accion);



        console.log(juegos);

    }

    const borrarJuego = (id) => {
        const accion = {
            type: "borrar",
            payload: id
        };
        
        setJuegos(accion);
    }

    const editarJuego = (evento, id) => {

        let juegoa = {
            id,
            titulo: evento.target.value,
            descripcion: evento.target.value
        }
        const accion = {
            type: "editar",
            payload: juegoa
        }

        setJuegos(accion)
    }

    useEffect(()=>{
        localStorage.setItem('juegos', JSON.stringify(juegos));
    }, [juegos])
  return (
    <div>
        <h1>Estos son mis videojuegos: {juegos.length}</h1>

        <ul>
            {
                juegos.map((juego) =>{
                    return(
                        <li key={juego.id}>
                            {juego.titulo} - {juego.descripcion}
                            <p><button onClick={ e=> borrarJuego(juego.id)}> borrar</button>
                            <input type="text"  onBlur={e => editarJuego(e, juego.id)}
                            onKeyPress={e=> {
                                if(e.key == "Enter") {
                                    editarJuego(e, juego.id);
                                }
                            }}
                            /></p>
                        </li>
                    )
                })
            }
        </ul>

        <h3>agregar juego</h3>
        <form onSubmit={conseguirDatoaFormulario}>
            <input type="text" name="titulo"/>
            <textarea name="descripcion" cols="30" rows="10"></textarea>
            <input type="submit" value="Guardar" />
        </form>
    </div>
  )
}
