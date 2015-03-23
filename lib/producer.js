/**
 * Producer 
 *
 * @author João Fontes Oliveira <@Joao_Oliveira>
 * @March 2015
 *
 */
'use strict';

var net = require('net');

// Create a socket that connects to the consumer
var socket = new net.Socket();

setInterval(function() {
	socket.connect(8084, 'localhost', function () {
		var question = Math.floor((Math.random() * 100) + 1) + '+' + Math.floor((Math.random() * 100) + 1) + '=';
	    console.log('Producer says: connection successful. Asking for ' + question);
	    socket.write(
	    	JSON.stringify(
	    	    { expression: question}
	    	)
	    );
	});
},100);



// Let's handle the data we get from the server
socket.on('data', function (data) {
    data = JSON.parse(data);
    console.log('Producer says: got answer %s', data.response);
    console.log('');
    // Close the connection
    socket.end();
});