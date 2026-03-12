# Flujo de trabajo con Cursor IDE
Se registrarán  los atajos de teclado usados como mas frecuencia y se documentaran 2 que hayan mejorado el codigo en Cursor (Cursor como IDE principal)

Los atajos mas usados en cursor son:
- ctrl + L -> para abrir el chat
- ctrl + Ñ -> para abrir la terminal
- ctrl + k -> edicion inline, Cursor reescribe la logica enseguida. Además, permite ver los cambios hechos por la IA y muestra los originales tambien nates de aceptar el cambio
- Ctrl + I -> Para hacer uso del composer, permite crear o modificar varios archivos  a la vez 

Uso de chat contextual con @Files para entender la lógica del proyecto sin salir del editor.


Ejemplos de mejoras:
- Con la edición inline, mejoré la captura de los titulos de las peliculas en los formularios. Seleccioné `inputPendientes.value` y le pedí: *"Limpia los inputs con .trim(), valida que no estén vacíos y transforma el nombre a Capital Case"*. Cursor automaticamnte hizo mi petición, aplicando `.trim()` y la logica de `charAt(0).toUpperCase()` + `slice(1).toLowerCase()`. Evitando que el usuario guarde nombres vacíos o mal formateados.

- Usar composer me permite poder modificar codigo sin miedo a romper la estructura y los enlaces entre archivos.
Le pedí a composer que creara `utils.js` para la funciones de estrellas y tiempo que también actualizara los `import` en app.js 
Así conseguí un codigo mas limpio y organizado, con una clara separación entre la lógica de ayuda y el manejo del DOM.


Instalación y uso de MCP (Model Context Protocol)

Es un estandar abierto que permite a los modelos de IA conectarse de forma segura a datos y herramientas locales o remotos.

He configurado con éxito un servidor MCP de tipo **Filesystem**. 
Servidor:`@modelcontextprotocol/server-filesystem`
Estado: Conectado (14 herramientas habilitadas)
Ruta autorizada: `C:\Users\adri1\Desktop\taskflow-project`

Las 5 consultas que he realizado para verificar el funcionamiento, ejecuté las siguientes acciones mediante la IA:

1. Listado de todos los archivos en la raiz del proyecto.
2. Lectura y conteo de funciones en `app.js` mediante acceso directo a disco.
3. Inspección de archivos en docs/ai no abiertos en el editor.
4. Búsqueda global de localStorage y en que líneas aparece.
5. Verificación del archivo `.gitignore` para asegurar la seguridad del repositorio.




