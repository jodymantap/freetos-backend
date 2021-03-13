const assert = require('chai').assert;
const server = require('../server');
const http    = require('http'); //Setting up the server. Http is a built-in thing in node, so you do not need to install it.

describe('server', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:5000/all', function (res) {
          assert.equal(200, res.statusCode);
        })
        done();
    });

    it('Cats should return 200', function (done) {
      http.get('http://localhost:5000/cats', function (res) {
        assert.equal(200, res.statusCode);
      })
      done();
    });

    it('People should return 200', function (done) {
      http.get('http://localhost:5000/people', function (res) {
        assert.equal(200, res.statusCode);
      })
      done();
    });

    it('Flowers should return 200', function (done) {
      http.get('http://localhost:5000/flowers', function (res) {
        assert.equal(200, res.statusCode);
      })
      done();
    });

    it('Wrong way should return 404', function (done) {
      http.get('http://localhost:5000/wrong', function (res) {
        assert.equal(404, res.statusCode);
      })
      done();
    });
});