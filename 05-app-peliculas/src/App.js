import React, { useState } from "react";
import { BuscadorComponente } from "./componentes/BuscadorComponente";
import { CrearComponente } from "./componentes/CrearComponente";
import { ListadoComponente } from "./componentes/ListadoComponente";

function App() {

    const [listado, setListado] = useState([]);

    return (
        <div className="layout">
            {/*Cabecera*/}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>

                <h1>Mis Peliculas</h1>
            </header>

            {/*Barra de navegación*/}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/*Contenido principal*/}
            <section id="content" className="content">

                {/*aqui van las peliculas*/}
                <ListadoComponente listado={listado} setListado={setListado} />

            </section>

            {/*Barra lateral*/}
            <aside className="lateral">

                {/* aqui va el buscador y creacion de peliculas */}
                <BuscadorComponente listado={listado} setListado={setListado} />
                <CrearComponente setListado={setListado} />
            </aside>

            {/*Pie de página*/}
            <footer className="footer">
                &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
            </footer>
            
        </div>
    );
}

export default App;
