// Genera una representación de estrellas (1 a 5) para valorar una película.
// Devuelve una cadena como "★★★☆☆".
export function generarEstrellas(valoracion) {
    const numero = Number(valoracion);

    if (!Number.isFinite(numero)) {
        return "☆☆☆☆☆";
    }

    const valorNormalizado = Math.min(Math.max(Math.round(numero), 1), 5);
    const estrellasLlenas = "★".repeat(valorNormalizado);
    const estrellasVacias = "☆".repeat(5 - valorNormalizado);

    return estrellasLlenas + estrellasVacias;
}

// Recibe un número o una lista de minutos de varias películas
// y devuelve un objeto con el total en horas y minutos.
export function convertirMinutosAHoras(minutos) {
    let totalMinutos = 0;

    if (Array.isArray(minutos)) {
        totalMinutos = minutos.reduce((acumulado, actual) => {
            const valor = Number(actual);
            return Number.isFinite(valor) ? acumulado + valor : acumulado;
        }, 0);
    } else {
        const valor = Number(minutos);
        totalMinutos = Number.isFinite(valor) ? valor : 0;
    }

    const horas = Math.floor(totalMinutos / 60);
    const minutosRestantes = totalMinutos % 60;

    return { horas, minutos: minutosRestantes };
}

