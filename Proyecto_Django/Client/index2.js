const imagen = document.querySelector("#imagen")
const BTN = document.querySelector("#BTN_r")
const cantidad = document.querySelector("#cantidad")
const producto = document.querySelector("#producto")
const descripcion = document.querySelector("#descripcion")
const inversion = document.querySelector("#inversion")
const Venta = document.querySelector("#Venta")
const cuerpo = document.querySelector("#cuerpo")



let IMG = ""


const valorImg = (e) => {
    IMG = e.target.files[0]
}

imagen.onchange = valorImg


BTN.addEventListener("click", () => {

    let informacion = new FormData()
    informacion.append("quantity", cantidad.value)
    informacion.append("product", producto.value)
    informacion.append("description", descripcion.value)
    informacion.append("price_inversion", inversion.value)
    informacion.append("price_venta", Venta.value)
    informacion.append("file", IMG)


    

    fetch("http://127.0.0.1:8000/api/Register_imagen/", {
        method: 'POST',
        body: informacion
    })
})

// BTN.addEventListener("click", async() => {
//     console.log("hola       ")
//     fetch("http://127.0.0.1:8000/api/Register_imagen/", {
//         method: 'POST',
//         body: JSON.stringify({
//             quantity: cantidad.value,
//             product: producto.value,
//             description: descripcion.value,
//             price_inversion: inversion.value,
//             price_venta: Venta.value,
//         }), 
//         headers: { "content-type": "application/json" }
//     })
// })


const traerDatos = async() => {

    const peticion = await fetch("http://127.0.0.1:8000/api/Register_imagen/")
    const respuesta = await peticion.json()
    return respuesta
}
const crearHTML = async () => {
    const nombre = await traerDatos()
    for( let i of nombre){
        cuerpo.innerHTML += `
      
        <table >
        <td class="tabla2"  style="  text-align: center; border: #333 solid 2px;">${i.quantity}</td>
        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;">${i.product}</td>
        <td  class="tabla2" style=" text-align: center; border: #333 solid 2px;">${i.description}</td>
        <td class="tabla2" style=" text-align: center; border: #333 solid 2px;">${i.price_inversion}</td>
        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;">${i.price_venta}</td>

        <td class="tabla2"  style=" text-align: center; border: #333 solid 2px;"> <img class=img" src="${i.file}" width="100px" height="100px"></td>
        <td  class="tabla2" style=" text-align: center; border: #333 solid 2px;"><button class="cajita-btn-delete" id_pais="${i.id}"> Eliminar </button></td>
        <td class="
        " class="tabla2"  style=" text-align: center; border: #333 solid 2px;"><button "> Editar </button></td>
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
            const peticion = await fetch(`http://127.0.0.1:8000/api/Register_imagen/${id}/`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
        })
    })
}
traerDatos()
crearHTML()