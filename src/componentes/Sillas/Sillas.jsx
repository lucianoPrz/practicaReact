import { useParams } from "react-router-dom"

//Hook que nos permite acceder a los parametros de las UrLS

const Sillas = () => {
  const {id} = useParams();

  return (
    <div>
      <h2>Seccion Sillas GAmer</h2>
      <p>ID Producto: {id}</p>
    </div>
  )
}

export default Sillas