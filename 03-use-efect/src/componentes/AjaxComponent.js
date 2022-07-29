import React, { useState, useEffect } from 'react';





export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    // Generico
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                id: 7,
                email: "michael.lawson@reqres.in",
                first_name: "Michael",
                last_name: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                id: 8,
                email: "lindsay.ferguson@reqres.in",
                first_name: "Lindsay",
                last_name: "Ferguson",
                avatar: "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                id: 9,
                email: "tobias.funke@reqres.in",
                first_name: "Tobias",
                last_name: "Funke",
                avatar: "https://reqres.in/img/faces/9-image.jpg"
            },
            {
                id: 10,
                email: "byron.fields@reqres.in",
                first_name: "Byron",
                last_name: "Fields",
                avatar: "https://reqres.in/img/faces/10-image.jpg"
            },
            {
                id: 11,
                email: "george.edwards@reqres.in",
                first_name: "George",
                last_name: "Edwards",
                avatar: "https://reqres.in/img/faces/11-image.jpg"
            },
            {
                id: 12,
                email: "rachel.howell@reqres.in",
                first_name: "Rachel",
                last_name: "Howell",
                avatar: "https://reqres.in/img/faces/12-image.jpg"
            }
        ]);
    };

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=2")
        .then(respuesta => respuesta.json())
        .then((response)=> {
            console.log(response);
            setUsuarios(response.data);
        })
        .catch((e)=> console.log(e));
    };

    const getUsuariosAjaxAw = async()=> {
        const peticion = await fetch("https://reqres.in/api/users?page=2");
        const { data } = await peticion.json();
        setUsuarios(data);
        setTimeout(()=>{
            setCargando(false);
        }, 2000);
        
        
    };

    useEffect(()=>{
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAjaxAw();
    }, []);


    if(cargando){
        //cuando esta cargando
    return (
        <div>
            Cargando Datos...
        </div>
    );
    } else {
        //cuando todo va bien
  return (
    <div>
        <h1>Listado usuarios Ajax</h1>
        {usuarios.length > 0 ? (
            <ul>
                {
                    usuarios.map((usuario, indice)=>{
                        return <li key={indice}>{usuario.email}</li>
                    })
                }
            </ul>
        ) : (
            <p>No Hay Usuarios Disponibles</p>
        )}
    </div>
    
  );
    }
    

    
}
