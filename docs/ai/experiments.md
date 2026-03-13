# Experimentos con IA

Se compararan el tiempo invertido, calidad del código y comprensión del problema entre la resolución de tres problemas sin usar la IA y con su uso.

**Problemas de programación generales**

1. Detector de Palíndromos

palabras palindromo, una palabra que se lee igual al derecho que al revés
**Sin usar IA**
Tiempo aproximado: 12 minutos
Resultado: Funciona sin problema pero se me ha olvidado detectar las mayusculas y los espacios.

**Usando IA**
Tiempo aproximado : 1 minuto

Resultado: La IA realizo una funcion que automaticamente limpia signos de puntuación y espacios, haciendola asi más profesional.

1. El reto FizzBuzz

Imprimir números del 1 al 15 reemplazando múltiplos de 3 por "Fizz" y de 5 por "Buzz".

**Sin usar IA**
Tiempo aproximado: 15 min.

Resultado: Logré resolverlo usando varios if / else if, pero perdí tiempo asegurándome de que en concreto el número 15, siendo múltiplo de ambos, se comprobara primero para no saltarse la lógica

**Usando IA**
Tiempo aproximado: 1 min y poco

Resultado: La IA dió una solución muy estructurada y me explicó la importancia del orden de las condiciones lógicas

1. Filtrar números impares

De una lista de números, extraer solo los que no son pares.

**Sin usar IA**
Tiempo aproximado: 12 min

Resultado: Utilicé un bucle for  y un array vacío para ir guardando los resultados. El código es largo pero funciona correctamente

**Usando IA**
Tiempo aproximado: 1 minuto.

Resultado: La IA utilizó el método .filter(), lo que redujo todo mi código de 6 líneas a una sola línea muy fácil de leer.

**Tareas relacionadas con tu proyecto**

4. Formateo de Títulos (Capital Case)
Convertir los títulos introducidos, ej: "el caballero oscuro" a un formato profesional "El Caballero Oscuro".

**Sin usar IA**
Tiempo aproximado: 15 minutos.

Resultado: Logré separar el texto por espacios y poner la primera letra en mayúscula, pero la función fallaba si el usuario escribía varios espacios seguidos o símbolos extraños.

**Usando IA**
Tiempo aproximado: 2 minutos.

Resultado: La IA utilizó .map() y .filter(Boolean) para limpiar el array de palabras vacías, creando un código mucho más resistente a errores de escritura del usuario

5.Validación de Títulos Duplicados
Evitar que una película se añada dos veces a la misma lista, ignorando si se escribe en mayúsculas o minúsculas.

**Sin usar IA**
Tiempo aproximado: 10 minutos.

Resultado: Implementé un bucle for para recorrer el array de películas existentes y comparar una por una. Funcionaba, pero el código quedaba muy largo dentro del evento del formulario.

**Usando IA**
Tiempo aproximado: 1 minuto.

Resultado: La IA me enseñó a usar el método .some(), que es mejor y más específico para este tipo de validaciones


6. Filtro de Búsqueda en tiempo real
Ocultar o mostrar las películas de la lista según lo que el usuario escribe en el buscador.

**Sin usar IA**
Tiempo aproximado: 20 minutos.

Resultado: Intenté manipular el CSS (display: none) directamente en cada elemento. Me costó mucho acceder al texto correcto dentro del li sin borrar accidentalmente los botones de editar o borrar.

**Usando IA**

Tiempo aproximado: 3 minutos.

Resultado: La IA sugirió una lógica basada en clases CSS y el método .includes(). También me explicó cómo usar firstChild.textContent para leer solo el nombre de la película y no el texto de los botones
