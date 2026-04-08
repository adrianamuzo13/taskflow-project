let tasks = [];

const taskService = {
    obtenerTodas: () => {
        return tasks;
    },

    crearTarea: (titulo) => {
        const nuevaTarea = {
            id: Date.now(), // ID único basado en tiempo
            titulo: titulo,
            completada: false
        };
        tasks.push(nuevaTarea);
        return nuevaTarea;
    },

    eliminarTarea: (id) => {
        const idNum = parseInt(id);
        const index = tasks.findIndex(t => t.id === idNum);

        // Si no existe, lanzamos el error que pide el ejercicio
        if (index === -1) {
            throw new Error('NOT_FOUND');
        }

        tasks.splice(index, 1);
        return true;
    }
};

module.exports = taskService;