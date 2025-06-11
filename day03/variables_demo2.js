// we can declare varaibles with following keywords
// 1. var
// 2. let
// 3. const

// difference between var || let || const ||

// 1. Reassign of the values
// ==========================

// variables which are declared with "var" keyword the value can be reassignable
var a = 10;
console.log("value of a = ", a);
a = 100;
console.log("value of a = ", a);

// variables which are declared with "let" keyword the value can be reassignable
let b = 20;
console.log(`value of b = ${b}`);
b = 200;
console.log(`value of b = ${b}`);

// variables which are declared with "const" keyword the value cannot be reassignable
const c = 1000;
console.log(`value of c = ${c}`);
// c = 2000;
// console.log(`value of c = ${c}`);
