const cuerpo = document.getElementById("contenido")
const formulario = document.querySelector(".formulario")
const formularioEnvio = document.querySelector(".formulario-envio")

const nombre = document.querySelector(".nombre")
const email = document.querySelector(".email")
const edad = document.querySelector(".edad")

let id = ""

const traerDatos = async () => {

    const peticion = await fetch("https://restcountries.com/v3.1/region/europe")

    const respuesta = await peticion.json()

    return respuesta

}

const abrirPanel = () => {

    const botonesPut = document.querySelectorAll(".btn-put")

    botonesPut.forEach(item => {

        item.addEventListener("click", (e) => {

            id = e.target.attributes[1].value
            formulario.style.display = "block"

        })

    })

}

const ponerDatos = async () => {

    const datos = await traerDatos()

    for(let i of datos){

        cuerpo.innerHTML += `
        
            <p> ${i.name.common} </p>
            <button class="btn-put" data-id="${i.name.official}"> Actualizar </button>
        
        `

    }

    abrirPanel()


}

ponerDatos()
