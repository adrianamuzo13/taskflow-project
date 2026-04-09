const express = require('express');
const cors = require('cors');
const path = require('path');
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'DELETE'] }));
app.use(express.json());

// Frontend
app.use(express.static(path.join(__dirname, '../../Client')));
app.use('/api/v1/tasks', taskRoutes);

app.get('/health', (req, res) => res.json({ status: "ok", folder: "server/src" }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Client/src/index.html'));
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error("[Server Error]:", err.stack);
    res.status(500).json({ error: "Error interno del servidor" });
});

// Exportación para Vercel
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Servidor local en puerto ${PORT}`));
}