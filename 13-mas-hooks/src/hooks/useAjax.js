import { useState, useEffect } from "react";

export const useAjax = (id) => {
    const [estado, setEstado] = useState({
        datos:null,
        cargando: true
    });

    const getData = async(id) =>{
        setEstado({
            ...estado,
            cargando: true
        });

        const pet = await fetch(`https://reqres.in/api/users/${id}`);
        const { data } = await pet.json();

        setEstado({
            datos: data,
            cargando: false
        });
        return data;
    }

    useEffect(()=>{
        getData(1);
        
    },[id]);

    return {
        datos: estado.datos,
        cargando: estado.cargando,
        getData
    }
}