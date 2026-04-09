const express = require('express');
const cors = require('cors');
const path = require('path');
const taskRoutes = require('./routes/task.routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({  origin: '*', 
  methods: ['GET', 'POST', 'DELETE']
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../Client')));

app.use('/api/v1/tasks', taskRoutes);

// RUTA RAIZ 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Client/src/index.html'));
});

app.get('/health', (req, res) => res.json({ status: "ok", message: "Servidor activo" }));

//  Manejo Global de Errores
app.use((err, req, res, next) => {
    if (err.message === 'NOT_FOUND') {
        return res.status(404).json({
            error: "Recurso no encontrado",
            detail: "El ID solicitado no existe."
        });
    }
    console.error("[Server Error]:", err.stack);
    res.status(500).json({
        error: "Error interno del servidor",
        message: "Algo salió mal en el backend."
    });
});

// Exportación para Vercel
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor local en: http://localhost:${PORT}`);
    });
}