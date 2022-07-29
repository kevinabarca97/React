import React, {useEffect, useEffectLayout} from 'react'

export const Ejemplo = () => {
    /* useEffectLayout(()=>{
        console.log("useEffectLayout");
    }, []); */
    useEffect(()=>{
        console.log("useEffect");
    });
  return (
    <div>
        <h1>Ejemplo useEffectLayout vs useEffect (Error en lanzar useEffect Layout)</h1>
    </div>
  )
}
