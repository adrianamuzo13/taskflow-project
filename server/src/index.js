const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'DELETE']
}));
app.use(express.json());

app.use('/api/v1/tasks', taskRoutes);

// Ruta de prueba para verificar que el servidor vive
app.get('/health', (req, res) => res.json({ status: "ok", message: "Servidor activo" }));

//Para evitar el 404 inicial
app.get('/', (req, res) => res.send('🚀 API de TaskFlow funcionando correctamente'));

// Manejo Global de Errores
app.use((err, req, res, next) => {
    if (err.message === 'NOT_FOUND') {
        return res.status(404).json({
            error: "Recurso no encontrado",
            detail: "El ID solicitado no existe."
        });
    }

    if (err.message === 'TITULO_REQUIRED') {
        return res.status(400).json({
            error: "Falta información",
            detail: "El título es obligatorio."
        });
    }

    console.error("[Server Error]:", err.stack);
    res.status(500).json({
        error: "Error interno del servidor",
        message: "Algo salió mal en el backend."
    });
});

// Solo arranca el servidor con listen si NO estamos en Vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor local en: http://localhost:${PORT}`);
    });
}

module.exports = app;