const add = require('./add');
const substract = require('./substract');
const multiply = require('./multiply');
const divide = require('./divide');

const a = 13
const b = 8

console.log("=== Simple Calculator App ===");
console.log(`Addition: ${add(a,b)}`);
console.log(`Substraction: ${substract(a,b)}`);
console.log(`Multiplication: ${multiply(a,b)}`);
console.log(`Division: ${divide(a,b)}`);