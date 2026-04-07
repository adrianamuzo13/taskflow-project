/**
 * Genera una cadena de estrellas HTML según una puntuación
 * @param {number} puntuacion - Número de estrellas (1-5)
 * @returns {string} - Cadena de texto con estrellas doradas y grises
 */
export const generarEstrellas = (puntuacion) => {
    let estrellas = "";
    for (let i = 1; i <= 5; i++) {
        estrellas += i <= puntuacion ? "★" : "☆";
    }
    return estrellas;
};