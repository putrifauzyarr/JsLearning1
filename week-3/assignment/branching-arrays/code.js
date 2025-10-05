// 4. Grade Checker
let score = prompt("Enter Your Score:");

if (score >= 90 && score <= 100) {
    alert("Grade: A");
}   else if (score >= 80 && score < 90) {
    alert("Grade B");
}   else if (score >= 70 && score < 80) {
    alert("Grade: C");
}   else {
    alert ("Fail");
} 

// 5. Multiplication Table Generator
let num = prompt("Enter a number:");
let result = "";
for (let i = 1; i <= 10; i++) {
    result += `${num} x ${i} = ${num * i}\n`;
}
alert(result);

// 6. Array of Fruits
let fruits = ["Apple", "Banana", "Cherry", "Grape", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}