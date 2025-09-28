// === 1. Swap the Values ===
let x = 10;
let y = 20;
let temp = x;
x = y;
y = temp;

console.log("After swapping:")
console.log("x=",x);
console.log("y=",y);

//=== 2. Simple Math with Variables ===
let a = 8;
let b = 3;

let sum =  a + b;   // Create a variable sum to store the addition of a and b
let product = a * b;    // Create a variable product for multiplication
let average = (a + b) / 2;  // Create a variable average for the average value of a and b

console.log("\nsum=", sum);
console.log("product=", product);
console.log("average=", average);

// === 3. Temperature Conversion ===
let C = 25;

let R = (4 / 5) *  C;
let F = (9 / 5) * C + 32;
let K = C + 273.15;

console.log("\nCelcius:", C);
console.log("Reamur:", R);
console.log("Fahrenheit:", F);
console.log("Kelvin:", K);

// === 4. Predict the Value ===
let p = 5;
let q = 2;
let result = p + q * p; 
// multiplication (*) has higher operation precedence than addition (+)
// so, the expression  is evaluates as:
// result = p + (q * p) = 5 + (2 * 5) = 5 + 10 = 15
console.log("\nResult =", result);

// === 5. Combine Strings ===
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName // put a space (" ") between firstName and lastName so that the result is "John Doe"
// if we don't put a space between them so that the result is "JohnDoe"
console.log("\nFull Name:", fullName);

// === 6. Guess the Output ===
let m = 10;
let n = m;
m = 20;
console.log("\nGuess the output:", n);
// what will be printed is 10 because the value of n has been copied from x before x is changed