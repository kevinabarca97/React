import { useState } from "react";

export const useForm = (objInit = {}) =>{
    const [formulario, setFormulario] = useState(objInit);


    const serializar = (formulario) =>{
        const formData = new FormData(formulario);

        let objeto = {};

        for (let [name, value] of formData) {
            objeto[name] = value;
        }

        return objeto;
    }
    const cambiado =({target})=>{
        const {name, value} = target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }
    const enviado = (e) => {
        e.preventDefault();
        console.log(e.target);


        /* let curso = {
            titulo: e.target.titulo.value,
            anio: e.target.anio.value,
            descripcion: e.target.descripcion.value,
            autor: e.target.autor.value,
            correo: e.target.correo.value

        } */
        /* serializar(e.target); */

        console.log(serializar(e.target));
        setFormulario(serializar(e.target));
    }
    
    
    
    return{
        estado: formulario,
        enviado,
        cambiado
    }
}