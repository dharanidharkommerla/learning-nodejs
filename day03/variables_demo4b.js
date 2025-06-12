// "let, const" supports global, function, block scopes
// "var" supports only global, function
// ===================================================================
let a = 10; //global
console.log(a);

function test() {
  let a = 100; // function
  console.log(a);
  if (true) {
    let a = 100; //block
    console.log(a);
  }
}

test();
console.log(a);

// ===================================================================

const b = "Dharanidhar Kommerla"; //global
console.log(b);

function temp() {
  const b = "Pujitha"; // function
  console.log(b);
  if (true) {
    const b = 100; // block
    console.log(b);
  }
}
temp();
console.log(b);

// ===================================================================
var x = 1000; //global scop
console.log(x);

function fun() {
  var x = 200; //function scope
  console.log(x);
  for (var x = 1; x <= 10; x++) {
    // no logic present here
    // block scope
    if (x == 10) {
      console.log(x);
      x = "My Name is Dharanidhar Kommerla";
      break;
    }
  }
  console.log(x); // 10 --> this is "x" getting from the block
}
fun();
console.log(x);
