import React from 'react'
import PropTypes from 'prop-types';
export const TercerComponente = ({fichaPaciente}) => {
    console.log(fichaPaciente);
  return (
    <div className='contenedor'>
        <h1>Comunicación entre Componentes</h1>
        <ul className='fichaMedica'>
            <li>Nombre: {fichaPaciente.nombre}</li>
            <li>Apellidos: {fichaPaciente.apellido}</li>
            <li>Tipo de Sangre: {fichaPaciente.tipoSangre}</li>
            <li>Estado Salud: {fichaPaciente.estado }</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    fichaPaciente: PropTypes.object
}