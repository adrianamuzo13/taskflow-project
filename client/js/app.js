import { generarEstrellas } from '../utils.js';
import { taskAPI } from '../src/api/client.js';

// BASE DE DATOS PELÍCULAS
const peliculas = [
  // DRAMA
  {
    titulo: "Nomadland",
    año: 2020,
    genero: "Drama",
    estado: "Ganadora",
    img: "https://images.justwatch.com/poster/244596393/s718/nomadland.jpg",
  },
  {
    titulo: "Joker",
    año: 2019,
    genero: "Drama",
    estado: "Nominada",
    img: "https://es.web.img3.acsta.net/c_310_420/pictures/19/09/17/17/03/5442885.jpg",
  },
  {
    titulo: "En busca de la Felicidad",
    año: 2006,
    genero: "Drama",
    estado: "Nominada",
    img: "https://pics.filmaffinity.com/the_pursuit_of_happyness-660040804-large.jpg",
  },
  {
    titulo: "Cadena Perpetua",
    año: 1994,
    genero: "Drama",
    estado: "Nominada",
    img: "https://pics.filmaffinity.com/the_shawshank_redemption-576140557-large.jpg",
  },
  {
    titulo: "La Lista de Schindler",
    año: 1993,
    genero: "Drama",
    estado: "Ganadora",
    img: "https://m.media-amazon.com/images/M/MV5BZTkzMjIwOWUtYmRkZS00ZDdjLThiOTQtNjk4ZmM5NTY1YWI1XkEyXkFqcGc@._V1_.jpg",
  },
  {
    titulo: "El Padrino",
    año: 1972,
    genero: "Drama",
    estado: "Ganadora",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCDRCFR3-HdYt9UY9BI28VJcC6lBZOazD0BaGWMMZJpQzcnLEH-xgSHdbahy76lGZLzYotLAeFKJgTEyHvVHWpP3QNUYuPMugdH_HZTMm&s=10",
  },

  //ANIMACIÓN
  {
    titulo: "Toy Story 4",
    año: 2019,
    genero: "Animación",
    estado: "Ganadora",
    img: "https://m.media-amazon.com/images/M/MV5BMDliMjNjY2MtOTZmYi00MWNmLWIwYTEtOWNlNWEyNTUyNTIxXkEyXkFqcGc@._V1_.jpg",
  },
  {
    titulo: "Coco",
    año: 2017,
    genero: "Animación",
    estado: "Ganadora",
    img: "https://es.web.img3.acsta.net/r_1280_720/pictures/17/06/07/10/14/213172.jpg",
  },
  {
    titulo: "Los Croods",
    año: 2013,
    genero: "Animación",
    estado: "Nominada",
    img: "https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_.jpg",
  },
  {
    titulo: "Como Entrenar a tu Dragón",
    año: 2010,
    genero: "Animación",
    estado: "Nominada",
    img: "https://m.media-amazon.com/images/S/pv-target-images/3b48c7641f6c89ce2f878f7f22400ce2bd32c4b41bcdd04383c93f69f684eead.jpg",
  },
  {
    titulo: "Kung Fu Panda",
    año: 2008,
    genero: "Animación",
    estado: "Nominada",
    img: "https://images.justwatch.com/poster/312538889/s718/kung-fu-panda.jpg",
  },
  {
    titulo: "Ratatouille",
    año: 2007,
    genero: "Animación",
    estado: "Ganadora",
    img: "https://m.media-amazon.com/images/I/715VhUSV2PL._AC_UF894,1000_QL80_.jpg",
  },

  //COMEDIA
  {
    titulo: "Jojo Rabbit",
    año: 2019,
    genero: "Comedia",
    estado: "Ganadora",
    img: "https://m.media-amazon.com/images/M/MV5BYjc1YmZiMmUtYjBiNC00YzJmLWE5NTYtZTY5Mjc0NDY0ZmI3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    titulo: "La La Land",
    año: 2016,
    genero: "Comedia",
    estado: "Ganadora",
    img: "https://m.media-amazon.com/images/M/MV5BM2JlYjE4YWYtMTA3MC00YTAwLTg3OGMtZjQxMjQzMGM3M2U0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    titulo: "Birdman",
    año: 2014,
    genero: "Comedia",
    estado: "Ganadora",
    img: "https://66.media.tumblr.com/d549e6b3ad23675a8cead3d1e6e619c5/tumblr_o1nfauS1Iv1s80h8lo1_1280.jpg",
  },
  {
    titulo: "El gran hotel Budapest",
    año: 2014,
    genero: "Comedia",
    estado: "Nominada",
    img: "https://movienonsense.com/wp-content/uploads/2020/03/f0594-thegrandbudapest2.jpg?w=1140",
  },
  {
    titulo: "El discurso del Rey",
    año: 2010,
    genero: "Comedia",
    estado: "Ganadora",
    img: "https://es.web.img3.acsta.net/medias/nmedia/18/82/26/21/19609697.jpg",
  },
  {
    titulo: "Pequeña Miss Sunshine",
    año: 2006,
    genero: "Comedia",
    estado: "Nominada",
    img: "https://pics.filmaffinity.com/little_miss_sunshine-534650278-large.jpg",
  },

  //ACCIÓN
  {
    titulo: "Black Panther",
    año: 2018,
    genero: "Acción",
    estado: "Nominada",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810",
  },
  {
    titulo: "Mad Max: Furia en la carretera",
    año: 2015,
    genero: "Acción",
    estado: "Ganadora",
    img: "https://www.cinesa.es/media/dl0bwwp0/mad-max-furia.jpg",
  },
  {
    titulo: "Inception (Origen)",
    año: 2010,
    genero: "Acción",
    estado: "Nominada",
    img: "https://m.media-amazon.com/images/M/MV5BZDYwMDU0NTktMjg1MC00ZWNiLWE2ZTQtYzczZWMxZGM3OTJmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    titulo: "El Caballero Oscuro",
    año: 2008,
    genero: "Acción",
    estado: "Nominada",
    img: "https://preview.redd.it/the-dark-knight-2008-this-live-action-film-by-christopher-v0-95droxtfqsqa1.jpg?width=640&crop=smart&auto=webp&s=1497450dddf1c3e9293cfebc84c3aa1345102ae2",
  },
  {
    titulo: "Gladiator",
    año: 2000,
    genero: "Acción",
    estado: "Ganadora",
    img: "https://es.web.img3.acsta.net/medias/nmedia/18/70/92/02/20149073.jpg",
  },
  {
    titulo: "Salvar al Soldado Ryan",
    año: 1998,
    genero: "Acción",
    estado: "Ganadora",
    img: "https://es.web.img3.acsta.net/pictures/14/03/05/09/42/163621.jpg",
  },

  //CIENCIA FICCIÓN
  {
    titulo: "Todo a la vez en todas partes",
    año: 2022,
    genero: "Ciencia Ficción",
    estado: "Ganadora",
    img: "https://static.wikia.nocookie.net/doblaje/images/b/b7/Everything_Everywhere_All_at_Once_p%C3%B3ster_hd.jpg/revision/latest?cb=20231127032630&path-prefix=es",
  },
  {
    titulo: "Dune",
    año: 2021,
    genero: "Ciencia Ficción",
    estado: "Nominada",
    img: "https://images.pathe-thuis.nl/29177_378x538.jpg",
  },
  {
    titulo: "La llegada",
    año: 2016,
    genero: "Ciencia Ficción",
    estado: "Nominada",
    img: "https://m.media-amazon.com/images/S/pv-target-images/e374cc73e3f73c9543d7e863f29cc94358bbe3df636ed73a25c15a49020d8b61.jpg",
  },
  {
    titulo: "Interstelar",
    año: 2014,
    genero: "Ciencia Ficción",
    estado: "Nominada",
    img: "https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg",
  },
  {
    titulo: "Gravity",
    año: 2013,
    genero: "Ciencia Ficción",
    estado: "Ganadora",
    img: "https://pics.filmaffinity.com/Gravity-201743084-large.jpg",
  },
  {
    titulo: "Avatar",
    año: 2009,
    genero: "Ciencia Ficción",
    estado: "Nominada",
    img: "https://pics.filmaffinity.com/Avatar-262844280-large.jpg",
  },
];

