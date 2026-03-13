# Comparacion asistentes IA
Se comprarán las diferencias, ventajas y desvenntajas de usar herramientas como
ChatGPT, Claude y GitHub Copilot

Se le ha pedido a ChatGPT y a Claude que expliquen 3 conceptos: DOM, Event Loop y Hosting, estos son los resultados:

"Estoy trabajando en un proyecto de lista de películas (TaskFlow). Por favor, explícame estos 3 conceptos técnicos de JavaScript de forma clara, con profundidad técnica y un ejemplo de código para cada uno: 1. DOM, 2. Event Loop y 3. Hoisting"

<<<<<<< HEAD
CLARIDAD
    ChatGPT: Desarrollo más pedagogico y visual, muestra ejemplos con esquemas simples que facilitan la compresión. Pra alguien que está aprendiendo es ideal.
=======
**CLARIDAD**
ChatGPT: Desarrollo más pedagogico y visual, muestra ejemplos con esquemas simples que facilitan la compresión. Pra alguien que está aprendiendo es ideal.
Claude: Explicación técnica y clara. Los ejemplos son estructurados y usa comentarios para explicar la teoria. En la explicación usa lenguaje tecnico dando por hecho que ya hay conocimientos previos.
>>>>>>> b6dc70a6729c16876c723112f9b85e832c3a4803

**PROFUNDIDAD**
ChatGPT: No profundiza tanto como lo hace Claude. Explica bien pero solo lo "básico", no profundiza mucho el efcto que tiene el codigo.
Claude: Profundiza mucho en los ejemplos. En el DOM , introduce "Reflow", recálculo del diseño. En Event Loop, explica diferencia entre dos conceptos que la otra IA no. Y con el Hoisting, explica el Temporal Dead ZOne de forma más tecnica.

<<<<<<< HEAD
PROFUNDIDAD
    ChatGPT: No profundiza tanto como lo hace Claude. Explica bien pero solo lo "básico", no profundiza mucho el efcto que tiene el codigo.
    
    Claude: Profundiza mucho en los ejemplos. En el DOM , introduce "Reflow", recálculo del diseño. En Event Loop, explica diferencia entre dos conceptos que la otra IA no. Y con el Hoisting, explica el Temporal Dead ZOne de forma más tecnica.

EJEMPLOS
    ChatGPT: Los ejemplos son genericos. Faciles de seguir pero no estan relacionados con un proyecto real, sirven para entender la teoría.

    Claude: Usó nombres de variables que podrían aparecer en mi proyecto para poder asi entenderlos dentro del contexto e incluso dio ejemplos para mejorar el codigo

Se han escrito 3 funciones JavaScript con errores intencionados y se les ha pedido que detecten y expliquen el bug.

"Tengo estas 3 funciones para mi proyecto pero no funcionan como deberían. Podrías detectar el error en cada una, explicar por qué sucede y darme la solución corregida?
1.
function agregarPelicula() {
=======
**EJEMPLOS**
ChatGPT: Los ejemplos son genericos. Faciles de seguir pero no estan relacionados con un proyecto real, sirven para entender la teoría.
Claude: Usó nombres de variables que podrían aparecer en mi proyecto para poder asi entenderlos dentro del contexto e incluso dio ejemplos para mejorar el codigo

Se han escrito 3 funciones JavaScript con errores intencionados y se les ha pedido que detecten y expliquen el bug.

--> Tengo estas 3 funciones para mi proyecto pero no funcionan como deberían. Podrías detectar el error en cada una, explicar por qué sucede y darme la solución corregida?

1. function agregarPelicula() {
>>>>>>> b6dc70a6729c16876c723112f9b85e832c3a4803
  console.log("Añadiendo:", nombrePeli);
  let nombrePeli = "Gladiador";
}
agregarPelicula();

<<<<<<< HEAD
2. 
function limpiarLista() {
=======
2. function limpiarLista() {
>>>>>>> b6dc70a6729c16876c723112f9b85e832c3a4803
  const items = document.querySelectorAll("li");
  for (var i = 0; i < items.length; i++) {
    // Intentando borrar elementos uno por uno
    items[i].remove();
    console.log("Eliminado el item nro: " + i);
  }
}
3. const app = {
  usuario: "Adriana",
  saludar: function() {
    setTimeout(function() {
      console.log("Hola, soy " + this.usuario);
    }, 1000);
  }
};
app.saludar();

<<<<<<< HEAD
Dectección bugs:
1. Ambos identificaron el problema de la Temporal Dead Zone (TDZ) con let

2. ChatGPT sugirió que el problema era modificar el DOM mientras lo recorres, pero Claude explicó la lógica de por qué falla: al borrar el elemento [0], los demás se desplazan y el bucle se salta al siguiente.

3. Ambos sugirieron la Arrow Function pero Claude incluyó una tercera opción: .bind(this)
=======
** Detección de bugs **
1. Ambos identificaron el problema de la Temporal Dead Zone (TDZ) con let.

2. ChatGPT sugirió que el problema era modificar el DOM mientras lo recorres, en cambio, Claude explicó la lógica de por qué falla: al borrar el elemento [0], los demás se desplazan y el bucle se salta al siguiente.

3. Ambos sugirieron la Arrow Function pero Claude incluyó una tercera opción: .bind(this)


>>>>>>> b6dc70a6729c16876c723112f9b85e832c3a4803

# Generación de Código desde Lenguaje Natural
" Necesito que generes la implementación en JavaScript de estas tres funciones para mi proyecto de películas:
1. Una función que genere estrellas del 1 al 5 para valorar una película.
2. Una función que reciba una lista de películas y un género y devuelva solo las que coinciden independientemente si escribes en mayusculas o minusculas
3. Otra función que reciba la duración total en minutos de varias películas y me diga cuántas horas y minutos son en total "

ChatGPT:Da oluciones rápidas y fáciles de entender. El código es ideal para prototipos rápidos, aunque carece de validaciones profundas (como qué pasa si recibes un número fuera de rango)

Claude:Demostró un nivel más alto. Utilizó métodos moderno, incluyó limpieza de datos (`.trim()`) y estructuró las respuestas como objetos reutilizables en lugar de simples textos.

# CONCLUSION¿?
ChatGPT es una herramienta adecuada como apoyo pedagogico para entender un nuevo concepto de forma sencilla.
En cambio, Claude es ideal para el dearrollo del proyecto debido a su precision técnica, metodos modernos y ademas grantiza un codigo mas profesional.

