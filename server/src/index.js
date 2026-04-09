const express = require('express');
const path = require('path');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(cors());
app.use(express.json());

const clientPath = path.join(process.cwd(), 'Client');

app.use(express.static(clientPath));

app.use('/api/v1/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'src/index.html'), (err) => {
        if (err) {
            console.error("Error al enviar index.html:", err);
            res.status(500).send("No se pudo cargar el frontend. Verifica las rutas del servidor.");
        }
    });
});

module.exports = app;