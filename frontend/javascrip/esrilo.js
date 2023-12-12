

const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

let valores = []
let totañlTodo = 0
for ( let i = 0 ; i < valores.length ; i ++) {
	totañlTodo += valore[1]
}

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		let valorX = parseFloat(infoProduct.price)
		valores.push(valorX)

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
			
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseFloat(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};

  
const img_1 = document.querySelector(".img_1");
const titulo_info = document.querySelector(".titulo_info");
const precio = document.querySelector(".precio");
const descripcion = document.querySelector(".descripcion");

const traerDatos = async () => {
    try {
        const peticion = await fetch("http://127.0.0.1:8000/api/Register_productos/");
        const respuesta = await peticion.json();
        return respuesta;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        throw error;
    }
};

const crearHTML = async () => {
    try {
        const nombre = await traerDatos();
        const item = document.getElementById("item"); // Asegúrate de tener un elemento con el ID "item" en tu HTML

        for (let i of nombre) {
            item.innerHTML += `
                <div class="item">
                    <section class="container">
                        <div class="slider">
                            <a href="">
                                <ul>
                                    <li><img src="${i.img}"></li>
                                    <li><img src="${i.img1}"></li>
                                    <li><img src="${i.img2}"></li>
                                </ul>
                            </a>
                        </div>
                    </section>
                    <div class="info-product">
                        <h2 class="valen">${i.producto}</h2>
                        <p class="price">${i.precio_venta}</p>
                        <button class="btn-add-cart">AÑADIR AL CARRITO</button>
                    </div>
            
                </div>
            `;
        }

        const Vista_Previa = document.querySelectorAll(".container");

        Vista_Previa.forEach(boton => {
            boton.addEventListener("click", async (e) => {
                const Porductos_ID = nombre[e.target.attributes[1].value];
                titulo_info.textContent = Porductos_ID.producto;
                precio.textContent = Porductos_ID.precio_venta;
                descripcion.textContent = Porductos_ID.descripcion;
            });
        });
    } catch (error) {
        console.error("Error al crear HTML:", error);
    }
};

function mostrarTabla2() {
    var tabla = document.getElementById("mas2");
    if (tabla.style.display === "none") {
        tabla.style.display = "block";
    } else {
        tabla.style.display = "none";
    }
}

window.addEventListener('scroll', function () {
    var miDivMovable = document.getElementById('mas2');
    var scrollTop = window.scrollY;
    miDivMovable.style.top = scrollTop + 'px';
});

// Llama a la función para iniciar el proceso
crearHTML();





   

	 
