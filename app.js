import { generarEstrellas, convertirMinutosAHoras } from "./utils.js";


const pendientesForm = document.getElementById("form-pendientes");
const pendientesInput = document.getElementById("input-pendientes");
const pendientesLista = document.getElementById("lista-pendientes");


const vistasForm = document.getElementById("form-vistas");
const vistasInput = document.getElementById("input-vistas");
const vistasLista = document.getElementById("lista-vistas");

const buscadorInput = document.getElementById("buscador");

let peliculasPendientes = [];
let peliculasVistas = [];


if (localStorage.getItem("pendientes")) {
    peliculasPendientes = JSON.parse(localStorage.getItem("pendientes"));
    mostrarPendientes();
}

if (localStorage.getItem("vistas")) {
    peliculasVistas = JSON.parse(localStorage.getItem("vistas"));
    mostrarVistas();
}

/**
 * Convierte un string a Capital Case (cada palabra con su primera letra mayúscula).
 * @param {string} str - El string a convertir.
 * @returns {string} El string convertido.
 */
function toCapitalCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Listener para añadir una película pendiente al enviar el formulario.
 * Evita títulos duplicados y formatea el título antes de añadirlo.
 * @param {Event} e - Evento submit del formulario.
 */
pendientesForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let titulo = pendientesInput.value.trim();

    if (titulo !== "") {
        titulo = toCapitalCase(titulo);
        // Validar si el título ya existe usando .some()
        if (peliculasPendientes.some(peli => peli === titulo)) {
            alert('Esta película ya está en la lista');
            return;
        }
        peliculasPendientes.push(titulo);
        localStorage.setItem("pendientes", JSON.stringify(peliculasPendientes));
        mostrarPendientes();
        pendientesInput.value = "";
    }
});

/**
 * Listener para añadir una película vista al enviar el formulario.
 * Añade el título tal cual desde el input si no está vacío.
 * @param {Event} e - Evento submit del formulario.
 */
vistasForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = vistasInput.value;

    if (titulo !== "") {
        peliculasVistas.push(titulo);
        localStorage.setItem("vistas", JSON.stringify(peliculasVistas));
        mostrarVistas();
        vistasInput.value = "";
    }
});

/**
 * Renderiza una lista de películas en el contenedor de la interfaz correspondiente.
 * Crea botones para eliminar cada película de la lista y actualiza el almacenamiento local.
 * @param {Array<string>} lista - Array de títulos de películas.
 * @param {HTMLElement} contenedor - Elemento UL donde se va a renderizar la lista.
 * @param {string} claveStorage - Nombre de la clave en localStorage para esta lista.
 */
function renderizarLista(lista, contenedor, claveStorage) {
    const limpiarContenedor = (elemento) => {
        elemento.textContent = "";
    };

    const persistirLista = (clave, datos) => {
        localStorage.setItem(clave, JSON.stringify(datos));
    };

    const eliminarItem = (indice) => {
        const tituloPeli = lista[indice];
        if (confirm(`¿Estás seguro de que quieres eliminar "${tituloPeli}"?`)) {
            lista.splice(indice, 1);
            persistirLista(claveStorage, lista);
            renderizarLista(lista, contenedor, claveStorage);
        }
    };

    const crearBotonBorrar = (onClick) => {
        const boton = document.createElement("button");
        boton.className = "borrar-btn";
        boton.style.marginLeft = "8px";
        boton.textContent = "🗑";
        boton.addEventListener("click", onClick);
        return boton;
    };

    const crearItemLista = (titulo, indice) => {
        const li = document.createElement("li");
    
        const texto = document.createElement("span");
        texto.textContent = titulo;
    
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "✏️";
        botonEditar.style.marginLeft = "8px";
        botonEditar.onclick = () => {
            const nuevoTitulo = prompt("Edita el nombre:", titulo);
            if (nuevoTitulo && nuevoTitulo.trim() !== "") {
                lista[indice] = toCapitalCase(nuevoTitulo.trim()); // Usamos tu función de formato
                persistirLista(claveStorage, lista);
                renderizarLista(lista, contenedor, claveStorage);
            }
        };
    
        const botonBorrar = crearBotonBorrar(() => eliminarItem(indice));
    
        li.appendChild(texto);
        li.appendChild(botonEditar);
        li.appendChild(botonBorrar);
        return li;
    };

    const construirFragmento = () => {
        const fragment = document.createDocumentFragment();
        lista.forEach((item, i) => fragment.appendChild(crearItemLista(item, i)));
        return fragment;
    };

    limpiarContenedor(contenedor);
    contenedor.appendChild(construirFragmento());
}


 * Renderiza la lista de películas pendientes utilizando renderizarLista.
 */
function mostrarPendientes() {
    renderizarLista(peliculasPendientes, pendientesLista, "pendientes");
    // Actualiza el número en el HTML
    document.getElementById("cont-pendientes").textContent = peliculasPendientes.length;
}

function mostrarVistas() {
    renderizarLista(peliculasVistas, vistasLista, "vistas");
    // Actualiza el número en el HTML
    document.getElementById("cont-vistas").textContent = peliculasVistas.length;
}

/**
 * Listener para el input del buscador.
 * Filtra las películas en ambas listas visibles en base al texto ingresado.
 */
buscadorInput.addEventListener("input", function() {
    filtrarElementos(buscadorInput.value);
});

/**
 * Filtra y muestra solo aquellos elementos de las listas de películas que contienen el texto buscado.
 * Oculta los elementos que no cumplen con el filtro aplicando/removiendo la clase 'hidden'.
 * @param {string} texto - Texto a buscar (criterio de filtrado).
 */
function filtrarElementos(texto) {
    const filtro = texto.toLowerCase();
    const peliculasUsuario = document.querySelectorAll("#lista-pendientes li, #lista-vistas li");
    peliculasUsuario.forEach(function(li) {
        const contenido = li.firstChild.textContent.toLowerCase();
        if (contenido.includes(filtro)) {
            li.classList.remove("hidden");
        } else {
            li.classList.add("hidden");
        }
    });
}