
var MemberApplication = function (args) {
  var memberApp = {};

  memberApp.email = args.email;
  memberApp.password = args.password;
  memberApp.confirm = args.confirm;
  memberApp.status = 'pending';
  memberApp.message = null;

  memberApp.isValid = function () {
    return memberApp.status == 'validated';
  };

  memberApp.isInvalid = function () {
    return !isValid();
  };

  memberApp.setInvalid = function (message) {
    memberApp.status = 'invalid';
    memberApp.message = message;
  };

  memberApp.validate = function (message) {
    memberApp.status = 'validated';
  };
  
  return memberApp;
};

module.exports = MemberApplication;