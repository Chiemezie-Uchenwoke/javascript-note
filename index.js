// Single Line Comment. It uses double forward slashes.
// I am a comment

/* Multi-line Comment:
I am a web developer
*/
console.log("Turing Tech");

// Alert
// alert("Accept all cookies");

// Confirm
// confirm("Are you a developer?");

// Prompt
// prompt("What is your name?");

/* 
Variables: 
A variable is a container for storing information. It could be anything from a person's name, to their age, the name of a car or any detail you want to capture that will be reused later in your code. 

The variable names are usually descriptive of what the content is going to be.
Examples: 
    - firstName
    - employmentStatus
    - location
    - country
    - qualification

Naming Conventions:
There are four naming convention in programming.
    - camel case: In camel case, you start your first word with a small letter and subsequent words are started with a capital letter. Example: firstName, countryOfResidence, etc. Camel case is used in JavaScript, C#, for naming variables and functions.

    - snake case: In the snake case, all your words are in small letter, but each word is separated by an underscore. Examples: first_name, last_name, country_of_residence, etc. It is commonly used in Python, Ruby and also database tables.

    - kebab case: Here, all the letters are small letters, but the words are separated using a hyphen. Example: first-name, last-name, country-of-residence, etc. It is commonly used in CSS for naming classes.

    - pascal case: It is similar to the camel case. All the words start with a capital letter and subsequent words also start with a capital letter. Example: FirstName, LastName, CountryOfResidence, etc. It is used in JavaScript, Java, TypeScript, etc. We use it for naming classes and interfaces.


Rules for Naming Variables:
(1) It must start with a letter, an underscore ( _ ) or a dollar ( $ ) sign.

(2) You cannot use any key word or reserved word. Example: let, null, if, function, for, class, await, break, case, const, true, false, try, while, new, do, continue, etc.


Variable Declaration:
(1) var
(2) const
(3) let

var firstName; variable declaration
firstName = "Chiemezie"; variable initialization

var firstName = "Chiemezie"; variable declaration and initialization
*/

/* Keywords used in declaring variables 
(1) Var: var is function scoped, which means that when it is used to declare a variable inside a function, it can be used anywhere within that function. It can also be reassigned. Also can be used before declaration and this is called "HOISTING".

(2) Let: It is blocked scope. It cannot be used before declaration and variables can be reassigned.

(3) Const. It is blocked scope. It cannot be used before declaration. Here the variables cannot be reassigned.
*/

console.log(firstname);
var firstname = "frank";
const myVariable = 10;
console.log(myVariable);

// const username = prompt("Type your username");
// const favoriteFood = prompt("Input your favorite food");
const username = "Dare";
const favoriteFood = "Chicken and Chips";
console.log(`Hi ${username}, did you eat ${favoriteFood} today?`);

/* const favoritePhone = prompt("What is your favorite phone?");
const favoriteCar = prompt("What is your favorite car?");
const favoriteDestination = prompt("What's your favorite destination?");
 console.log(`My favorite phone is ${favoritePhone} and my favorite car is ${favoriteCar} and i would love to visit ${favoriteDestination}`);*/

// Data Types
/* 
Variables are assigned values and the values are of different types. In JavaScript, the type of value does not need to be named when defining the variables. JavaScript determines the type of data based on its value.

Primitive Data Types
(1) Undefined: An undefined data type is used when a variable is declared but not initialized.
(2) Null: This is a data type that is used when a variable is initialized as empty or has an unknown value.
(3) String: String is used to represent a sequence of characters. A string can be represented in three ways. 
    - using double quotation mark ("")
    - using single quotation mark ('')
    - using backtick (``)

(4) Number: Number data type is used to represent number. There are different types of numbers. We have the integers(whole numbers), floating point number (numbers with decimals), signed number (can have positive or negative value), unsigned number (only positive values).
(5) BigInt: They are used for extremely large numbers.
(6) Boolean: It is used to store a value that evaluates to true or false.

typeof: It is an operator that is used to determine the type of any value.
*/

// Undefined
let dogBreed;
console.log(typeof dogBreed);

// null
let num = null;
console.log(typeof num);

// String
let lastName = 'Uche';
let greet = "Good Morning";
let fav = `Great`;
// let question = 'What's your name?'; 
//When using a single quotation mark, an apostrophe can close our string prematurely. It's adviced to use a double quotation mark.

let question1 = "What's your name?";

// Numbers
const num1 = 100;
console.log(typeof num1)
console.log(typeof question1);

const num2 = "100";
console.log(typeof num2);
console.log(num1);
console.log(num2);

// Boolean
let value = (10 > 5);
console.log(value);
console.log(typeof value);

// Operations, Operators and Operands
// Arithmetic Operations (operations in numbers)
/* 
Addition: x + y (where x and y are numbers)
Subtraction: x - y (where x and y are numbers)
Multiplication: x * y (where x and y are numbers)
Division: x / y (where x and y are numbers)
Exponents: x ** y (where x and y are numbers)
Modulus: x % y (where x and y are numbers). It is the remainder after dividing two numbers.
Unary Operators (increment and decrement).
Increment: x = x + 1;
           x = +1;
           x++;
Decrement: x = x - 1;
           x = -1;
           x--;
Order of Precedence: This is the order that JavaScript follows when solving an operation. The oerder is called PEMDAS.
P - Parentheses
E - Exponents
M/D - Multiplication / Division
A/S - Addition / Subtraction
*/
let x = 14;
let y = 7;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);
console.log(x % y);

console.log(x++);
console.log(x);
console.log(++x);

