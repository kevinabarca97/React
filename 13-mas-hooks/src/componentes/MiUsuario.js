import React, { useEffect, useState } from 'react'
import { useAjax } from '../hooks/useAjax';
export const MiUsuario = ()=> {
    const {datos, cargando, getData} = useAjax(1);

    

    const getId = (e) => {
        let id = parseInt(e.target.value);

        getData(id);
      

    }

    

    return (
    <div>
        <h1>Datos Usuario</h1>
        <input type="number" name='id' onChange={getId}/>
        <p>{cargando ? 'cargando...': ''}</p>
        <code>{JSON.stringify(datos)}</code>


    </div>
  )
}
