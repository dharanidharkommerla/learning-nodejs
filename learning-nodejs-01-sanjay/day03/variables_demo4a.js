// Redeclartion
// =============

// The variables which are declared with "var" keyword can redeclared within the differnt scope
var a = 100;
console.log(a);

function f1() {
  var a = 1200;
  console.log(a);
}
f1();

// The variables which are declared with "let" keyword cannot redeclared within the differnt scope
let b = 200;
console.log(b);

// let b = 1300;
// console.log(b);

function f2() {
  let b = 1300;
  console.log(b);
}

// The variables which are declared with "let" keyword cannot redeclared within the differnt scope
const c = 500;
console.log(c);

// const c = 1500;
// console.log(c);

function f3() {
  const c = 1500;
  console.log(c);
}
