# Taskflow Project

App web estática (HTML + JavaScript) para explorar una selección de películas de los Premios Oscar por género y gestionar **tus listas personales** de:

- **Películas por ver** (pendientes)
- **Películas vistas**

Incluye **buscador**, **edición/eliminación**, **vaciar listas**, **modo oscuro** y persistencia con **LocalStorage**.

## Demo rápida

- Abre `index.html` en el navegador.
- Tus listas se guardan automáticamente en el navegador (LocalStorage).

## Tecnologías

- **HTML + JavaScript (ES Modules)**
- **Tailwind CSS** (compilado a `output.css`)

## Requisitos

- **Node.js** (para compilar Tailwind).  
  Si solo quieres ver la web, basta con abrir `index.html`.

## Instalación

```bash
npm install
```

## Desarrollo (Tailwind en watch)

Este proyecto usa el CLI de Tailwind para compilar `input.css` → `output.css` en modo watch:

```bash
npm run dev
```

Luego abre `index.html` en tu navegador.

## Estructura del proyecto

- `index.html`: interfaz principal
- `app.js`: lógica de listas (pendientes/vistas), buscador y acciones
- `utils.js`: utilidades compartidas
- `input.css`: entrada de Tailwind
- `output.css`: CSS compilado (usado por `index.html`)

## Scripts

- `npm run dev`: compila Tailwind en modo watch (`output.css`)

---

## Documentación de funciones

### `app.js`

| Función | Descripción | Parámetros |
|--------|-------------|------------|
| `toCapitalCase(str)` | Convierte un string a Capital Case (cada palabra con su primera letra mayúscula). | `str` (string) – Texto a formatear |
| `renderizarLista(lista, contenedor, claveStorage)` | Renderiza una lista de películas en el DOM. Crea items con botones para editar y eliminar, y persiste en `localStorage`. | `lista` (array) – Títulos de películas; `contenedor` (HTMLElement) – UL donde renderizar; `claveStorage` (string) – Clave en `localStorage` |
| `mostrarPendientes()` | Renderiza la lista de películas pendientes y actualiza el contador. | — |
| `mostrarVistas()` | Renderiza la lista de películas vistas y actualiza el contador. | — |
| `filtrarElementos(texto)` | Filtra ambas listas mostrando solo los elementos cuyo texto contiene `texto`. Oculta el resto con la clase `hidden`. | `texto` (string) – Criterio de búsqueda |

### `utils.js`

| Función | Descripción | Parámetros |
|--------|-------------|------------|
| `generarEstrellas(valoracion)` | Genera una representación de estrellas (1–5) para valorar una película. Devuelve cadenas como `"★★★☆☆"`. | `valoracion` (number) – Valor entre 1 y 5 |
| `convertirMinutosAHoras(minutos)` | Convierte minutos (número o array) a un objeto con total en horas y minutos. | `minutos` (number \| number[]) – Minutos a convertir |

---

## Ejemplos de uso

### 1. Añadir película pendiente

1. Ve a la sección **Películas por ver**.
2. Escribe el título en el campo *Añadir título...* (ej.: `el padrino`).
3. Pulsa **Añadir**.

El título se guarda en mayúscula por palabra (*El Padrino*) y se evitan duplicados.

### 2. Añadir película vista

1. Ve a la sección **Películas vistas**.
2. Escribe el título en el campo *Añadir título...*.
3. Pulsa **Añadir**.

### 3. Editar o eliminar una película

- **Editar**: Haz clic en ✏️ junto al título, escribe el nuevo nombre en el cuadro de diálogo y confirma.
- **Eliminar**: Haz clic en 🗑 y confirma en el cuadro.

### 4. Buscar en mis listas

1. En el campo *Buscar en mis listas...* escribe parte del título (ej.: `padrino`).
2. Solo se muestran las películas cuyo título contiene el texto buscado.
3. Borra el texto para ver de nuevo todas las películas.

### 5. Vaciar todas las listas

1. Pulsa el botón **Vaciar todas las listas**.
2. Confirma en el cuadro de diálogo.

Se borran pendientes y vistas en `localStorage` y en la interfaz.

### 6. Navegar por géneros

Usa los enlaces del menú lateral (**Drama**, **Animación**, **Comedia**, etc.) para ir directamente a cada sección de películas.

### 7. Modo oscuro

Pulsa el botón circular en la esquina superior derecha para alternar entre modo claro y oscuro.

---

## Uso programático de `utils.js`

```javascript
import { generarEstrellas, convertirMinutosAHoras } from "./utils.js";

// Mostrar valoración con estrellas
console.log(generarEstrellas(3));     // "★★★☆☆"
console.log(generarEstrellas(4.7));   // "★★★★★"

// Convertir duración
const { horas, minutos } = convertirMinutosAHoras(152);
console.log(`${horas}h ${minutos}min`);  // "2h 32min"

// Con un array de minutos
const total = convertirMinutosAHoras([90, 120, 45]);
console.log(total);  // { horas: 4, minutos: 15 }
```
