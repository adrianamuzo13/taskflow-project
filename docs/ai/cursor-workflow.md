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