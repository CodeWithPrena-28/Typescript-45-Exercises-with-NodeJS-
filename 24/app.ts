//Define Variables
let apple = "apple";
let uperCaseApple = "APPLE"
let ten = 10;
let twenty = 20;
let fruits =["Apple", "Orange", "Grapes"];


//Test for Equality and Inequality with Strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not Equal to apple?");
console.log(apple != "apple");

//Tests Using LowerCase Function
console.log("Is APPLE is equal to apple after Converting to lowerCase?");
console.log(uperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is Not Equal to apple after Converting to lowerCase?");
console.log(uperCaseApple.toLowerCase() != "apple");

// Numerical tests
// Equal to
console.log("\n Is ten is Equal to twenty?");
console.log(10 == twenty);

// Not Equal to
console.log("\nIs ten is Not Equal to twenty?");
console.log(ten != twenty);

// Greater than 
console.log("\nIs ten is Greater than zero?");
console.log(ten > 0);

//Less than
console.log("\nIs twenty is less than 10");
console.log(20 < 10);

// Greater than or Equal to
console.log("\nIs ten is Greater than or Equal to 5?");
console.log(ten >= 5);

//Less than or Equal to
console.log("\nIs twent is less than or equall to 10?");
console.log(twenty <= 10);

//Tests Using 'And' & 'Or'
console.log("\n twenty is Not Equal to 10 AND twenty is greater than 10");
console.log(20 != ten && 20 > 30);

// Using || (OR)
console.log("\n 20 is Greater than 50 OR 20 is Equal to 20");
console.log(20 > 50 || 20 == twenty);

console.log("\n 20 is Greater than 50 OR 20 is Not Equal to 20");
console.log(20 > 50 || 20 != twenty);

//Test wheather an item is include in Array
console.log("\nIs Orange include in my Fruits Array");
console.log(fruits.includes("Orange"));

//Not Include
console.log("\nIs Orange Not include in my Fruits Array");
console.log(!fruits.includes("Orange"));