/* 
String Operations (concatenation) 
The symbol for concatenation is the plus sign (+). In the case, the operands are strings. Concatenation is used to add two strings together.

- It can be used to join a string to a string
- It can be used to join a variable to another variable
- It can be used to join a string to a variable
*/

let course = "Frontend Development";
let school = "Turing Tech";
console.log(course + school);
console.log(course + " " + school);
console.log(course + " at " + school);
console.log("Today" + " is " + "Sunday");

/* 
Comparison Operators 
They are used to compare two values and it returns a boolean value (true or false) as a result.
-Equal to (===): It is a strict equal to. It compares both the value and the data type.
-Equal to (==): Unstrict equal to. It evaluates the value only.
-Not Equal to (!=)
-Greater than (>)
-Less than (<)
- Less than or equal to (<=)
- Greater than or equal to (>=)
*/

console.log(5 == "5");
console.log(5 === "5");
console.log(2 != 2);
console.log((2 * 5) > 6 );
console.log(5 <= 3);
console.log(12 >= 5);

/* 
Logical Operations
We use logical operations to check two different conditions in one whole and also negate a condition.
- And (&&): Returns a true value if all conditions being checked are true. If any of the condition is false, it will evaluate to false (all or nothing).
- Or (||): Returns a true value if any of the expression or condition being checked is/are true.
- Not (!): Used to negate whatever value you have.
*/

// Type Conversion
/* 
This simply means changing data from one type to another.

It is best practice to do the data conversion yourself and not leave it solely to the JavaScript engine to do it for you. Allowing the JavaScript engine to perform data conversion can result to error or unexpected output. Also, using the console to check for the data type can be very useful and help the data conversion process.
Example:
*/
let n1 = 7;
let n2 = "10";

console.log(typeof n1);
console.log(typeof n2);
console.log(n1 * n2);
console.log(n1 + n2);
console.log(n2 - n1);
console.log(n2 / n1);

/* 
Number Conversion

To convert any data type to number, we use the Number() Method.
When you convert Boolean values to a number, true gets converted to 1 and false gets converted to 0. Also converting a null data type to number will give 0.

A null data type gets converted to 0.

Undefined data type will return NaN (it means not a number).

An empty string will be converted to 0.

A string with a numerical value will be converted to the number equivalent.

A string with a non numerical value will return NaN. 
*/

console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));
console.log(Number("5"));
console.log(Number("five"));

/* 
String Conversion

Other data types can be converted to a string using the String() method or the toString() method.
*/
// n1 = n1.toString();

let n3 = n1.toString();
console.log(typeof n3);

console.log(typeof String(true));
console.log(typeof String(null));
console.log(typeof String(undefined));
console.log(typeof String(72));

/* 
Boolean Conversion

To convert any data type to Boolean, we use the Boolean() method.
- Coverting an empty string to a Boolean, will return false.
- Converting a non-empty string to a Boolean will return true.
- For numbers, when it is 0, it will return false. 
- Any number that is not 0 will return true.
- A null data type will return false.
- An undefined data type will also return false.
*/
console.log(Boolean(""));
console.log(Boolean("name"));
console.log(Boolean(0));
console.log(Boolean(6));
console.log(Boolean(null));
console.log(Boolean(undefined));

/* 
Math Objects
JavaScript has an inbuilt Math object that will help you perform Mathematical calculations. It has several built-in constants and expressions that will help us to perform Maths operations. 

- Math.PI: It outputs the value of the mathematical constant PI.

- Math.sqrt(x): This function returns the square root of x.

- Math.Pow(x, y): Used for exponents. They are used to calculate the value of x raised to the power of y. Where x is the base and y is the exponent.

- Math.cbrt(x): This function returns the cube root of x. 

- Math.min(...): This is used to find the smallest number within a group of numbers.

- Math.max(...): This is used to find the largest number within a group of numbers.

- Math.round(x): It is used to calculate the standard rounding of numbers. It outputs the standard round function in mathematics. Where numbers below .5 are rounded down and numbers above are rounded up to the nearest whole number.

- Math.ceil(x): This is used to round numbers up to the nearest whole number.

- Math.floor(x): This is used to round numbers down to the nearest whole number.

- Math.random(): It is used to generate a random Number between 0 and 1. The number is inclusive of 0 and exclusive of 1.

*/
console.log(Math.PI);
const piConstant = Math.PI;
const radius = Number(prompt("Input your radius"));
const circumferenceOfCircle = 2 * piConstant * radius;
alert("The circumference of the circle is " +  circumferenceOfCircle);

console.log(Math.sqrt(4));
console.log(Math.pow(2, 3));
console.log(Math.cbrt(27));
console.log(Math.min(4, 2, 3, 1));
console.log(Math.max(5, 1, 4, 2));
console.log(Math.round(12.7));
console.log(Math.ceil(12.1));
console.log(Math.floor(12.3));
console.log(Math.random());

// Random Number Generation
const minValue = 10;
const maxValue = 50;
const randomNumber = Math.random();
const generateNumber = (Math.floor(randomNumber * maxValue) + minValue);
console.log(generateNumber);

// Random Number Generation
const max = 50;
const min = 10;
const randomNumber1 = Math.random() * max;
console.log(randomNumber1);

const randomNumber2 = Math.random() * (max - min) + min;
console.log(randomNumber2);
console.log(Math.floor(randomNumber2));

const randomNumber3 = Math.floor(Math.random() * (max - min) + min);

/* 
String Methods

(1) Length: The length method is used to reflect the number of characters that a string contains. It is inclusive of whitespace
*/
const randomString = "Chiemezie";