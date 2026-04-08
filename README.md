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

```
taskflow-project/
├── client/                # Frontend (Interfaz de usuario)
│   ├── js/
│   │   └── app.js         # Lógica principal y renderizado del DOM
│   ├── src/api/
│   │   └── client.js      # Cliente API (Fetch) para comunicación con el backend
│   └── index.html         # Estructura principal con estados de red
├── server/                # Backend (Servidor Node.js)
│   ├── config/            # Variables de entorno y configuración
│   ├── controllers/       # Lógica de negocio (task.controller.js)
│   ├── routes/            # Definición de Endpoints (task.routes.js)
│   ├── services/          # Manipulación de datos (capa de persistencia)
│   └── index.js           # Punto de entrada del servidor
└── utils.js               # Funciones auxiliares globales
```
---

## 📚 Documentación de funciones

El código ha sido documentado siguiendo el estándar JSDoc para facilitar su mantenimiento.

### `toCapitalCase(str)`

Recibe una cadena de texto y la devuelve formateada (ej: `"el padrino"` → `"El Padrino"`). Elimina espacios adicionales y normaliza las mayúsculas.

### `filtrarElementos(texto)`

Función encargada de la búsqueda dinámica. Recorre todos los elementos `<li>` y aplica la clase `hidden` a aquellos que no coincidan con el criterio de búsqueda, comparando el contenido en minúsculas para mayor precisión.

---

## 🧪 Ejemplos de uso

### Marcar como vista

Localiza una película en la galería principal y pulsa el botón **"Marcar como vista"**. La tarjeta se moverá automáticamente a la sección inferior.

### Búsqueda inteligente

A medida que escribes (ej: "Joker" o "Drama"), la aplicación filtrará en tiempo real tanto la galería principal como tu lista de películas vistas y el muro de curiosidades.

### Muro de Curiosidades

En la sección inferior, escribe un dato interesante sobre el cine en el campo de texto. Pulsa **"Compartir"** y tu nota aparecerá con un formato de tarjeta elegante y la fecha de publicación.

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

## ⚙️ Middleware y Funcionamiento Técnico

El backend utiliza Middlewares de Express para gestionar el flujo de las peticiones (Request-Response Cycle).

**1. Middleware de Análisis (JSON Parsing)**
Se utiliza express.json() para interceptar las peticiones entrantes. Su función es transformar el cuerpo de la petición (Payload) de texto plano a un objeto JavaScript accesible mediante req.body.

**2. Middleware de CORS**
El middleware cors() permite que el frontend (ejecutándose normalmente en el puerto 5500) pueda realizar peticiones al backend (puerto 3000) de forma segura, evitando bloqueos por políticas de seguridad del navegador.

**3. Manejo Global de Excepciones**
Se ha implementado un middleware de error de cuatro parámetros (err, req, res, next). Este actúa como un embudo que captura cualquier fallo en los controladores, devolviendo respuestas semánticas (400, 404 o 500) en lugar de exponer el stack trace al cliente, mejorando la seguridad y la experiencia de usuario.

## 📡 API REST: Guía de Interacción
La API se expone en el punto de entrada base: http://localhost:3000/api/v1/tasks.

**Ejemplo de uso con fetch (Frontend)**

**📥 Obtener todos los aportes**

const response = await fetch('http://localhost:3000/api/v1/tasks');
const data = await response.json(); // Retorna un Array de objetos con 'titulo'

**📤 Publicar una nueva curiosidad**

await fetch('http://localhost:3000/api/v1/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo: "El Padrino ganó 3 Oscars" }) // Validación: mín. 3 caracteres
});


**🗑️ Eliminar un aporte**


await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
    method: 'DELETE'
});
