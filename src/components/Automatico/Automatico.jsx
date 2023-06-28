import { useState, useEffect } from "react"

const Automatico = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(false)

    useEffect(() =>{
        let tiempoEspera = null;

        const reiniciarTemporizador = () => {
            clearTimeout(tiempoEspera)
            tiempoEspera = setTimeout(() =>{
                setMostrarMensaje(true); 
            },5000)
        }

        const manejadorActividadUsuario = () => {
            reiniciarTemporizador(); 
        };

        window.addEventListener("mousemove", manejadorActividadUsuario)
        window.addEventListener("keydown", manejadorActividadUsuario)

        reiniciarTemporizador();
         return () => {
            window.removeEventListener("mousemove", manejadorActividadUsuario)
            window.removeEventListener("keydown", manejadorActividadUsuario)
            clearTimeout(tiempoEspera);
         }
    }, [])

    const seguirMirando = () => {
        setMostrarMensaje(false)
    };


  return (
    <div>
        {
            mostrarMensaje && (
                <div>
                    <p>¿Seguis ahi?</p>
                    <button onClick={seguirMirando}>Seguir mirando</button>
                </div>
            )
        }

        <h2>nefli</h2>
    </div>
  )
}

export default Automatico