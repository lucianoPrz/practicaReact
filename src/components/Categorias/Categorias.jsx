import { useState, useEffect } from "react"

const Categorias = () => {
    const [categoria, setCategoria] = useState("")

    useEffect( () => {
      document.title = `Categoría: ${categoria}`;
    }, [categoria])

    // handleClick
    const handleClick = (categoria) => {
      setCategoria(categoria);
    };

  return (
    <div>
        <h2>Categoria de productos: </h2>
        <button onClick={()=> handleClick("Frutas")}>Frutas</button>
        <button onClick={()=> handleClick("Carnes")}>Carnes</button>
        <button onClick={()=> handleClick("Lácteos")}>Lácteos</button>
        <button onClick={()=> handleClick("Limpieza")}>Limpieza</button>
    </div>
  )
}

export default Categorias