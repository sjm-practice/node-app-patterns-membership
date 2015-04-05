var assert = require('assert'),
    utility = require('../lib/utility');

/**
 * User object (based on a Devise user)
 * @params {js object} newUserData
 */
var User = function (newUserData) {
  // verify required fields are present
  assert.ok(newUserData.email, 'Email is a required field');
  var user = {};

  user.email = newUserData.email;
  user.authenticationToken = newUserData.authenticationToken || utility.randomString(18);
  user.createdAt = newUserData.createdAt || new Date();
  user.status = newUserData.status || 'pending';
  user.signInCount = newUserData.signInCount || 0;
  user.lastLoginAt = newUserData.lastLoginAt || new Date();
  user.currentLoginAt = newUserData.currentLoginAt || new Date();
  user.currentSessionToken = newUserData.currentSessionToken || null;
  user.reminderSentAt = newUserData.reminderSentAt || null;
  user.reminderToken = newUserData.reminderToken || null;

  return user;
};

module.exports = User;

