import React from 'react'

const Articulos = ({ img, titulo, children }) => {
    return (
        <div>
            <img src={img} alt={titulo} />
            <h2> {titulo} </h2>
            <button>Leer Articulo</button>
            {children}
        </div>
    )
}

export default Articulos