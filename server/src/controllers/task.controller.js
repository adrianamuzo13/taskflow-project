const taskService = require('../services/task.service');

const taskController = {
    getAll: (req, res, next) => {
        try {
            const tasks = taskService.obtenerTodas();
            res.json(tasks);
        } catch (error) {
            next(error); // Envía el error al middleware global
        }
    },

    create: (req, res, next) => {
        try {
            const { titulo } = req.body;

            // VALIDACIÓN DEFENSIVA (Fase B/C)
            // Si no hay título o es muy corto, lanzamos el error 400 AQUÍ
            if (!titulo || titulo.trim().length < 3) {
                return res.status(400).json({ 
                    error: "El título es obligatorio y debe tener al menos 3 caracteres." 
                });
            }

            const nueva = taskService.crearTarea(titulo); 
            res.status(201).json(nueva);
        } catch (error) {
            next(error);
        }
    },

    remove: (req, res, next) => {
        try {
            const { id } = req.params;
            taskService.eliminarTarea(id);
            res.status(204).send();
        } catch (error) {
            next(error); // Si el servicio lanza 'NOT_FOUND', el middleware lo capturará
        }
    }
};

module.exports = taskController;