const nombre = document.querySelector(".nombre")
const apellido = document.querySelector(".apellido")
const edad = document.querySelector(".edad")
const BTN_r = document.querySelector("#BTN_r")
const cantidad = document.querySelector("#cantidad")
const producto = document.querySelector("#producto")
const descripcion = document.querySelector("#descripcion")
const inversion = document.querySelector("#inversion")
const Venta = document.querySelector("#Venta")
const img = document.querySelector("#imagen")
const img2 = document.querySelector("#imagen2")
const img3 = document.querySelector("#imagen3")
const boton = document.querySelector(".boton")
const cuerpo = document.querySelector("#cuerpo")
const formulario = document.querySelector("#form")
const cantidad_nueva = document.querySelector("#nueva_cantidad")
const producto_nueva = document.querySelector("#nuevo_producto")
const descripcion_nueva = document.querySelector("#nueva_descripcion")
const inversion_nueva = document.querySelector("#nueva_inversion")
const Venta_nueva = document.querySelector("#Venta_nueva")
const imagen_nueva = document.querySelector("#imagen_nueva")
const imagen2_nueva = document.querySelector("#imagen2_nueva")
const imagen3_nueva = document.querySelector("#imagen3_nueva")
const BTN_U = document.querySelector("#BTN_U")
const formulario_nuevo = document.querySelector("#formulario")

let id = 0
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

let IMG = ""

const valorImg = (e) => {
    IMG = e.target.files[0]
}

img.onchange = valorImg

let IMG2 = ""

const valorImg1 = (e) => {
    IMG2 = e.target.files[0]
}

img2.onchange = valorImg1
let IMG3 = ""

const valorImg2 = (e) => {
    IMG3 = e.target.files[0]
}

img3.onchange = valorImg2
let IMG4 = ""

const valorImg3 = (e) => {
    IMG4 = e.target.files[0]
}

imagen_nueva.onchange = valorImg3

let IMG5 = ""

const valorImg4 = (e) => {
    IMG5 = e.target.files[0]
}

imagen2_nueva.onchange = valorImg4
let IMG6 = ""

const valorImg5 = (e) => {
    IMG6 = e.target.files[0]
}

imagen3_nueva.onchange = valorImg5


BTN_r.addEventListener("click", () => {

    let informacion = new FormData()
    informacion.append("cantidad", cantidad.value)
    informacion.append("producto", producto.value)
    informacion.append("descripcion", descripcion.value)
    informacion.append("precio_inversion", inversion.value)
    informacion.append("precio_venta", Venta.value)
    informacion.append("img", IMG)
    informacion.append("img1", IMG2)
    informacion.append("img2", IMG3)


    

    
    fetch("http://127.0.0.1:8000/api/Register_productos/", {
        method: 'POST',

        body: informacion
    })
})
BTN_U.addEventListener("click", (e) => {
    
    e.preventDefault() 

    let informacion = new FormData()
    informacion.append("cantidad", cantidad_nueva.value)
    informacion.append("producto", producto_nueva.value)
    informacion.append("descripcion", descripcion_nueva.value)
    informacion.append("precio_inversion", inversion_nueva.value)
    informacion.append("precio_venta", Venta_nueva.value)
    informacion.append("img",IMG4)
    informacion.append("img1",IMG5)
    informacion.append("img2",IMG6)
    fetch(`http://127.0.0.1:8000/api/Register_productos/${id}/`, {
        method: 'PUT',
        body: informacion
    })  
})



// BTN_r.addEventListener("click", async() => {
//     fetch("http://127.0.0.1:8000/api/Register_imagen/", {
//         method: 'POST',
//         body: JSON.stringify({
//             quantity: cantidad.value,
//             product: producto.value,
//             description: descripcion.value,
//             price_inversion: inversion.value,
//             price_venta: Venta.value,
//             file: imagen.value,
//         }),
//         headers: { "content-type": "application/json" }
//     })
// })

// BTN_r.addEventListener("click", () => {
//     fetch("http://127.0.0.1:8000/api/Register_productos/", {
        
//         method: 'POST',
//         body: JSON.stringify({  
//             cantidad: cantidad.value,
//             producto: producto.value,
//             descripcion: descripcion.value,
//             precio_inversion: inversion.value,
//             precio_venta: Venta.value,
//             foto: img.value,
//             img: img2.value,
//             img1: img3.value,        

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
        <td class="tabla2"  style="  text-align: center; border: #333 solid 2px;">${i.cantidad}</td>
        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;">${i.producto}</td>
        <td  class="tabla2" style=" text-align: center; border: #333 solid 2px;">${i.descripcion}</td>
        <td class="tabla2" style=" text-align: center; border: #333 solid 2px;">${i.precio_inversion}</td>
        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;">${i.precio_venta}</td>

        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;"> <img class=img" src="${i.img}" width="100px" height="100px"></td>
        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;"> <img class=img" src="${i.img1}" width="100px" height="100px"></td>
        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;"> <img class=img" src="${i.img2}" width="100px" height="100px"></td>
        <td  class="tabla2" style=" text-align: center; border: #333 solid 2px;"><button class="cajita-btn-delete" id_producto="${i.id}"> Eliminar </button></td>
        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;"><button class="cajita-btn-editar" id_producto="${i.id}"> Editar </button></td>
        </table>
        
        </table>
        
                      



        `
    }
    Delete()
    Abrirpanel()
}

function Delete() {
    const BTN_E = document.querySelectorAll(".cajita-btn-delete")

    BTN_E.forEach(BTN => {
        BTN.addEventListener("click", async (e) => {
            id = e.target.attributes[1].value
            const peticion = await fetch(`http://127.0.0.1:8000/api/Register_productos/${id}/`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
        })
    })
}
function Abrirpanel() {
    const BTN_A = document.querySelectorAll(".cajita-btn-editar")

    BTN_A.forEach(BTN => {
        BTN.addEventListener("click", async (e) => {
            id = e.target.attributes[1].value
            formulario_nuevo.style.display = "block"
        })
    })
}
traerDatos()
crearHTML()


function mostrarTabla() {
    var tabla = document.getElementById("tabla");
    if (tabla.style.display === "none") {
        tabla.style.display = "block";
    } else {
        tabla.style.display = "none";
    }
}

