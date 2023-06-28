import { useState } from "react";
import "./Eventos.css"



const Eventos = () => {
    const [input, setInput] = useState("")


    const manejadorClick = () => {
        console.log("click ");
    };

    const manejadoraInput = (e) => {
        setInput(e.target.value);
        console.log(input);
    };


  return (
    <div>
        <button onClick={manejadorClick}>Clack</button>

        <div className="caja"
        onMouseMove={()=>console.log("nuevo evento")}
        onMouseEnter={()=>console.log("entressr")}
        onMouseLeave={()=>console.log("chau")}
        >

        </div>

        <form >
            <h2>{input}</h2>
            <label htmlFor="campo">ingrese texto</label>
            <input type="text" id="campo"
                onChange={manejadoraInput}
                onKeyDown={() => console.log("presionaste ntecla")}
                onKeyUp={() => console.log("despresionaste ntecla")}

            />
        </form>
    </div>
  )
}

export default Eventos