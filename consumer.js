/**
 * Consumer 
 *
 * @author João Fontes Oliveira <@Joao_Oliveira>
 * @March 2015
 *
 */
'use strict';

const net = require('net');

// Create the consumer
var consumer = net.createServer(function(conn) {
    console.log('Consumer says: someone is calling...');

    // Handle data from producer
    conn.on('data', function(data) {
        data = JSON.parse(data);
        console.log('Consumer says: someone is asking for response to: %s', data.expression);

        // Let's response with a hello message
        conn.write(
            JSON.stringify(
                { response:  eval(data.expression.replace('=',''))}
            )
        );
    });

    // If connection is closed
    conn.on('end', function() {
        // console.log('Consumer says: Bye bye :(');
        console.log('');
    });
});

// Listen for connections
consumer.listen(8084, 'localhost', function () {
    console.log('Consumer says: Bring on the expressions!');
});