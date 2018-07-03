//Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log('nuevo ticket: Conectado');
});

socket.on('disconnect', function() {
    console.log('nuevo ticket: perdimos la conexión');
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});