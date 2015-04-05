var should = require('should'),
    User = require('../models/user');


describe('User', function () {
  
  describe('create object (new)', function () {
    var user = {};

    before(function () {
      user = new User({email: 'steve@smarsh.com'});
    });

    it('email is the passed in value', function () {
      user.email.should.equal('steve@smarsh.com');
    });
    it('has an authentication token', function () {
      user.authenticationToken.should.be.defined;
    });
    it('has a pending status', function () {
      user.status.should.equal('pending');
    });
    it('has a created date', function () {
      user.createdAt.should.be.defined;
    });
    it('has a signInCount of 0', function () {
      user.signInCount.should.equal(0);
    });
    it('has a lastLoginAt date', function () {
      user.lastLoginAt.should.be.defined;
    });
    it('has a currentLoginAt', function () {
      user.currentLoginAt.should.be.defined;
    });
    // remaining defined fields of user are not used, and null, no need to test
  });
});