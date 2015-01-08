/**
 * Module dependencies
 */

var msgpack = require('msgpack');

var TYPES = {
  call: 0,
  cast: 1
};

exports.encode = function(msgid, type, mod, fun, args) {
  return msgpack.pack([TYPES[type], msgid, mod, fun, args]);
};

exports.decode = function(bin) {
  return msgpack.unpack(bin);
};
