import { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")

  const handlerFormulario = (e) => {
      e.preventDefault();

      const nuevoCliente = {nombre, apellido, email}
      console.log(nuevoCliente)

      setApellido("")
      setEmail("")
      setNombre("")
  };

  return (
    <form onSubmit={handlerFormulario}>
        <label htmlFor="">nombre</label>
        <input type="text" onChange={(e)=> setNombre(e.target.value)} value={nombre} />

        <label htmlFor="">apellifo</label>
        <input type="text" onChange={(e)=> setApellido(e.target.value)} value={apellido}/>

        <label htmlFor="">email</label>
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email}/> 

        <button type="submit"> enviar </button>
    </form>
  )
}

export default Formulario