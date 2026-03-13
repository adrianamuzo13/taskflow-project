# 🏆 TaskFlow – Gestión de Películas Premios Oscar

Aplicación web interactiva desarrollada como proyecto de prácticas para la gestión y organización de títulos cinematográficos premiados.

El proyecto combina una interfaz temática inspirada en la estética de la Academia con un gestor de listas dinámico, utilizando **JavaScript Vanilla** y **Tailwind CSS**, con persistencia de datos mediante **LocalStorage**.

👉 **[Ver aplicación desplegada](https://taskflow-project-176y.vercel.app)**

---

## Tecnologías utilizadas

- **HTML5**: Estructura semántica y maquetación.
- **Tailwind CSS**: Framework de estilos para un diseño responsive y moderno.
- **JavaScript (ES6+)**: Lógica de la aplicación, manipulación del DOM y gestión de eventos.
- **LocalStorage**: API de persistencia para mantener los datos en el navegador.
- **Git & GitHub**: Control de versiones y alojamiento del código.

---

## 🎯 Funcionalidades principales

- **Gestión de listas**: Añadir títulos a las categorías de "Pendientes" y "Vistas".
- **Edición y borrado**: Modificación de títulos existentes mediante cuadros de diálogo y eliminación con confirmación de seguridad.
- **Buscador en tiempo real**: Filtrado dinámico de ambas listas de forma simultánea según el texto introducido.
- **Sistema de formateo**: Conversión automática de títulos a Capital Case para mantener la coherencia visual.
- **Modo oscuro**: Alternancia entre tema claro y oscuro con persistencia de preferencia.
- **Persistencia de datos**: Guardado automático de las listas para que la información no se pierda al recargar la página.
- **Limpieza global**: Botón de vaciado de seguridad para resetear todas las listas del usuario.

---

## 📂 Estructura del proyecto

| Archivo     | Descripción                                                       |
|------------|-------------------------------------------------------------------|
| `index.html` | Interfaz principal y estructura del tablero.                     |
| `app.js`     | Lógica central (gestión de tareas, filtros y eventos).           |
| `utils.js`   | Funciones de utilidad (generación de estrellas, conversiones).   |
| `input.css`  | Archivo de entrada con la configuración temática de Tailwind.    |
| `output.css` | CSS compilado y optimizado para producción.                      |

---

## 📚 Documentación de funciones

El código ha sido documentado siguiendo el estándar JSDoc para facilitar su mantenimiento.

### `toCapitalCase(str)`

Recibe una cadena de texto y la devuelve formateada (ej: `"el padrino"` → `"El Padrino"`). Elimina espacios adicionales y normaliza las mayúsculas.

### `filtrarElementos(texto)`

Función encargada de la búsqueda dinámica. Recorre todos los elementos `<li>` y aplica la clase `hidden` a aquellos que no coincidan con el criterio de búsqueda, comparando el contenido en minúsculas para mayor precisión.

### `mostrarPendientes()` / `mostrarVistas()`

Actualizan los contadores de la interfaz, mostrando el número total de películas en cada sección y asegurando que las estadísticas reflejen el estado actual del LocalStorage.

---

## 🧪 Ejemplos de uso

### Añadir una película

Escribe el nombre de la película en el campo correspondiente (Pendientes o Vistas) y pulsa el botón **Añadir**. El sistema aplicará el formato correcto y guardará el título automáticamente.

### Editar o marcar como vista

Para cambiar el nombre de una película, pulsa el botón **Editar** (icono de lápiz). Si quieres mover una película de lista, el flujo de la aplicación permite gestionar ambos inventarios de forma independiente.

### Filtrar la colección

Utiliza la barra de búsqueda superior. A medida que escribas (por ejemplo: "Oscar"), la interfaz ocultará automáticamente las películas que no contengan esa palabra en su título.

---

## 🧠 Desarrollo asistido por IA

Durante la creación de este proyecto se integró el uso de **Inteligencia Artificial (IA)** mediante Cursor para:

- Generar una estructura inicial de la documentación técnica.
- Refactorizar funciones de filtrado para mejorar su eficiencia.
- Sugerir mejoras en el sistema de diseño mediante clases de Tailwind.

Toda la documentación y el código sugerido fueron revisados y corregidos manualmente, adaptándolos a los requisitos específicos de la práctica y garantizando su correcto funcionamiento en el entorno del navegador.

---

## ▶️ Instalación y ejecución

1. Clona el repositorio en tu equipo.
2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

3. Para compilar Tailwind en tiempo real:

   ```bash
   npm run dev
   ```

4. Abre `index.html` en tu navegador preferido.
