import { useState } from "react";
//useContador: creamos nuestro propi hook para contar productos

export const useContador = (valorInicial, valorMaximo) => {
    const [contador, setContador] = useState(valorInicial)

    const aumentarContador = () => {
        contador < valorMaximo ? setContador(contador + 1) : setContador(contador)
    };

    const disminuirContador = () => {
        contador > valorInicial ? setContador(contador - 1) : setContador(contador)
    };

    return {contador, disminuirContador, aumentarContador}
}
