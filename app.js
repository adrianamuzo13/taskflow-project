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

    const titulo = inputPendientes.value;

    if (titulo !== "") {
        peliculasPendientes.push(titulo);
        localStorage.setItem("pendientes", JSON.stringify(peliculasPendientes));
        mostrarPendientes();
        inputPendientes.value = "";
    }
});


/* AÑADIR  VISTA */
formVistas.addEventListener("submit", function(e) {

    e.preventDefault();

    const titulo = inputVistas.value;

    if (titulo !== "") {
        peliculasVistas.push(titulo);
        localStorage.setItem("vistas", JSON.stringify(peliculasVistas));
        mostrarVistas();
        inputVistas.value = "";
    }
});


/* MOSTRAR PENDIENTES */
function mostrarPendientes() {

    listaPendientes.innerHTML = "";

    for (let i = 0; i < peliculasPendientes.length; i++) {

        const li = document.createElement("li");
        li.textContent = peliculasPendientes[i];

        const boton = document.createElement("button");
        boton.textContent = "Eliminar";

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
        boton.textContent = "Eliminar";

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
    const todasLasLi = document.querySelectorAll("li");

    todasLasLi.forEach(function(li) {

        const contenido = li.firstChild.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            li.style.display = "list-item";
        } else {
            li.style.display = "none";
        }

    });

});