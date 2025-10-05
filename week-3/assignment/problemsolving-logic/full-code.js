// 7. Find the Largest Number
let number = [12, 5, 20, 25, 7];
let largest = Math.max(...number);
console.log("Largest number:", largest);

// 8. Reverse a String
let word = prompt("Enter a word:");
let reserved = word.split("").reserve().join("");
alert("Reserved:", reserved);

// 9. Prime Number Checker
let num = parseInt(prompt("Enter a number:"));

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (n % i === 0) return false;
    }
}
if (isPrime(num)) {
    console.log(`${num} is a prime number`);
}   else {
    console.log(`${num} is not a prime number`);
}

// 10. Array Filtering (Adults Only)
let ages = [12, 18, 25, 30, 15];
let adults = ages.filter(age => age >= 18);
console.log("Adults (18+):", adults);