/**
 * Unit testing 
 *
 * @author João Fontes Oliveira <@Joao_Oliveira>
 * @March 2015
 *
 */



describe('Consumer test', function () {

	var consumer = require('../lib/consumer.js');
	var net = require('net');
	var socket = new net.Socket();
	var assert = require("assert")

	after(function () {
	  consumer.close();
	});

	it('Should connect socket', function (done) {
		socket.connect(8084, 'localhost', function () {
			socket.end();
			done();
		});
	});

	it('Should return expression result', function (done) {
		socket.connect(8084, 'localhost', function () {
			var question = Math.floor((Math.random() * 100) + 1) + '+' + Math.floor((Math.random() * 100) + 1) + '=';
			socket.write(
				JSON.stringify(
				    { expression: question}
				)
			);
			socket.on('data', function (data) {
				data = JSON.parse(data);
				answer = data.response;
				question = eval(question.replace('=',''));
				assert.equal(question, answer);
				console.log("Got answer " + answer + " matching expected " + question);
			    socket.end();
			    done();
			});
			
		});

	});

});