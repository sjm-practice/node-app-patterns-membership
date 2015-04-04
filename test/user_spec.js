var should = require('should'),
    User = require('../models/user');
    

describe('User', function () {
  
  describe('defaults', function () {
    var user = {};

    before(function () {
      user = new User({email: "steve@smarsh.com"});
    });

    it('email is "steve@smarsh.com"');
    it('has an authentication token');
    it('has a pending status');
    it('has a created date');
    it('has a signInCount of 0');
    it('has a lastLogin');
    it('has a currentLogin');
    it('has a sessionToken');
    it('has a reminderToken');
    it('has a reminder sent date');
  });
});