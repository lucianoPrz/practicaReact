import { useEffect } from "react"

const Escuchadores = () => {
    //Llamando al objeto windows y el metodo addEventListener
    window.addEventListener("resize", () => console.log("cambiaste tamaño de pantalla"))

    window.addEventListener("click", () => console.log("picaste"))

    //lo correcto es utilizar useEffect:

    useEffect(() => {
        function click() {
            console.log("click")
        }

        window.addEventListener("click", click);

        return () => {
            removeEventListener("click", click);
        }
    })

  return (
    <div>Escuchadores</div>
  )
}

export default Escuchadores