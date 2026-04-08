const API_URL = 'http://localhost:3000/api/v1/tasks'; 

export const taskAPI = {
    // Obtener todas las curiosidades
    getAll: async () => {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al obtener datos');
        return await response.json();
    },

    // Crear una nueva curiosidad
    create: async (titulo) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo })
        });
        if (!response.ok) throw new Error('Error al publicar');
        return await response.json();
    },

    // Eliminar una curiosidad 
    delete: async (id) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Error al eliminar');
        return true;
    }
};