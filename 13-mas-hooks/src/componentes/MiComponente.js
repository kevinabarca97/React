import React, { useId } from 'react'

export const MiComponente = () => {
  const id = useId();

  return (
    <div>
        <h1>Hook Id</h1>
        <input id={id} placeholder='nombre' name='nombre'/>
    </div>
  )
}
