import { useState } from "react"
import InicioSesion from "./InicioSesion"
import LoginButton from "./LoginButton"

/* RENDER PROPS */
// Tecnica de composicion de componentes que me permite enviar la intyerfaz a ser renderizada en un funcion aparte

const Login = () => {
    const [usuario, setUsuario] = useState(null)

    const manejadorLogin = () => {
        setUsuario("Homero");
    };

  return (
    <div>
        {
            usuario ? (<InicioSesion nombre={usuario} />) : ( <LoginButton loguear={manejadorLogin}/>)
        }
    </div>
  )
}

export default Login