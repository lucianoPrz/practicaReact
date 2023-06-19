import { useState, useRef, useEffect } from "react"


const Temporizador = () => {
const [segundos, setSegundos] = useState(0);
const intervalRef = useRef(null);

// useEffect

useEffect(() => {
    // Ibniciamos el temporizador cuando el componente este montado
    intervalRef.current = setInterval(() => {
        setSegundos(segundos => segundos + 1);
    },1000)

    // Detenmos cuando el componente se desmonta
    return () => clearInterval(intervalRef.current)
},[])

// detener tempoizador

const detenerTemporizador = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null;
};

  return (
    <div>
        <h2>Temporizador: {segundos}</h2>
        <button onClick={detenerTemporizador}>Detener</button>
    </div>
  )
}

export default Temporizador