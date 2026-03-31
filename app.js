/*document.addEventListener('DOMContentLoaded', () => {*/
window.addEventListener('load', () => {

    // Referencias a elementos del DOM
    const contenedorVistas = document.getElementById('contenedor-vistas');
    const contVistas = document.getElementById('cont-vistas');
    const buscadorInput = document.getElementById('buscador');


// BASE DE DATOS PELÍCULAS
const peliculas = [
        // DRAMA
        { titulo: "Nomadland", año: 2020, genero: "Drama", estado: "Ganadora", img: "https://images.justwatch.com/poster/244596393/s718/nomadland.jpg", seccion: "grid-drama" },
        { titulo: "Joker", año: 2019, genero: "Drama", estado: "Nominada", img: "https://es.web.img3.acsta.net/c_310_420/pictures/19/09/17/17/03/5442885.jpg", seccion: "grid-drama" },
        { titulo: "En busca de la Felicidad", año: 2006, genero: "Drama", estado: "Nominada", img: "https://pics.filmaffinity.com/the_pursuit_of_happyness-660040804-large.jpg", seccion: "grid-drama" },
        { titulo: "Cadena Perpetua", año: 1994, genero: "Drama", estado: "Nominada", img: "https://pics.filmaffinity.com/the_shawshank_redemption-576140557-large.jpg", seccion: "grid-drama" },
        { titulo: "La Lista de Schindler", año: 1993, genero: "Drama", estado: "Ganadora", img: "https://m.media-amazon.com/images/M/MV5BZTkzMjIwOWUtYmRkZS00ZDdjLThiOTQtNjk4ZmM5NTY1YWI1XkEyXkFqcGc@._V1_.jpg", seccion: "grid-drama" },
        { titulo: "El Padrino", año: 1972, genero: "Drama", estado: "Ganadora", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsCDRCFR3-HdYt9UY9BI28VJcC6lBZOazD0BaGWMMZJpQzcnLEH-xgSHdbahy76lGZLzYotLAeFKJgTEyHvVHWpP3QNUYuPMugdH_HZTMm&s=10", seccion: "grid-drama" },
    
        //ANIMACIÓN
        { titulo: "Toy Story 4", año: 2019, genero: "Animación", estado: "Ganadora", img: "https://m.media-amazon.com/images/M/MV5BMDliMjNjY2MtOTZmYi00MWNmLWIwYTEtOWNlNWEyNTUyNTIxXkEyXkFqcGc@._V1_.jpg", seccion: "grid-animacion" },
        { titulo: "Coco", año: 2017, genero: "Animación", estado: "Ganadora", img: "https://es.web.img3.acsta.net/r_1280_720/pictures/17/06/07/10/14/213172.jpg", seccion: "grid-animacion" },
        { titulo: "Los Croods", año: 2013, genero: "Animación", estado: "Nominada", img: "https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_.jpg", seccion: "grid-animacion" },
        { titulo: "Como Entrenar a tu Dragón", año: 2010, genero: "Animación", estado: "Nominada", img: "https://m.media-amazon.com/images/S/pv-target-images/3b48c7641f6c89ce2f878f7f22400ce2bd32c4b41bcdd04383c93f69f684eead.jpg", seccion: "grid-animacion" },
        { titulo: "Kung Fu Panda", año: 2008, genero: "Animación", estado: "Nominada", img: "https://images.justwatch.com/poster/312538889/s718/kung-fu-panda.jpg", seccion: "grid-animacion" },
        { titulo: "Ratatouille", año: 2007, genero: "Animación", estado: "Ganadora", img: "https://m.media-amazon.com/images/I/715VhUSV2PL._AC_UF894,1000_QL80_.jpg", seccion: "grid-animacion" },

        //COMEDIA
        { titulo: "Jojo Rabbit", año: 2019, genero: "Comedia", estado: "Ganadora", img: "https://m.media-amazon.com/images/M/MV5BYjc1YmZiMmUtYjBiNC00YzJmLWE5NTYtZTY5Mjc0NDY0ZmI3XkEyXkFqcGc@._V1_.jpg", seccion: "grid-comedia" },
        { titulo: "La La Land", año: 2016, genero: "Comedia", estado: "Ganadora", img: "https://m.media-amazon.com/images/M/MV5BM2JlYjE4YWYtMTA3MC00YTAwLTg3OGMtZjQxMjQzMGM3M2U0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", seccion: "grid-comedia" },
        { titulo: "Birdman", año: 2014, genero: "Comedia", estado: "Ganadora", img: "https://66.media.tumblr.com/d549e6b3ad23675a8cead3d1e6e619c5/tumblr_o1nfauS1Iv1s80h8lo1_1280.jpg", seccion: "grid-comedia" },
        { titulo: "El gran hotel Budapest", año: 2014, genero: "Comedia", estado: "Nominada", img: "https://movienonsense.com/wp-content/uploads/2020/03/f0594-thegrandbudapest2.jpg?w=1140", seccion: "grid-comedia" },
        { titulo: "El discurso del Rey", año: 2010, genero: "Comedia", estado: "Ganadora", img: "https://es.web.img3.acsta.net/medias/nmedia/18/82/26/21/19609697.jpg", seccion: "grid-comedia" },
        { titulo: "Pequeña Miss Sunshine", año: 2006, genero: "Comedia", estado: "Nominada", img: "https://pics.filmaffinity.com/little_miss_sunshine-534650278-large.jpg", seccion: "grid-comedia" },

        //ACCIÓN
        { titulo: "Black Panther", año: 2018, genero: "Acción", estado: "Nominada", img: "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810", seccion: "grid-accion" },
        { titulo: "Mad Max: Furia en la carretera", año: 2015, genero: "Acción", estado: "Ganadora", img: "https://www.cinesa.es/media/dl0bwwp0/mad-max-furia.jpg", seccion: "grid-accion" },
        { titulo: "Inception (Origen)", año: 2010, genero: "Acción", estado: "Nominada", img: "https://m.media-amazon.com/images/M/MV5BZDYwMDU0NTktMjg1MC00ZWNiLWE2ZTQtYzczZWMxZGM3OTJmXkEyXkFqcGc@._V1_.jpg", seccion: "grid-accion" },
        { titulo: "El Caballero Oscuro", año: 2008, genero: "Acción", estado: "Nominada", img: "https://preview.redd.it/the-dark-knight-2008-this-live-action-film-by-christopher-v0-95droxtfqsqa1.jpg?width=640&crop=smart&auto=webp&s=1497450dddf1c3e9293cfebc84c3aa1345102ae2", seccion: "grid-accion" },
        { titulo: "Gladiator", año: 2000, genero: "Acción", estado: "Ganadora", img: "https://es.web.img3.acsta.net/medias/nmedia/18/70/92/02/20149073.jpg", seccion: "grid-accion" },
        { titulo: "Salvar al Soldado Ryan", año: 1998, genero: "Acción", estado: "Ganadora", img: "https://es.web.img3.acsta.net/pictures/14/03/05/09/42/163621.jpg", seccion: "grid-accion" },

        //CIENCIA FICCIÓN
        { titulo: "Todo a la vez en todas partes", año: 2022, genero: "Ciencia Ficción", estado: "Ganadora", img: "https://static.wikia.nocookie.net/doblaje/images/b/b7/Everything_Everywhere_All_at_Once_p%C3%B3ster_hd.jpg/revision/latest?cb=20231127032630&path-prefix=es", seccion: "grid-cienciaficcion" },
        { titulo: "Dune", año: 2021, genero: "Ciencia Ficción", estado: "Nominada", img: "https://images.pathe-thuis.nl/29177_378x538.jpg", seccion: "grid-cienciaficcion" },
        { titulo: "La llegada", año: 2016, genero: "Ciencia Ficción", estado: "Nominada", img: "https://m.media-amazon.com/images/S/pv-target-images/e374cc73e3f73c9543d7e863f29cc94358bbe3df636ed73a25c15a49020d8b61.jpg", seccion: "grid-cienciaficcion" },
        { titulo: "Interstelar", año: 2014, genero: "Ciencia Ficción", estado: "Nominada", img: "https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg", seccion: "grid-cienciaficcion" },
        { titulo: "Gravity", año: 2013, genero: "Ciencia Ficción", estado: "Ganadora", img: "https://pics.filmaffinity.com/Gravity-201743084-large.jpg", seccion: "grid-cienciaficcion" },
        { titulo: "Avatar", año: 2009, genero: "Ciencia Ficción", estado: "Nominada", img: "https://pics.filmaffinity.com/Avatar-262844280-large.jpg", seccion: "grid-cienciaficcion" }
    ];

//  FUNCIÓN PARA RENDERIZAR CADA TARJETA 
  function renderizar() {
        peliculas.forEach(peli => {
            // Buscamos el contenedor correspondiente (ej: "grid-drama")
            const grid = document.getElementById(peli.seccion);
            if (grid) {
                const badgeClass = peli.estado === 'Ganadora' ? 'oscar-badge--win' : 'oscar-badge--nom'; 
                // Crea el elemento HTML de la tarjeta
                const tarjeta = document.createElement('div');
                tarjeta.className = "oscar-card h-fit flex flex-col";
                tarjeta.innerHTML = `
                    <img src="${peli.img}" class="oscar-poster" alt="${peli.titulo}">
                    <div class="p-4 flex-grow">
                        <h3 class="font-bold text-xl">${peli.titulo}</h3>
                        <p class="text-sm font-bold opacity-70">${peli.año}</p>
                        <p class="text-sm opacity-70">${peli.genero}</p>
                        <div class="mt-2">
                            <span class="oscar-badge ${badgeClass}">${peli.estado}</span>
                        </div>
                    </div>
                    <div class="p-4 pt-0">
                        <button class="btn-barra-vista" title="Marcar como vista">
                            <span class="icon-check hidden">✓</span> 
                            <span class="texto-boton">Marcar como vista</span>
                        </button>
                    </div>
                `;
                // Mete la tarjeta en el grid
                grid.appendChild(tarjeta);
            }
        });
        
        // Al terminar de dibujar, actualizamos el contador de "Pendientes"
        actualizarContadores();
    }

    // LOGICA DEL BUSCADOR 
    buscadorInput.addEventListener('input', (e) => {
        const filtro = e.target.value.toLowerCase();
        const tarjetas = document.querySelectorAll('.oscar-card');
        
        // Busca en todas las tarjetas generadas
        tarjetas.forEach(tarjeta => {
            const titulo = tarjeta.querySelector('h3').innerText.toLowerCase();
            
            // Si el título incluye lo escrito, se muestra; si no, se oculta
            if (titulo.includes(filtro)) {
                tarjeta.classList.remove('hidden');
            } else {
                tarjeta.classList.add('hidden');
            }
        });
    });

// LOGICA DE INTERACCIÓN (CLICS) 
    document.addEventListener('click', (e) => {
        
        // 1. CLIC EN "MARCAR COMO VISTA"
        const btn = e.target.closest('.btn-barra-vista');
        
        // Solo si el botón existe y NO ha sido marcado ya (no tiene la clase 'visto')
        if (btn && !btn.classList.contains('visto')) {
            const tarjeta = btn.closest('.oscar-card');
            const titulo = tarjeta.querySelector('h3').innerText;

            // Cambia estilo del botón a gris
            btn.classList.add('visto');

            const icon = btn.querySelector('.icon-check');
            if (icon) icon.classList.remove('hidden');

            btn.querySelector('.texto-boton').innerText = 'Vista';

            // Crea ID único para la lista de abajo (ej: item-ToyStory4)
            const idLimpio = `item-${titulo.replace(/\s+/g, '')}`;
            
            // Si ya está en la lista , no hace nada
            if (document.getElementById(idLimpio)) return;

            // crea el pequeño bloque para la sección de "Películas Vistas"
            const nuevoItem = document.createElement('div');
            nuevoItem.id = idLimpio;
            nuevoItem.className = "item-vista mb-2 flex items-center justify-between p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-primary/10 transition-all";
            nuevoItem.innerHTML = `
                <span class="font-bold text-primary dark:text-gold">${titulo}</span>
                <button class="btn-eliminar-vista text-red-500 font-bold text-lg cursor-pointer">✖</button>
            `;

            // Quita el mensaje de "No hay películas" si existe
            if (contenedorVistas.querySelector('p')) contenedorVistas.innerHTML = ''; 
            contenedorVistas.appendChild(nuevoItem); //Añade
            actualizarContadores();
        }

        // 2. CLIC EN ELIMINAR
        if (e.target.classList.contains('btn-eliminar-vista')) {
    const item = e.target.closest('.item-vista');
    const titulo = item.querySelector('span').innerText;

    // Resetear el botón original
    document.querySelectorAll('.oscar-card').forEach(card => {
        if (card.querySelector('h3').innerText === titulo) {
            const btn = card.querySelector('.btn-barra-vista');
            btn.classList.remove('visto');
            btn.querySelector('.icon-check').classList.add('hidden'); 
            btn.querySelector('.texto-boton').innerText = 'Marcar como vista';
        }
    });

    item.remove(); // elimina de la lista
    actualizarContadores();
}
    });

    // FUNCION PARA ACTUALIZAR LOS CONTADORES DE VISTAS Y PENDIENTES
    function actualizarContadores() {
        const vistasCount = document.querySelectorAll('.item-vista').length; // Cuenta cuántas películas hay en la sección de vistas
        if (contVistas) contVistas.innerText = vistasCount;

        // Calculamos pendientes: total de tarjetas - tarjetas marcadas como vistas
        const total = peliculas.length;
        const vistas = document.querySelectorAll('.btn-barra-vista.visto').length;
        const contPendientes = document.getElementById('cont-pendientes');
        
        if (contPendientes) contPendientes.innerText = total - vistas;
    }

    // Al cargar la página, renderizamos todas las películas
    renderizar();
});