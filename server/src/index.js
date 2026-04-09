const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'DELETE'] }));
app.use(express.json());

// Tus rutas
app.use('/api/v1/tasks', taskRoutes);

// Rutas de verificación
app.get('/health', (req, res) => res.json({ status: "ok", folder: "server/src" }));
app.get('/', (req, res) => res.send('🚀 Servidor TaskFlow en server/src funcionando'));

// Exportación para Vercel (CRUCIAL)
module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Servidor local en puerto ${PORT}`));
}