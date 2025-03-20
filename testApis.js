const axios = require("axios");

const API_BASE_URL = "https://apirest-nodehost.onrender.com/apiV1/events";

// Obtener todos los eventos
const getAllEvents = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        console.log("Eventos obtenidos:", response.data);
    } catch (error) {
        console.error("Error al obtener eventos:", error.response ? error.response.data : error.message);
    }
};

// Obtener un evento por ID
const getEventById = async (eventId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${eventId}`);
        console.log(`Evento con ID ${eventId}:`, response.data);
    } catch (error) {
        console.error(`Error al obtener el evento con ID ${eventId}:`, error.response ? error.response.data : error.message);
    }
};

// Crear un nuevo evento
const createEvent = async () => {
    const newEvent = {
        titulo: "Nuevo Evento de Node.js",
        fechaInicio: "2025-04-01T10:00:00Z",
        fechaFin: "2025-04-01T12:00:00Z",
        ubicacion: { ciudad: "CDMX", pais: "México" },
        capacidadMaxima: 100,
        lugaresDisponibles: 96, 
        participantes: []
    };

    try {
        const response = await axios.post(API_BASE_URL, newEvent, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Evento creado:", response.data);
        return response.data.id; // Retornamos el ID para probar los siguientes endpoints
    } catch (error) {
        console.error("Error al crear evento:", error.response ? error.response.data : error.message);
    }
};
// Actualizar un evento
const updateEvent = async (eventId) => {
    const updatedEvent = {
        titulo: "Evento actualizado desde Node.js",
        capacidadMaxima: 100
    };

    try {
        const response = await axios.put(`${API_BASE_URL}/${eventId}`, updatedEvent, {
            headers: { "Content-Type": "application/json" }
        });
        console.log("Evento actualizado:", response.data);
    } catch (error) {
        console.error(`Error al actualizar evento con ID ${eventId}:`, error.response ? error.response.data : error.message);
    }
};

// Eliminar un evento
const deleteEvent = async (eventId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/${eventId}`);
        console.log("Evento eliminado:", response.data);
    } catch (error) {
        console.error(`Error al eliminar evento con ID ${eventId}:`, error.response ? error.response.data : error.message);
    }
};

// Enviar recordatorio de un evento
const sendReminder = async (eventId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/${eventId}/recordatorio`);
        console.log(`Recordatorio enviado para el evento ${eventId}:`, response.data);
    } catch (error) {
        console.error(`Error al enviar recordatorio al evento ${eventId}:`, error.response ? error.response.data : error.message);
    }
};

// Confirmar asistencia de un participante
const confirmAttendance = async (eventId, email) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/${eventId}/confirmar/${email}`);
        console.log(`Asistencia confirmada para ${email} en el evento ${eventId}:`, response.data);
    } catch (error) {
        console.error(`Error al confirmar asistencia para ${email} en el evento ${eventId}:`, error.response ? error.response.data : error.message);
    }
};

// Probar todas las funciones
(async () => {
    console.log("=== Probando la API de eventos ===");

    await getAllEvents(); // Obtener todos los eventos

    const eventId = await createEvent(); // Crear un evento y obtener su ID
    if (!eventId) return;

    await getEventById(eventId); // Obtener evento por ID
    await updateEvent(eventId); // Actualizar evento
    await sendReminder(eventId); // Enviar recordatorio
    await confirmAttendance(eventId, "testuser@example.com"); // Confirmar asistencia
    await deleteEvent(eventId); // Eliminar evento
})();
