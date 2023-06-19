import { useState, useEffect } from "react"

const Netflix = () => {
const [peliculas, setPeliculas] = useState([])
const [busqueda, setBusqueda] = useState('')

const MI_KEY = "c9f04fa4"

useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
    .then(res => res.json())
    .then( data => {
        setPeliculas(data.Search)
    })
    .catch(error => console.log(error))
}, [busqueda])

const manejadorSubmit = (e) => {
    e.preventDefault();

    setBusqueda(e.target.busqueda.value);
    e.target.busqueda.value="";
};

  return (

    <div>
        <h1>Nefli</h1>
        <form onSubmit={manejadorSubmit}>
            <input type="text" name="busqueda"/>
            <button type="submit">Buscar</button>
        </form>

        <ul>
            {
                peliculas === undefined ? <h2>Busca en cuevana</h2> : peliculas.map( peli => ( <li key={peli.imdbID}> <img src={peli.Poster} /> {peli.title} </li> ))
            }
        </ul>
    </div>
  )
}

export default Netflix