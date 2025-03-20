Este proyecto es una demostración del consumo de la API REST de eventos hecha por el equipo 5. 
Utiliza la librería axios para realizar solicitudes HTTP y está diseñado para ejecutarse en un entorno Node.js.

Descripción
El programa incluye métodos para interactuar con la API de eventos alojada en https://apirest-nodehost.onrender.com/apiV1/events. Cada método permite realizar operaciones como obtener eventos, registrar nuevos, actualizar información, eliminar eventos, gestionar participantes y enviar recordatorios.

Funcionalidades

1. Obtener todos los eventos: Recupera la lista completa de eventos registrados en la API.
2. Obtener un evento por ID: Recupera la información de un evento específico.
3. Crear un nuevo evento: Envía datos para registrar un nuevo evento en la API.
4. Actualizar un evento (PUT): Modifica la información de un evento ya existente.
5. Eliminar un evento: Elimina un evento específico de la base de datos.
6. Confirmar asistencia a un evento: Marca a un participante como confirmado en un evento.
7. Enviar recordatorio de un evento: Envía una notificación a los asistentes del evento.

Requisitos:

Node.js: Asegúrate de tener instalado Node.js en tu sistema.
Librería Axios: Este programa utiliza axios para realizar solicitudes HTTP. 

Instálalo ejecutando:

npm install axios

correr el programa:

npm install

node testApis.js


