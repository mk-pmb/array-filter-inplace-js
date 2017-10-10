
<!--#echo json="package.json" key="name" underline="=" -->
array-filter-inplace
====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Remove non-matching elements from a dense array.
<!--/#echo -->


Usage
-----

from [test.usage.js](test.usage.js):

<!--#include file="test.usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="16" -->
```javascript
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
```
<!--/include-->



<!--#toc stop="scan" -->



&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
