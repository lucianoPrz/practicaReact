import { useState } from "react"
import emailjs from "emailjs-com"

const ContactForm = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarMensaje = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje
        }

        emailjs.send(
            "service_s3i2y0n",
            "template_uj6bb0n",
            templateParams,
            "S9Px5qFaHoCg6Z2X_"
        )
        .then((respuesta) => {
            console.log(respuesta.text)
            alert("mensaje enviado correctamente")
        })
        .catch((error) =>{
            console.log(error);
            alert("error al enviar mensaje")
        })

        setNombre("")
        setEmail("")
        setMensaje("")
    };

  return (
    <form onSubmit={enviarMensaje}>
        <label htmlFor="">Nombre:</label>
        <input type="text" value={nombre} onChange={(e) =>setNombre(e.target.value)}/>

        <label htmlFor="">Email: </label>
        <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>

        <label htmlFor="">Mensaje: </label>
        <textarea value={mensaje} onChange={(e) =>setMensaje(e.target.value)}></textarea>    

        <button type="submit">Enviar Mensaje</button>
    </form>
  )
}

export default ContactForm