import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(
      ({ page}) => {
  const [empleadoss, setEmpleados] = useState([]);
  const conseguirEmpleados = async(p) => {
    const url  = "https://reqres.in/api/users?page=";
    const peticion = await fetch(url + p);

    const { data: empleados } = await peticion.json();
    setEmpleados(empleados);
    console.log("Se ejecuto la funcion conseguir data");
  }

  useEffect(()=>{
    conseguirEmpleados(page);

    console.log("se renderizo empleados");
  }, [page])
  return (
    <div>
      <p>mostrando la pagina: {page}</p>
      <ul className='empleados'>
        {
          empleadoss.map((empleado) => {
            return (
              <li key={empleado.id}>
                {empleado.email}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
})
