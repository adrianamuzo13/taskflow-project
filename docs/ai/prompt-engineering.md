# Prompts Engineering
Se guardaran los prompts más útiles que se usen para mejorar el código y el porqué de su funcionalidad

### 1.Rol Desarrollador Senior
    "Actúa como un programador senior que sabe mucho de Clean Code. Mira mi archivo app.js y dime que estoy haciendo mal o qué se podría mejorar para que sea más profesional"

Funciona porque se le indica que a la IA quien es, dará soluciones genericas/ simples. AL especificar que es "senior", cumple y ayuda a organizar mejor la funciones y de forma exigente

### 2. Con ejemplos (Few-shot-prompting)
    "Quiero que mis mensajes de error tengan este estilo: '🚫 [ERROR]: Mensaje'. Siguiendo ese formato, hazme uno para cuando el buscador no encuentra nada y otro para cuando borro una pelicula"

En vez de explicarle que reglas seguir, copia el formato exacto y así todo queda igual de ordenado


### 3. Razonamiento paso a paso
    "Dime paso a paso cómo harías un buscador que ignore los acentos y las mayúsculas. No me des el código todavía, solo explícame la lógica"

Se asegura de que la IA haya entendido lo que quiero antes de que me escriba el código que a lo mejor pueda dar fallos posteriormente

### 4. Usando restricciones claras
    "Arregla esta función pero NO uses innerHTML. Usa solo createElement"

Se obliga a la IA a no usar el camino fácil y a usar métodos más seguros para el proyecto

### 5. Rol Profesor
    "Actúa como un profesor y explícame de forma sencilla qué hace esta línea de código que me acabas de dar, que no la entiendo bien"

Ayuda a no solo "copiar y pegar", sino a entender de verdad qué está pasando en mi proyecto

### 6. Limpieza de código
    "Esta función ha quedado muy larga y es un lío. Divídela en funciones más pequeñas que se entiendan mejor"

Evita que el código sea largo y sin sentido para que sea mucho más fácil de leer

### 7. Buscar fallos
    "Imagina que eres un tester y tu objetivo es romper mi aplicación. Que fallos ves en mi formulario de añadir películas?"

Me ayuda a encontrar errores que a mí se me pasan, compor ejemplo que ocurriría si le doy al botón con el campo vacío


### 8.
    "Mira lo que he cambiado y hazme un mensaje de commit corto y profesional que empiece por 'feat:' o 'fix:'"

Hace que mi historial de GitHub parezca el de un profesional y esté todo super ordenado.

### 9. Ayuda con los estilos
    "Quiero que el diseño sea moderno y limpio. Ponle un poco de sombra a las tarjetas y que los colores no cansen la vista"

"Quiero que el diseño sea moderno y limpio. Ponerle un poco de sombra a las tarjetas y que los colores no cansen la vista"


### 10. Usar los archivos reales
        "Usa MCP para leer mi index.html y asegúrate de que todos los nombres de los IDs que estoy usando en el JS son correctos"

Ideal porque la IA revisa mis archivos y me avisa si he escrito mal un nombre, evitando pasar mucho tiempo buscando errores
