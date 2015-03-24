/**
 * Unit testing 
 *
 * @author João Fontes Oliveira <@Joao_Oliveira>
 * @March 2015
 *
 */

// var consumer = require('../lib/consumer');

describe('server response', function () {
  // before(function () {
  //   consumer.listen(8084);
  // });

  // after(function () {
  //   consumer.close();
  // });

  it('should return ready message', function (done) {
    request.get('http://localhost:8084', function (err, res, body){
      expect(res.body).to.equal('Consumer says: Bring on the expressions!');
      done();
    });
  });

});