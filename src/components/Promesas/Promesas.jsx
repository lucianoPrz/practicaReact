import React from 'react'

const Promesas = () => {

    console.log('Tarea 1')
    console.log('Tarea 2')

    setTimeout(() =>{
      console.log('A')
    },2000)

    setTimeout(() =>{
      console.log('b')
    },3000)

    //Promesas
    const tuspromesas = (estado) => {
      return new Promise((resolve, reject) => {
        if ( estado){
          resolve('Cumplida')
        } else {
          reject('Rechazada')
        }
      })
    };

    tuspromesas(false)
      .then(repuesta => {
        console.log(repuesta)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        console.log('Fin del proceso')
      })

    //then y catch
    //permiten concatenar una funcionmcuando la promesa se cumple o se rechaza.

    const array = ["homero", "lisa", "bart", "maggie", "marge"]

    const solicitarSinso = (estado) => {
      return new Promise((resolve, reject) => {
        if (estado) {
          resolve(array)
        } else {
          reject("no ay sinso");
        }
      })
    };

    solicitarSinso(false)
      .then(respuesta => {
        console.table(respuesta)
      })
      .catch(err => console.error("tenemos un error", err))

  return (
    <div>Promesas</div>
  )
}

export default Promesas