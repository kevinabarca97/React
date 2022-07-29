import { useState } from "react";

export const useMayus = (texto) => {

    const [texto1, setText] = useState(texto);
    const mayusculas = () =>{
        setText(texto.toUpperCase());
        return [];
        
    }

    const minusculas = () =>{
        setText(texto.toLowerCase());
        return [];
    }

    const concatenar = (added) =>{
        setText(texto + added);
        return [];
    }


    return {
        estado: texto1,
        mayusculas,
        minusculas,
        concatenar
    }

    
}