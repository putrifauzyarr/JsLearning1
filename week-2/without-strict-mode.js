'use strict';

function test() {
    a = 10; //a becomes a global variable
    console.log(a);
}

test();
console.log(a);

/* Why we need it ?
- safer by preventing accidental global variables
- cleaner by disalowing bad practices
- predictable by avoiding ambigous behaviours
*/