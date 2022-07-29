import React, { useState } from 'react'

export const MiPrimerEstado = () => {
  const [nombre, setNombre] = useState("Victor Robles");

  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
  };
  return (
    <div>
      <strong className='nombre'>
        {nombre}
      </strong>
      <br />
      <button onClick={e => cambiarNombre(e, "Fran")}> cambiar nombre</button>
      <br />
      <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)} />
    </div>
  )
}