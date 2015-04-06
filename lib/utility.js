module.exports.randomString = function (length) {
  var i,
      rnum,
      strLen = length || 12,
      chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      result = '';

  for (i = 0; i < strLen; i++) {
    rnum = Math.floor(Math.random() * chars.length);
    result += chars.substring(rnum,rnum+1);
  }
  return result;
};