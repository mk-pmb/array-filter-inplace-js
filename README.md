
<!--#echo json="package.json" key="name" underline="=" -->
array-filter-inplace
====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Remove non-matching elements from a dense array.
<!--/#echo -->


API
---

This module exports one function:

### filter(array, test[, offset])

Test `array`'s items, starting at `offset` (default = 0) by calling the
`test` function with arguments `(value, index, array)`.
If the test result isn't truthy, the item is removed¹ from the array.

Returns `array`.

¹ "Remove" means it's either replaced with the next value that passes
the test, or cut off by setting `array.length`.




Usage
-----

from [test.usage.js](test.usage.js):

<!--#include file="test.usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="22" -->
```javascript
var filter = require('array-filter-inplace'), a, b, offset,
  files = [ '.', '..', '.git', 'bin', 'README.md', 'package.json' ];

function notDotFile(s) { return (s.slice(0, 1) !== '.'); }
a = files.slice();
b = filter(a, notDotFile);
equal(a, [ 'bin', 'README.md', 'package.json' ]);
equal(a, b);

a = files.slice();
offset = 2;   // skip the first two items
b = filter(a, notDotFile, offset);
equal(a, [ '.', '..', 'bin', 'README.md', 'package.json' ]);
equal(a, b);

function isLower(s) { return (/[a-z]/.test(s) && (!/[A-Z]/.test(s))); }
a = files.slice();
b = filter(a, isLower);
equal(a, [ '.git', 'bin', 'package.json' ]);
equal(a, b);
```
<!--/include-->



<!--#toc stop="scan" -->



&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
