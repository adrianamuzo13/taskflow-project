const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Forzamos el puerto si dotenv falla (solución de emergencia)
const PORT = process.env.PORT || 3000;

// Si por alguna razón extrema ni el fallback funciona:
if (!PORT) {
    throw new Error('❌ El puerto no está definido.');
}

console.log(`✅ Configuración cargada. Puerto detectado: ${PORT}`);

module.exports = {
    PORT
};