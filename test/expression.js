describe('consumer', function () {

	var net = require('net'),
		socket = new net.Socket();

	describe('Test consumer heartbeat', function () {
	    it('should return 200', function (done) {
	      socket.connect(8084, 'localhost', function (res) {
	      	res.statusCode.should.equal(200);
	        done();
	      });
	    });
  	});

});
