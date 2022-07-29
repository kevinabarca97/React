import React, { useState } from 'react'

export const FormularioComponent = () => {
    const [usuario, setUsuario] = useState({});
    const conseguirDatosFormulario = (e) =>{
        e.preventDefault();
        let datos = e.target;

        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value
        };

        setUsuario(usuario);
    };

    const cambiarDatos = (e) => {

        let nombreInput = e.target.name;
        let usuarioModificar = usuario;

        //usuarioModificar[nombreInput] = e.target.value;

        setUsuario(estado_previo => {
            return {
                ...estado_previo, [nombreInput]: e.target.value
            }
        });
    };
  return (
    <div>
        <h1>Formularios con React</h1>

        <div>
            <h2>Informacion Personal</h2>
            <p>{usuario.nombre} {usuario.apellido} - {usuario.bio}</p>
            <p>{usuario.genero}</p>
        </div>
        <form onSubmit={ conseguirDatosFormulario}>
            <input 
                type="text" 
                placeholder='Nombre' 
                name='nombre'
                onChange={cambiarDatos}
            />
            <input type="text" placeholder='Apellido' name='apellido' onChange={cambiarDatos}/>
            <select name='genero' onChange={cambiarDatos}>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea placeholder='Biografia' name='bio' onChange={cambiarDatos}></textarea>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  );
}