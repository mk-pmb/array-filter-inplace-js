/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var equal = require('assert').deepStrictEqual;

(function readmeDemo() {
  //#u
  var filter = require('array-filter-inplace'), a, b,
    files = [ '.', '..', '.git', 'bin', 'README.md', 'package.json' ];

  function notDotFile(s) { return (s.slice(0, 1) !== '.'); }
  a = files.slice();
  b = filter(a, notDotFile);
  equal(a, [ 'bin', 'README.md', 'package.json' ]);
  equal(a, b);

  function isLower(s) { return (/[a-z]/.test(s) && (!/[A-Z]/.test(s))); }
  a = files.slice();
  b = filter(a, isLower);
  equal(a, [ '.git', 'bin', 'package.json' ]);
  equal(a, b);
  //#r
}());


console.log("+OK usage test passed.");    //= "+OK usage test passed."
