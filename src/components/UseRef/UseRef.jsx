// Permite crear una referencia mutsble que puede actualizarse sin provocar una nueva renderizacion

import { useRef } from "react"

// Ejemplo. Cantidad de productos
const UseRef = () => {

  const productosMarolio = useRef(0)

  const agregarAlCarrito = () => {
    productosMarolio.current = productosMarolio.current + 1;
    console.log(productosMarolio.current);
  };

  // Este hook retorna un objeto con una propiedad llamada current

  return (
    <div>
      <p>Productos marolio en el carrito: { productosMarolio.current }</p>
      <button onClick={ agregarAlCarrito }>Agregar al carrito marolio</button>
    </div>
  )
}

export default UseRef