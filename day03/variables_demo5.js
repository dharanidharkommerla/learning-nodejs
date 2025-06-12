// when a variable is declared without using the "var/let/const" keywords then its scope is global

var a = 100;
let b = 10;
const c = 1;

console.log("outside::value of a", a);
console.log("outside::value of b", b);
console.log("outside::value of c", c);
// console.log(x);

function fun1() {
  x = 100; // it has the global scope but it cannot be accessed before it is defined
  var a = 200;
  let b = 3000;
  const c = 100;
  console.log("this is fun1()...");
  console.log("inside fun1()::value of a", a);
  console.log("inside fun1()::value of b", b);
  console.log("inside fun1()::value of c", c);
  console.log("inside fun1()::value of x", x);
}

function fun2() {
  var a = 50;
  let b = 8000;
  const c = 10;
  console.log("this is fun2()...");
  console.log("inside fun2()::value of a", a);
  console.log("inside fun2()::value of b", b);
  console.log("inside fun2()::value of c", c);
  console.log("inside fun2()::value of x", x);
}

fun1();
fun2();
console.log(x);
