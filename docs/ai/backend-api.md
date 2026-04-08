#  Backend-API
Este documento detalla las herramientas fundamentales para el desarrollo, prueba 
y monitoreo de nuestra API REST.

**Axios**
Cliente HTTP basado en promesas para Node.js y el navegador.

*¿Por qué se usa?*
Se usa para simplificar las peticiones a la API. A diferencia de fetch, transforma automáticamente los datos a JSON, tiene mejor manejo de errores y permite configurar interceptores para añadir tokens de seguridad globalmente.

**Postman**
Plataforma de colaboración para el desarrollo y prueba de APIs.

*¿Por qué se usa?*
Esencial para probar los endpoints (GET, POST, DELETE) antes de programar el frontend. Permite simular diferentes escenarios, guardar colecciones de pruebas y verificar que el servidor responda correctamente.

**Sentry**
Plataforma de monitoreo de errores y rendimiento (Application Monitoring).

*¿Por qué se usa?*
Se usa para capturar errores en tiempo real una vez que la aplicación está publicada. Si el servidor falla, Sentry envía una notificación detallando qué línea de código falló y bajo qué condiciones, permitiendo arreglar fallos antes de que los usuarios los reporten.

**Swagger**
Suite de herramientas para el diseño y documentación de APIs (OpenAPI).

*¿Por qué se usa?*
Sirve para generar una página web interactiva donde cualquier desarrollador puede ver qué rutas existen, qué datos debe enviar y probar la API directamente desde el navegador sin escribir código. Es el estándar de oro para documentación técnica.