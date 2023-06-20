// Patrones de diseño

// Nos permiten reutilizar componentes

// 1) HIGH ORDER COMPONENTS

//  Es una funcion que toma como argumento un componente y devuelve nuevo componente con nueva funcionalidad

export const mensajeConTitulo = (Mensaje) => {
    return function() {
        return (
            <>
                <h2> Hola Mundo </h2>
                <Mensaje/>

            </>
        )
    }
};


export const conAumento = (Producto) => {
    return function({nombre, precio}) {
            let nuevoPrecio = precio + 500
            return <Producto nombre={nombre} precio={nuevoPrecio}/>
    }
};