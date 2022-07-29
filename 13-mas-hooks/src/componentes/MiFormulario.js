import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {
    const {estado, enviado, cambiado} = useForm({});
  return (
    <div>
        <h1>formulario</h1>
        <p>guardar curso</p>
        <p>curso guardado: {JSON.stringify(estado)}</p>
        <form onSubmit={enviado}>
            <input type="text" name="titulo"  onChange={cambiado} placeholder='titulo:' />
            <input type="number" name="anio" onChange={cambiado} placeholder='año publicacio:' />
            <input type="text" name="descripcion" onChange={cambiado} placeholder='descripcion:' />
            <input type="text" name="autor" onChange={cambiado} placeholder='autor:' />
            <input type="email" name="correo" onChange={cambiado} placeholder='correo:' />
            <input type="submit" value='Enviar' />
        </form>


    </div>
  )
}
