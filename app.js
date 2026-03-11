import { generarEstrellas, convertirMinutosAHoras } from "./utils.js";

/*PELICULAS PENDIENTES*/
const formPendientes = document.getElementById("form-pendientes");
const inputPendientes = document.getElementById("input-pendientes");
const listaPendientes = document.getElementById("lista-pendientes");

/**PELICULAS VISTAS*/
const formVistas = document.getElementById("form-vistas");
const inputVistas = document.getElementById("input-vistas");
const listaVistas = document.getElementById("lista-vistas");

const buscador = document.getElementById("buscador");

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

/* MOSTRAR PENDIENTES */
function mostrarPendientes() {

    listaPendientes.innerHTML = "";

    for (let i = 0; i < peliculasPendientes.length; i++) {

        const li = document.createElement("li");
        li.textContent = peliculasPendientes[i];

        const boton = document.createElement("button");
        boton.textContent = "🗑";

        boton.addEventListener("click", function() {
            peliculasPendientes.splice(i, 1);
            localStorage.setItem("pendientes", JSON.stringify(peliculasPendientes));
            mostrarPendientes();
        });

        li.appendChild(boton);
        listaPendientes.appendChild(li);
    }
}


/* MOSTRAR VISTAS */
function mostrarVistas() {

    listaVistas.innerHTML = "";

    for (let i = 0; i < peliculasVistas.length; i++) {

        const li = document.createElement("li");
        li.textContent = peliculasVistas[i];

        const boton = document.createElement("button");
        boton.textContent = "🗑";

        boton.addEventListener("click", function() {
            peliculasVistas.splice(i, 1);
            localStorage.setItem("vistas", JSON.stringify(peliculasVistas));
            mostrarVistas();
        });

        li.appendChild(boton);
        listaVistas.appendChild(li);
    }
}


/* BUSCADOR */
buscador.addEventListener("input", function() {

    const texto = buscador.value.toLowerCase();
    const peliculasUsuario = document.querySelectorAll("#lista-pendientes li, #lista-vistas li");

    peliculasUsuario.forEach(function(li) {

        const contenido = li.firstChild.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }

    });

});