const nombre = document.querySelector(".nombre")
const apellido = document-querySelector(".apellido")
const edad = document-querySelector(".edad")
const boton = document-querySelector(".boton")


function ejecutarsaludo(){

    fetch("http://localhost:8000/saludar/",{
        method:'POST',
        body: JSON.stringify({
 
            nombre: nombre.value,
            Apellido: apellido.value,
            edad:edad.value,


        }),
        headers: {"content-type": "application/json"}
    })
   
}
boton.addEventListener("click", ejecutarSaludo())
//     function ejecutarsaludo(){
//     .then(res => res.json())
//     .then(mensaje => {

    
//         console.log(mensaje)    
//     }    )
// }

ejecutarsaludo()




function enviardatos(){
    fetch("http://localhost:8000/api/Register_productos/",{
        
        method: 'POST',
        body: JSON.stringify({

            cantidad: 1,
            producto: "Manillas",
            descripcion: "Bueno",
            precio_inversion: 1000,
            precio_venta: 1200
        }),
        headers: {"content-type": "application/json"}

})
}