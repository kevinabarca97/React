import React, {useState} from 'react';
import PropTypes from 'prop-types';
export const Ejercicio1 = ({anoActual}) => {

    const [ year, setYear] = useState(parseInt(anoActual));
    const restarAno = () => {

        setYear(year-1);

    };

    const sumarAno = () => {
        setYear(year+1);
    };

    const cambiarAno = (e, fecha) => {
        setYear(parseInt(fecha));
    };
  return (
    <div>
        <h2>Ejercicio Numero 01</h2>

        <div className='caja'>
            <div className='item'>
                <button onClick={restarAno}>Ir año anterior</button>
            </div>
            <div className='item'>{year}</div>
            <div className='item'>
                <button onClick={sumarAno}>Ir año siguiente</button>
            </div>
        </div>
        <br/>
        <div>
            <input 
                type="number" 
                placeholder='Ingresar Año'
                onChange={ e => cambiarAno(e , e.target.value)}
            />
        </div>
    </div>
  )
}
Ejercicio1.propTypes = {
    anoActual: PropTypes.number.isRequired
}
