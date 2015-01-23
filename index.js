/**
 * Module dependencies
 */

var msgpack = require('msgpack');

exports.call = function(msgid, action, args, meta) {
  return typeof meta === 'undefined' ?
    exports.encode([0, msgid, action, args]) :
    exports.encode([0, msgid, action, args, meta]);
};

exports.cast = function(msgid, action, args, meta) {
  return typeof meta === 'undefined' ?
    exports.encode([1, msgid, action, args]) :
    exports.encode([1, msgid, action, args, meta]);
};

exports.response = function(msgid, response, meta) {
  return typeof meta === 'undefined' ?
    exports.encode([2, msgid, response]) :
    exports.encode([2, msgid, response, meta]);
};

exports.error = function(msgid, code, error, meta) {
  return typeof meta === 'undefined' ?
    exports.encode([3, msgid, code, error]) :
    exports.encode([3, msgid, code, error, meta]);
};

exports.encode = function(args) {
  return msgpack.pack(args);
};

exports.decode = function(bin) {
  return msgpack.unpack(bin);
};
