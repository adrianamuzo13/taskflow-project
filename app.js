import { generarEstrellas, convertirMinutosAHoras } from "./utils.js";

/*PELICULAS PENDIENTES*/
const pendientesForm = document.getElementById("form-pendientes");
const pendientesInput = document.getElementById("input-pendientes");
const pendientesLista = document.getElementById("lista-pendientes");

/**PELICULAS VISTAS*/
const vistasForm = document.getElementById("form-vistas");
const vistasInput = document.getElementById("input-vistas");
const vistasLista = document.getElementById("lista-vistas");

const buscadorInput = document.getElementById("buscador");

let peliculasPendientes = [];
let peliculasVistas = [];

/* CARGAR DATOS GUARDADOS */
if (localStorage.getItem("pendientes")) {
    peliculasPendientes = JSON.parse(localStorage.getItem("pendientes"));
    mostrarPendientes();
}

if (localStorage.getItem("vistas")) {
    peliculasVistas = JSON.parse(localStorage.getItem("vistas"));
    mostrarVistas();
}


/* AÑADIR  PENDIENTE */
formPendientes.addEventListener("submit", function(e) {
    e.preventDefault();

    let titulo = inputPendientes.value.trim();

    // Convierte a Capital Case (cada palabra con la primera letra en mayúscula)
    function toCapitalCase(str) {
        return str
            .toLowerCase()
            .split(' ')
            .filter(Boolean)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

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
        inputPendientes.value = "";
    }
});

    // Convierte a Capital Case (cada palabra con la primera letra en mayúscula)
    function toCapitalCase(str) {
        return str
            .toLowerCase()
            .split(' ')
            .filter(Boolean)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    if (titulo !== "") {
        titulo = toCapitalCase(titulo);
        peliculasPendientes.push(titulo);
        localStorage.setItem("pendientes", JSON.stringify(peliculasPendientes));
        mostrarPendientes();
        inputPendientes.value = "";
    }
});


/* AÑADIR  VISTA */
/**
 * Agrega un listener al formulario de películas vistas que se activa al enviar el formulario.
 * @param {Event} e - El evento de envío del formulario.
 */
formVistas.addEventListener("submit", (e) => {
    e.preventDefault();

    /** Obtiene el valor del campo de entrada donde se escribe el título de la película vista */
    const titulo = inputVistas.value;

    /**
     * Si el título no está vacío:
     * - Agrega el título al array de películas vistas
     * - Guarda el array actualizado en localStorage bajo la clave 'vistas'
     * - Actualiza la interfaz llamando a mostrarVistas()
     * - Limpia el campo de entrada dejando su valor en blanco
     */
    if (titulo !== "") {
        peliculasVistas.push(titulo); // Añade la película vista al array
        localStorage.setItem("vistas", JSON.stringify(peliculasVistas)); // Actualiza en localStorage
        mostrarVistas(); // Refresca la lista mostrada en la página
        inputVistas.value = ""; // Resetea el input del formulario
    }
});

/**
 * Renderiza cualquier lista de películas en su contenedor correspondiente.
 * @param {Array} lista - Array de películas.
 * @param {HTMLElement} contenedor - Elemento UL donde se insertarán los LIs.
 * @param {string} claveStorage - Clave para localStorage.
 */
function renderizarLista(lista, contenedor, claveStorage) {
    contenedor.innerHTML = "";



    lista.forEach((item, i) => {
        // Usando template strings para el contenido
        const li = document.createElement("li");
        li.innerHTML = `
            ${item}
            <button class="borrar-btn" style="margin-left:8px;">🗑</button>
        `;

        const boton = li.querySelector(".borrar-btn");

        boton.addEventListener("click", function() {
            lista.splice(i, 1);
            localStorage.setItem(claveStorage, JSON.stringify(lista));
            renderizarLista(lista, contenedor, claveStorage);
        });

        contenedor.appendChild(li);
    });
}

// Funciones específicas para cada lista aprovechando la genérica
function mostrarPendientes() {
    renderizarLista(peliculasPendientes, listaPendientes, "pendientes");
}

function mostrarVistas() {
    renderizarLista(peliculasVistas, listaVistas, "vistas");
}


/* BUSCADOR */
buscador.addEventListener("input", function() {
    filtrarElementos(buscador.value);
});

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