import React from 'react'

export const EventosComponente = () => {
    const miFuncion = () => alert('Soy un Evento Click');
    const miFuncionConParametros = (e, nombre) => alert('Soy un Evento Click con parametros ' + nombre);
    const dobleClick = (e) => alert('Soy un Evento Doble Click ');

    const onMouseEnter = () => {
        alert('entraste a la caja')
    };
    const onMouseLeave = () => {
        alert('saliste de la caja')
    };
    const onFocus = (e) => {
        console.log("onFocus");
    };
    const onBlur = (e) => {
        console.log("onBlur");
    };
    return (
        <div className='contenedor'>
            <div>
                <button onClick={miFuncion}>Evento Click</button>
                <button onClick={e => miFuncionConParametros(e, "Kevin")}>Evento Click con Parametros</button>
                <button onDoubleClick={dobleClick}>Evento Doble Click</button>
            </div>
            
            <div id='caja' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                evento caja
            </div>

            <div>
                <input
                    type="text"
                    onFocus={e => onFocus(e)}
                    onBlur={e => onBlur(e)}
                    placeholder="Input OnFocus" />
            </div>
        </div>
    )
}
