//

const Map = () => {
    const productos = [
        {id:1 ,nombre:'notebook', precio:1000},
        {id:2 ,nombre:'mouse', precio:1500},
        {id:3 ,nombre:'teclado', precio:2000},
        {id:4 ,nombre:'monitor', precio:2500},
    ]

  return (
    <div>
        <h2>Productos: </h2>
        <ul>
            {
              productos.map(producto => (
                <li key={producto.id}>
                  <p>Nombre: {producto.nombre}</p>
                  <p>${producto.precio}</p>
                </li>
              ))
            }
        </ul>
    </div>
  )
}

export default Map