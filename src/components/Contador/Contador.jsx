import { useState, useEffect } from "react"

const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial)
    const [color, setColor] = useState("black")
    
    useEffect(() =>{
        document.title = `Contador: ${contador}`
        
        if ( contador>5 ) {
            setColor("red")
        } else {
            setColor("black")
        }
    }, [contador])

    const aumentarContador = () => {
        contador < stock ? setContador(contador + 1) : setContador(contador)
    };

    const disminuirContador = () => {
        contador > inicial ? setContador(contador - 1) : setContador(contador)
    };
  return (
    <div>
        <h2>Contador</h2>
        <button onClick={ disminuirContador }>-</button>
        <strong> {contador} </strong>
        <button onClick={ aumentarContador}>+</button>

        <button style={{color: color}}>Agregar al carrito</button>
    </div>
  )
}

export default Contador