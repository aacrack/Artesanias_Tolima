const nombre = document.querySelector(".nombre")
const apellido = document.querySelector(".apellido")
const edad = document.querySelector(".edad")
const BTN_r = document.querySelector(".BTN_r")
const cantidad = document.querySelector(".cantidad")
const producto = document.querySelector(".producto")
const descripcion = document.querySelector(".descripcion")
const inversion = document.querySelector(".inversion")
const Venta = document.querySelector(".Venta")
const img = document.querySelector(".img")
const boton = document.querySelector(".boton")
const cuerpo = document.querySelector("#cuerpo")

// function ejecutarsaludo(){

//     fetch("http://localhost:8000/saludar/",{
//         method:'POST',
//         body: JSON.stringify({
 
//             nombre: nombre.value,
//             Apellido: apellido.value,
//             edad:edad.value,


//         }),
//         headers: {"content-type": "application/json"}
//     })
   
// }
// boton.addEventListener("click", ejecutarSaludo())
//     function ejecutarsaludo(){
//     .then(res => res.json())
//     .then(mensaje => {

    
//         console.log(mensaje)    
//     }    )
// }

// ejecutarsaludo()




// function enviardatos(){
//     fetch("http://localhost:8000/api/Register_productos/",{
        
//         method: 'POST',
//         body: JSON.stringify({

//             cantidad: 1,
//             producto: "Manillas",
//             descripcion: "Bueno",
//             precio_inversion: 1000,
//             precio_venta: 1200
//         }),
//         headers: {"content-type": "application/json"}

// })
// }

// BTN_r.addEventListener("click", async() => {
//     fetch("http://127.0.0.1:8000/registro_p/", {
//         method: 'POST',
//         body: JSON.stringify({
//             cantidad: cantidad.value,
//             producto: producto.value,
//             descripcion: descripcion.value,
//             precio_inversion: inversion.value,
//             precio_venta: Venta.value,
//             img: img.value,
//         }),
//         headers: { "content-type": "application/json" }
//     })
//     const peticion = await fetch( "http://127.0.0.1:8000/api/Register_productos/")
//     const informacion = await peticion.json()
//     console.log(informacion)
// })


// enviardatos()
// async function enviardatos(){

    

//     const peticion = await fetch( "http://127.0.0.1:8000/api/Register_productos/")
//     const informacion = await peticion.json()
//     console.log(informacion)
    
// }
// enviardatos()

// boton.addEventListener("click", async(e) => {

//    const informacion = await fetch("http://127.0.0.1:8000/api/Register_productos/", {

//     method: 'DELETE',
//     headers: {"content-type": "application/json"}
// })
// })


// let IMG = ""


// const valorImg = (e) => {
//     IMG = e.target.files[0]
// }

// img.onchange = valorImg


const traerDatos = async() => {

    const peticion = await fetch("http://127.0.0.1:8000/api/Register_productos/")
    const respuesta = await peticion.json()
    return respuesta
}
const crearHTML = async () => {
    const nombre = await traerDatos()
    for( let i of nombre){
        cuerpo.innerHTML += `
      
        <table >
        <td style=" text-align: center; border: #333 solid 2px;">${i.cantidad}</td>
        <td style=" text-align: center; border: #333 solid 2px;">${i.producto}</td>
        <td style=" text-align: center; border: #333 solid 2px;">${i.descripcion}</td>
        <td style=" text-align: center; border: #333 solid 2px;">${i.precio_inversion}</td>
        <td style=" text-align: center; border: #333 solid 2px;">${i.precio_venta}</td>

        <td style=" text-align: center; border: #333 solid 2px;"> <img class=img" src="${i.foto}" width="100px" height="100px"></td>
        <button class="cajita-btn-delete" id_pais="${i.id}"> X </button>
        </table>
        
                      



        `
    }
    Delete()
}

function Delete() {
    const BTN_E = document.querySelectorAll(".cajita-btn-delete")

    BTN_E.forEach(BTN => {
        BTN.addEventListener("click", async (e) => {
            const id = e.target.attributes[1].value
            const peticion = await fetch(`http://127.0.0.1:8000/api/Register_productos/${id}/`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
        })
    })
}
traerDatos()
crearHTML()


