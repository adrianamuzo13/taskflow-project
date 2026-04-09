const express = require('express');
const path = require('path');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(cors());
app.use(express.json());

const clientPath = path.join(__dirname, '../../client');

app.use(express.static(clientPath));

app.use('/api/v1/tasks', taskRoutes);

app.get('/', (req, res) => {
    const indexPath = path.join(clientPath, 'index.html');
    
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error("Error enviando index.html:", err);
            res.status(500).send(`Error: No se encontró index.html. El servidor buscó en: ${indexPath}`);
        }
    });
});

module.exports = app;