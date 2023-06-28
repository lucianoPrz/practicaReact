import { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")



  return (
    

    <form>
        <label htmlFor="">nombre</label>
        <input type="text" onChange={(e)=> setNombre(e.target.value)} />

        <label htmlFor="">apellifo</label>
        <input type="text" onChange={(e)=> setApellido(e.target.value)}/>

        <label htmlFor="">email</label>
        <input type="email" onChange={(e)=> setEmail(e.target.value)}/> 

        <button type="submit"> enviar </button>
    </form>
  )
}

export default Formulario