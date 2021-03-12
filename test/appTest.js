const assert = require('chai').assert;
const server = require('../server');
const http    = require('http'); //Setting up the server. Http is a built-in thing in node, so you do not need to install it.

describe('server', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:5000/all', function (res) {
          assert.equal(200, res.statusCode);
          done();
        });
    });
});