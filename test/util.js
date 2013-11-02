'use strict';

var arrayBufferToArray = function arrayBufferToArray(buf) {
  if (typeof buf === 'undefined' ||
      buf.constructor !== ArrayBuffer)
    return buf;

  if (buf.byteLength % Uint16Array.BYTES_PER_ELEMENT)
    throw 'byteLength (' + buf.byteLength + ') is not dividable by 2.';

  return Array.prototype.concat.apply([], new Uint16Array(buf))
    .map(function(n) {
      return '0x' + n.toString(16)
    });
};

var arrayBufferToString = function arrayBufferToArray(buf) {
  if (typeof buf === 'undefined' ||
      buf.constructor !== ArrayBuffer)
    return buf;

  if (buf.byteLength % Uint16Array.BYTES_PER_ELEMENT)
    throw 'byteLength (' + buf.byteLength + ') is not dividable by 2.';

  return String.fromCharCode.apply(String, new Uint16Array(buf))
    .replace('\u0000', '\u2400');
};