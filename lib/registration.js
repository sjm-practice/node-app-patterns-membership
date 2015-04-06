var User = require('../models/user'),
    MemberApplication = require('../models/member_app');

var RegResult = function () {
  var result = {
    success: false,
    message: null,
    user: null
  };

  return result;
};

var validateInputs = function (memberApp) {
  
  // make sure there is an email and password
  if (!memberApp.email || !memberApp.password) {
    memberApp.setInvalid('Email and password are required');
  } else if (memberApp.password !== memberApp.confirm) {
    memberApp.setInvalid('Passwords do not match');
  } else {
    memberApp.validate();
  }
};

exports.applyForMembership = function (args) {
  var regResult = new RegResult(),
      memberApp = new MemberApplication(args);

  // validate inputs
  validateInputs(memberApp);
  // validate pw and email
  // check if email exists
  // create new user// hash teh password
  // create a log entry
  if (memberApp.isValid()) {
    regResult.success = true;
    regResult.message = 'Welcome!';
    regResult.user = new User(args);
  }

  return regResult;
};