let aportesComunidad = [];
let muroElement = null;
let inputCuriElement = null;
let loader = null;
let errorMsg = null;
 
// FUNCIÓN GLOBAL: necesita acceder a muroElement, loader, errorMsg (vars de módulo)
async function cargarCuriosidades() {
  try {
    if (loader) loader.style.display = "block";
    const datos = await taskAPI.getAll();
 
    if (!muroElement) return;
    muroElement.innerHTML = "";
 
    datos.forEach(nota => {
      const fecha = nota.createdAt
        ? new Date(nota.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
        : new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
 
      const item = document.createElement('div');
      item.className = "flex items-center justify-between p-5 bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 rounded-xl shadow-sm transition-all hover:bg-black/10 dark:hover:bg-white/15 mb-5";
      item.innerHTML = `
          <div class="flex flex-col gap-1 pr-4">
              <span class="text-[9px] uppercase font-black tracking-widest text-primary dark:text-gold opacity-80">
                  ${fecha} </span>
              <p class="text-sm italic font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                  "${nota.titulo}"
              </p>
          </div>
          <button onclick="eliminarAporte('${nota._id || nota.id}')"
                  class="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors cursor-pointer p-2 flex-shrink-0"
                  title="Eliminar">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
          </button>
      `;
      muroElement.appendChild(item);
    });
  } catch (err) {
    if (errorMsg) errorMsg.textContent = "❌ Error: " + err.message;
  } finally {
    if (loader) loader.style.display = "none";
  }
}
 
window.addEventListener("load", () => {
 
  // VARIABLES DEL DOM
  const DOM = {
    contenedorVistas: document.getElementById("contenedor-vistas"),
    contVistas: document.getElementById("cont-vistas"),
    contPendientes: document.getElementById("cont-pendientes"),
    buscadorInput: document.getElementById("buscador"),
    inputCuri: document.getElementById("input-curiosidad"),
    btnCuri: document.getElementById("btn-anadir-curiosidad"),
    muro: document.getElementById("muro-curiosidades"),
    // NUEVAS VARIABLES DE RED
  loader: document.getElementById("loader"),
  errorMsg: document.getElementById("error-msg")
  };
 
  const {
    contenedorVistas,
    contVistas,
    buscadorInput,
    btnCuri,
    inputCuri, 
    muro
  } = DOM;
 
  // Asigna a las variables globales para que cargarCuriosidades y eliminarAporte puedan usarlas
  muroElement = DOM.muro;
  inputCuriElement = DOM.inputCuri;
  loader = DOM.loader;
  errorMsg = DOM.errorMsg;
 
  // FUNCIÓN PARA RENDERIZAR CADA TARJETA 
  function renderizar() {
    const idsGrids = ["grid-drama", "grid-animacion", "grid-comedia", "grid-accion", "grid-cienciaficcion"]; // LISTA DE GRIDS PARA LIMPIAR
    idsGrids.forEach(id => {
      const g = document.getElementById(id);
      if (g) g.innerHTML = "";
    });
 
    peliculas.forEach((peli) => {
      const generoLimpio = peli.genero.toLowerCase()
        .replace(/\s+/g, '')
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
 
      const gridId = `grid-${generoLimpio}`;
      const grid = document.getElementById(gridId); // BUSCA EL GRID
 
      if (grid) { // SI EL GRID EXISTE, CREA LA TARJETA
        const badgeClass =
          peli.estado === "Ganadora" ? "oscar-badge--win" : "oscar-badge--nom";
        const tarjeta = document.createElement("div");
        tarjeta.className = "oscar-card h-fit flex flex-col";
        tarjeta.innerHTML = `
            <img src="${peli.img}" class="oscar-poster w-full" alt="${peli.titulo}">
            <div class="p-4 flex-grow flex flex-col">
                <h3 class="font-bold text-xl">${peli.titulo}</h3>
                <p class="text-sm font-bold opacity-70">${peli.año}</p>
                <p class="text-sm opacity-70 mb-2">${peli.genero}</p>
                <div>
                    <span class="oscar-badge ${badgeClass}">${peli.estado}</span>
                </div>
            </div>
            <button class="btn-barra-vista w-full mt-auto bg-primary hover:bg-secondary text-white py-4 font-bold uppercase text-[11px] tracking-widest transition-all duration-300 flex justify-center items-center cursor-pointer border-none rounded-b-[inherit]" title="Marcar como vista">
                    <span class="icon-check hidden mr-2">✓</span>
                    <span class="texto-boton">Marcar como vista</span>
            </button>
        `;
        grid.appendChild(tarjeta);
      }
    });
 
    actualizarContadores();
  }
 
  // BUSCADOR
  buscadorInput.addEventListener("input", (e) => {
    const filtro = e.target.value.toLowerCase();
    const tarjetas = document.querySelectorAll(".oscar-card");
 
    //FILTRA LAS TARJETAS
    tarjetas.forEach((tarjeta) => {
      const titulo = tarjeta.querySelector("h3").innerText.toLowerCase();
      tarjeta.classList.toggle("hidden", !titulo.includes(filtro));
    });
 
    //FILTRA LAS SECCIONES
    const secciones = document.querySelectorAll(
      "section[id]:not(#seccion-vistas):not(#seccion-comunidad)"
    );
 
    secciones.forEach((seccion) => {
      const tarjetasEnSeccion = Array.from(seccion.querySelectorAll(".oscar-card"));
      const tieneVisibles = tarjetasEnSeccion.some(t => !t.classList.contains("hidden"));
      seccion.classList.toggle("hidden", !tieneVisibles && filtro !== "");
    });
  });
 
 
  // FUNCIÓN PARA PUBLICAR 
  async function publicarAporte() {
    const texto = inputCuri.value.trim();
    if (!texto) return;
 
    try {
      if (errorMsg) errorMsg.textContent = "";
      if (loader) loader.style.display = "block";
 
      await taskAPI.create(texto);
      
      inputCuri.value = "";
      await cargarCuriosidades(); // Refresca el muro
 
    } catch (err) {
      if (errorMsg) errorMsg.textContent = "⚠️ " + err.message;
    } finally {
      if (loader) loader.style.display = "none";
    }
  }
 
  // EVENTOS 
  if (btnCuri) {
    btnCuri.addEventListener('click', publicarAporte);
  }
 
  if (inputCuri) {
    inputCuri.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        publicarAporte();
      }
    });
  }
 
  cargarCuriosidades();
 
  // LÓGICA DE INTERACCIÓN (CLICS) 
  document.addEventListener("click", (e) => {
 
    // 1. CLIC EN "MARCAR COMO VISTA"
    const btn = e.target.closest(".btn-barra-vista");
    if (btn && !btn.classList.contains("visto")) {
        const tarjeta = btn.closest(".oscar-card");
        const titulo = tarjeta.querySelector("h3").innerText;
        const img = tarjeta.querySelector("img").src;
        const infoExtra = tarjeta.querySelector("p").innerText;
 
      // Evitar duplicados
      const idLimpio = `item-${titulo.replace(/\s+/g, "")}`;
        if (document.getElementById(idLimpio)) return;
 
      btn.classList.add("visto", "opacity-50");
      btn.querySelector(".texto-boton").innerText = "Vista";
      
      const nuevoItem = document.createElement("div");
      nuevoItem.id = idLimpio;
      nuevoItem.className = "flex flex-col h-full animate-fade-in";
        
      nuevoItem.innerHTML = `
          <div class="relative w-full mb-4">
              <img src="${img}" class="w-full aspect-[2/3] object-cover rounded-2xl shadow-md block" alt="${titulo}">
              <button class="btn-eliminar"> ✕</button>
          </div>
 
          <div class="flex flex-col px-1">
              <h3 class="font-bold text-lg leading-tight text-primary dark:text-gold uppercase tracking-tighter">${titulo}</h3>
              <p class="text-xs opacity-60 font-medium mb-3">${infoExtra}</p>
              
              <div class="selector-estrellas flex gap-1 text-2xl cursor-pointer" data-puntuacion="0">
                  <span class="estrella-interactiva text-gray-400 hover:text-gold" data-valor="1">★</span>
                  <span class="estrella-interactiva text-gray-400 hover:text-gold" data-valor="2">★</span>
                  <span class="estrella-interactiva text-gray-400 hover:text-gold" data-valor="3">★</span>
                  <span class="estrella-interactiva text-gray-400 hover:text-gold" data-valor="4">★</span>
                  <span class="estrella-interactiva text-gray-400 hover:text-gold" data-valor="5">★</span>
              </div>
          </div>
      `;
 
        // ELIMINAR MENSAJE DE VACÍO (Si existe)
        const mensajeVacio = DOM.contenedorVistas.querySelector("p");
        if (mensajeVacio) mensajeVacio.remove();
 
        // AÑADIR
        DOM.contenedorVistas.appendChild(nuevoItem); //appendChild para que se acumulen
        actualizarContadores();
    }
 
 
    // 2. CLIC EN ELIMINAR (De la lista de vistas)
    const btnEliminar = e.target.closest(".btn-eliminar");
    if (btnEliminar) {
        // Busca la tarjeta completa 
        const tarjetaVistas = btnEliminar.closest("[id^='item-']");
        if (!tarjetaVistas) return; // Si no la encuentra, sale
 
        const titulo = tarjetaVistas.querySelector("h3").innerText;
 
        // Reactiva el botón en la galería principal
        const todasLasCards = document.querySelectorAll(".oscar-card");
        todasLasCards.forEach(card => {
            if (card.querySelector("h3").innerText === titulo) {
                const btnOriginal = card.querySelector(".btn-barra-vista");
                btnOriginal.classList.remove("visto", "opacity-50");
                btnOriginal.querySelector(".texto-boton").innerText = "Marcar como vista";
                const icon = btnOriginal.querySelector(".icon-check");
                if (icon) icon.classList.add("hidden");
            }
        });
 
    // Borra la tarjeta y actualiza los contadores
    tarjetaVistas.remove();
    actualizarContadores();
 
    // Si no quedan pelis, pone el mensaje de aviso
    const contenedorVistas = document.getElementById("contenedor-vistas");
    if (contenedorVistas && contenedorVistas.children.length === 0) {
        contenedorVistas.innerHTML = `<p class="col-span-full text-center py-10 opacity-50 italic border-2 border-dashed border-black/10 rounded-2xl">Aquí aparecerán las películas que marques como vistas.</p>`;
    }
}
    
    // 3. CLIC EN LAS ESTRELLAS DE VALORACIÓN
    if (e.target.classList.contains("estrella-interactiva")) {
        const star = e.target;
        const valor = parseInt(star.dataset.valor);
        const contenedor = star.closest(".selector-estrellas");
        const todas = contenedor.querySelectorAll(".estrella-interactiva");
 
        todas.forEach(s => {
            s.classList.toggle("text-gold", parseInt(s.dataset.valor) <= valor);
            s.classList.toggle("text-gray-300", parseInt(s.dataset.valor) > valor);
        });
    }
  });
 
  // CONTADORES
  function actualizarContadores() {
    const vistasCount = document.querySelectorAll("[id^='item-']").length;
    if (contVistas) contVistas.innerText = vistasCount;
 
    const total = peliculas.length;
    const contPendientesEl = document.getElementById("cont-pendientes");
    if (contPendientesEl) {
      contPendientesEl.innerText = total - vistasCount;
    }
  }
 
  // Al cargar la página, renderizamos todas las películas
  renderizar();
});
 
// FUNCIÓN PARA ELIMINAR UN APORTE
window.eliminarAporte = async function(id) {
  if (confirm("¿Estás seguro de que quieres eliminar este aporte?")) {
    try {
      await taskAPI.delete(id); 
      
      await cargarCuriosidades(); 
    } catch (err) {
      alert("No se pudo eliminar: " + err.message);
    }
  }
};