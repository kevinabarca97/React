import React, { useEffect } from 'react'

export const AvisoComponente = () => {


    useEffect(()=>{
        console.log("has cargado el componente AvisoComponente");

        return (()=>{
            console.log("Componente Desmontado AvisoComponente");
        });
    }, []);

  return (
    <div>AvisoComponente</div>
  )
}
