import { useState, useEffect } from 'react'

const JSONPlace = () => {
    const [usuarios, setUsuarios] = useState([]);
    
    useEffect( () =>{
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res => res.json())
        // .then( data => setUsuarios(data))
        // .catch(err => console.log("Ayudame Loco", err))

        // Si quiero usar Async - Await
        // try y catch me permiten manejar un error
        try {
            const pedirUsuarios = async () => {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await respuesta.json();
                setUsuarios(data);
            };
             
            pedirUsuarios();
            
        } catch (error) {
            console.log(error);
        }


        

    }, [])

  return (
    <div>
        <h2>Usuarios: JSONPlaceHolder</h2>
        <ul>
            {
                usuarios.map(usuario => {
                    return <li key={usuario.id}> {usuario.name} - {usuario.email}</li>
                })
            }
        </ul>
    </div>
  )
}

export default JSONPlace