// Define Variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "mango"];
// Test for equality and inequality with Strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
// Tests using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical tests
// Equal to
console.log("\nIs ten is equal to twenty");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nis ten is greater than zero?");
console.log(ten > 0);
// Less than 
console.log("\nIs tenty is less than 10?");
console.log(twenty < 10);
// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
// Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
// Test using "and" && "or" operators
// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater then 30");
console.log(twenty != 10 && twenty > 30);
// Using || (or)
console.log("\ntwenty is greater then 50 or twenty is equal to twenty");
console.log(twenty > 50 || twenty == 20);
console.log("\ntwenty is greater then 50 or twenty is not equal to twenty");
console.log(twenty > 50 || twenty != 20);
// Test whether an item is include in array
console.log("\n Is mango include in my fruit array?");
console.log(fruits.includes("mango"));
// Not include
console.log("\n Is mango not include in my fruit array?");
console.log(!fruits.includes("mango"));
