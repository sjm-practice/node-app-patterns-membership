var Registration = require('../lib/registration');

describe('Registration', function () {
  
  // happy path
  describe('a valid application', function () {
    var regResult = {};

    before(function () {
      regResult = Registration.applyForMembership({
        email: 'steve@smarsh.com',
        password: 'abc1234',
        confirm: 'abc1234'
      });
    });

    it('is successful', function () {
      regResult.success.should.equal(true);
    });
    it('creates a user');
    it('creates a log entry'); 
    it('sets the user status to approved');
    it('offers a welcome message');
  });

  describe('an empty or null email', function () {
    it('is not successful');
    it('tells user that email is required');
  });

  describe('empty or null password', function () {
    it('is not successful');
    it('tells user that password is required');      
  });

  describe('password and confirm password mismatch', function() {
    it('is not successful');
    it('tells user that passwords do not match');
  });

  describe('email already exists', function() {
    it('is not successful');
    it('tells user that email already exists');
  });
});