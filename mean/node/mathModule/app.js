const myMathLib = require('./mathlib')();
// console.log(typeof(myMathLib));
// console.log(myMathLib.add());

// add two numbers (e.g. math.add(2,3) should return 5)
console.log(myMathLib.add(2,4));
// multiply two numbers (e.g. math.multiply(3,5) should return 15)
console.log(myMathLib.multiply(2,4));

// square a number (e.g. math.square(5) should return 25)
console.log(myMathLib.square(5));
// return a random number between the two numbers (e.g. math.random(1,35) should return a random number between 1 and 35)
console.log(myMathLib.random(10, 5));
i=0
while( i < 10) {
  console.log(myMathLib.random(6,50));
  i++;
}