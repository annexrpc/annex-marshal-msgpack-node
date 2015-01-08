/**
 * Module dependencies
 */

var msgpack = require('msgpack');

var TYPES = {
  call: 0,
  cast: 1,
  response: 0,
  error: 1
};

exports.encode = function(type, msgid, mod, fun, args) {
  var typenum = TYPES[type];
  if (typeof typenum === 'undefined') throw new Error('unrecognized type ' + type);
  if (arguments.length === 3) return msgpack.pack([TYPES[type], msgid, mod]);
  return msgpack.pack([TYPES[type], msgid, mod, fun, args]);
};

exports.decode = function(bin) {
  return msgpack.unpack(bin);
};
