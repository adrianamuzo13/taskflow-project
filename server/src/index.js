const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');
const taskRoutes = require('./routes/task.routes'); // Importamos las rutas

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/v1/tasks', taskRoutes);
app.get('/health', (req, res) => res.json({ status: "ok" }));

// Manejo Global de Excepciones 
app.use((err, req, res, next) => {
    // 1. Mapeo semántico de errores
    if (err.message === 'NOT_FOUND') {
        return res.status(404).json({
            error: "Recurso no encontrado",
            detail: "El ID solicitado no existe en nuestra base de datos."
        });
    }

    if (err.message === 'TITULO_REQUIRED') {
        return res.status(400).json({
            error: "Falta información",
            detail: "El título de la tarea es obligatorio."
        });
    }

    // 2. Registro de errores no controlados (Logs)
    console.error("[Server Error]:", err.stack);

    // 3. Respuesta genérica para errores 500 (Seguridad)
    res.status(500).json({
        error: "Error interno del servidor",
        message: "Algo salió mal de nuestro lado, estamos trabajando en ello."
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor TaskFlow en: http://localhost:${PORT}/api/v1/tasks`);
});