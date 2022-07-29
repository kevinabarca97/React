//importar modulos react
import React, { Fragment } from "react";

//funcion componente
const MiComponente = () => {
    const nombre = "Kevin";
    let web = "www.google.com";

    let usuario = {
        nombre: 'Kevin',
        apellidos: 'Abarca Gracia',
        web: 'www.google.cl'
    }
    return (
        <div className="contenedor">
            <h1>Datos del Usuario</h1>
            <ul>
                <li>Nombre: {usuario.nombre} {usuario.apellidos}</li>
                <li>Web: {usuario.web}</li>
                <li>Objeto: {JSON.stringify(usuario)}</li>
            </ul>
        </div>

    );
}
export default MiComponente;