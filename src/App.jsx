
// import Promesas from "./components/Promesas/Promesas"
// import Map from "./components/Map/Map"
// import LosSimpsons from "./components/LosSimpsons/LosSimpsons"
// import JSONPlace from "./components/JSONPlace/JSONPlace"
//import Netflix from "./components/Netflix/Netflix"
//import ContactForm from "./components/ContactForm/ContactForm"
import Articulos from "./components/Articulos/Articulos"
import CustomHooks from "./components/CustomHooks/CustomHooks"

// importamos el componente mensaje y la funcion
import Mensaje from "./components/Patrones/Mensaje" 
import { mensajeConTitulo, conAumento } from "./components/Patrones/hoc"
import Producto from "./components/Patrones/Producto"
import Login from "./components/Patrones/Login"


const App = () => {
  const NuevoComponente = mensajeConTitulo(Mensaje)
  const NuevoProducto = conAumento(Producto)

  return (
    <>
      <NuevoComponente/>
      <NuevoProducto nombre={"tomate"} precio={100}/>
      <Login/>

    {
      /* 
      

        <h1>Blog Gatitos</h1>

      <h2>Noticias</h2>
      <Articulos img={"https://placekitten.com/200/286"} titulo={"Alimentos nuevos"}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates odio dolorem in vel ea laudantium consequuntur autem culpa necessitatibus, non sint. Corrupti, molestias quasi? Ullam veniam amet natus illo.</p>
        <strong>tiempo de lectura 3 minutos</strong>
      </Articulos>

      <h2>Recetas Para gatitos</h2>

      <Articulos img={"https://placekitten.com/200/140"} titulo={"alimentos Balanceados"}>
        <ul>
          <li>Carnes</li>
          <li>Vegetales</li>
          <li>Lacteos</li>
        </ul>
      </Articulos>

      <hr />

      <CustomHooks/>

      */
    }
      

    </>
  )
}

export default App