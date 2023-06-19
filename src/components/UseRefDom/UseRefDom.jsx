import { useRef } from "react"

const UseRefDom = () => {
    const ref = useRef(null);

    const handleClick = () => {
        if (ref.current){
            ref.current.textContent = "este texto fue modificado con useRef"
        }
    };
  return (
    <div>
        <h2>UseRef Dom</h2>
        <p ref={ref}>Este Hook nos permite acceder a elementosa del dom y modificarlos</p>
        <h3>Modifico este texto</h3>
        <button onClick={ handleClick} >Hace click aca para modificar el DOM</button>
    </div>
  )
}

export default UseRefDom