import { useEffect, useState } from "react"

const LosSimpsons = () => {
    const [personaje, setPersonaje] = useState([])

    useEffect(() =>{
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
        .then(respuesta => respuesta.json())
        .then(datos => setPersonaje(datos))
        .catch(err => console.error("D'oh!",err))
    },[])

  return (
    <div>
        <h2>Personaje de lo Sinso</h2>
        {
            personaje.map((per, index) => {
                return (
                    <div key={index}>
                        <p>Nombre: {per.nombre}</p>
                        <img src={per.image} alt={per.nombre} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default LosSimpsons