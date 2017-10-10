/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
module.exports = function (a, f, i) {
  var l = a.length, o = (+i || 0), v;
  for (i = o; i < l; i += 1) {
    v = a[i];
    if (o !== i) { a[o] = v; }
    if (f(v, i, a)) { o += 1; }
  }
  a.length = o;
  return a;
};
