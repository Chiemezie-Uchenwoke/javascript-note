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
-Strict Not Equal to (!==): It compares both values and data types
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
/* console.log(Math.PI);
const piConstant = Math.PI;
const radius = Number(prompt("Input your radius"));
const circumferenceOfCircle = 2 * piConstant * radius;
alert("The circumference of the circle is " +  circumferenceOfCircle);
 */
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

(1) length: The length method is used to reflect the number of characters that a string contains. It is inclusive of whitespace

(2) charAt(): It is a JavaScript method that takes one parameter, which is the index number of the particular string.

(3) toUpperCase(): This is used to transform the characters of a string to uppercase.

(4) toLowerCase(): This is used to transform the characters of a string to lowercase.

(5) trim(): This is used to remove whitespace trailing whitespace from a string.

(6) concat(): This is used to combine two or more strings. It takes two or more arguments and each argument represents the string we are trying to concatenate.

(7) replace(): This is used to find a particular substring within a string and replaces it with another substring. It takes two arguments. The first argument is the substring we want to replace and the second is the string we are replacing it with. It replaces only the first instance.

(8) replaceAll(): This is similar to the replace but it replaces all the instances of the given string.

(9) split(): This is used to split a string into substrings based on the ocurrence of an argument passed. This methods returns the substrings as an array of strings.

(10) Slice(x, y): It is used to extract a part of the string. It has the option of taking in two arguments. The first argument is the start index and the second parameter is the end index. The return value of this method is inclusive of the start index and exclusive of the end index.

This method can also accept one argument which will represent the start index.

It can also take zero index. In this case, the default start is 0 and the end will be the end of the string.

It can also take negative values.

(11) indexOf: To get the index number of string.

(12) includes: To check if a string contains a string or a word.

(13) repeat(n): To repeat a string a number of times

*/
const randomString1 = "Turing Tech";
const randomString2 = "     Turing Tech";
const randomString3 = "TurInG TecH";
const randomString4 = "An Academy for training developers";

console.log(randomString1.length);

console.log(randomString2.length);

console.log(randomString1.charAt(7)); 

console.log(randomString3.toUpperCase());

console.log(randomString3.toLowerCase());

console.log(randomString2);
console.log(randomString2.trim());

console.log(randomString1.concat(' ', randomString4, ' in frontend development'));

console.log(randomString1.replace('Tech', 'Academy'));

console.log("Turing tech is a tech hub where tech people learn tech courses".replace("tech", "academy"));

console.log("Turing tech is a tech hub where tech people learn tech courses".replaceAll("tech", "academy"));

console.log("Turing tech is a tech hub where tech people learn tech courses".split(" "));

console.log("Turing tech is a tech hub where tech people learn tech courses".split("t"));

console.log("Turing tech is a tech hub where tech people learn tech courses".split(""));

console.log(randomString4.slice(3, 10));
console.log(randomString4.slice(15, 23));
console.log(randomString4.slice(24));
console.log(randomString4.slice(-20, -10));


/* 
Date Object

It represents a specific moment in time. It is used to get your date and time. It is used for displaying current date, setting a count down timer, a timer function.

The date object is created using the date constructor. It can have zero or more arguments.

The date constructor is: new Date()

Diiferent ways of calling the date object:
(1) No Argument: When the date object is called with no argument, it returns the current date, time and local time zone.

(2) With a numerical value as argument: When it is called with a numerial value as an argument, the value represents a particular milliseconds in time starting from the reference point, the Unix Epoch(Jan 1st 1970 at mid night utc).

(3) With a string as an argument: A date format can be passed as a string into the date object and when passed, it returns that particular date in the apropriate date format.

(4) Using the specific date and time: Here, the values of the date and time are passed in as an argument.
Syntax:
new Date(year, month, date, hours, minutes, seconds, milliseconds)


Date Methods
(1) getFullYear(): This method returns the year.

(2) getMonth(): This method returns the month. Where January is 0 and December is 11.

(3) getDate(): This method returns the date. that is, the date in the month between 1 and 31.

(4) getDay(): This method returns the day of the week. Where 0 is Sunday and 6 is Saturday.

(5) getHours(): This method returns the hour of the day and it captures between 0 and 23. Where 23 is 11pm and 0 is 12am.

(6) getMinutes(): This returns the specific minutes of the day.

(7) getSeconds(): This method returns the seconds of the day

(8)getMilliseconds(): This method returns the milliseconds (1000ms = 1second) of the day

*/

const todaysDate = new Date();
console.log(todaysDate);

const dateAsNumber = new Date(123456789335);
console.log(dateAsNumber);

const dateAsString = new Date("December 26, 2024");
console.log(dateAsString);

const specificDate = new Date(2024, 10, 23, 26);
console.log(specificDate);

console.log(todaysDate.getFullYear());
console.log(todaysDate.getMonth());
console.log(todaysDate.getDate());
console.log(todaysDate.getDay());
console.log(todaysDate.getHours());
console.log(todaysDate.getMinutes());
console.log(todaysDate.getSeconds());
console.log(todaysDate.getMilliseconds());

let makeToday = new Date();
makeToday = makeToday.toString();
console.log(makeToday.slice(0, 15));

/* 
Conditional Statements
Conditional statements allow us to create multiple paths in our code depending on the outcome of a given condition. A programmer uses conditional statement to perform logical reasoning. There are three distinct conditional statements in JavaScript:

(1) if... else if... else statement
(2) Switch Statements
(3) Tenary Operations

================> if... else if... else statement <================
This is one of the most frequently used statement in JavaScript as well as in other programming languages. It is usually made up of a statement and the condition that must be met for that statement to be executed. These conditions are usually captured in a pair of curly braces. WHatever is inside the curly braces should be evaluated on the bases of true or false. If the condition is true, then all the codes withing the curly brace must be executed. Else, if it is false, JavaScript will skip over all the statements within the curly braces.

Note that the if statement comes with 2 additional statements, the else if and the else.

=====>(a) Psuedo code representation of the else if and else statement. <=====
if rent = paid and due date is less than or equal 30th November
tenant discount is 25%

else if rent = paid and date is on or before 31st december,
tenant discount is 10%

else Tenant discount is 0

Syntax
if (condition to be met){
    statement to be executed;
} 

else if (condition to be met){
    statement to be executed;
}

else {
    statement to be executed
}

=====> Psuedo code for grading system <=====
80 and above = A
70 - 79 = B
60 -69 = C
50 - 59 = D
40 - 49 = E
Below 40 is F

*/

/* 
let studentsScore = prompt("Enter student's score");
let studentGrade;

if (studentsScore >= 80){
    studentGrade = "A";
    console.log("Your grade is " + studentGrade);
}

else if (studentsScore >= 70 && studentsScore <= 79){
    studentGrade = "B";
    console.log("Your grade is " + studentGrade);
}

else if (studentsScore >= 60 && studentsScore <= 69){
    studentGrade = "C";
    console.log("Your grade is " + studentGrade);
}

else if (studentsScore >= 50 && studentsScore <= 59){
    studentGrade = "D";
    console.log("Your grade is " + studentGrade);
}

else if (studentsScore >= 40 && studentsScore <= 49){
    studentGrade = "E";
    console.log("Your grade is " + studentGrade);
}

else {
    studentGrade = "F";
    console.log("Your grade is " + studentGrade);
}
 */

/* 
=====>(a) Psuedo code representation of the else if and else statement. <=====
if rent = paid and due date is less than or equal 30th November
tenant discount is 25%

else if rent = paid and date is on or before 31st december,
tenant discount is 10%

else Tenant discount is 0

*/

/* const rentpaid = confirm("Has rent been paid?")
const rent = 500000;
let discount;
let rentAfterDiscount;
const dueMonth = new Date().getMonth();
const dueDay = new Date().getDate();
console.log(dueDay);
console.log(dueMonth);

if (rentpaid === true && (dueMonth <= 10 && dueDay <= 30)){
    discount = 0.25;
    let discountAmount = rent * discount;
    rentAfterDiscount = rent - discountAmount;
    console.log("Amount paid is " + rentAfterDiscount);
}

else if (rentpaid === true && (dueMonth <= 11 && dueDay <= 31)){
    discount = 0.1;
    let discountAmount = rent * discount;
    rentAfterDiscount = rent - discountAmount;
    console.log("Amount paid is " + rentAfterDiscount);
}

else if (rentpaid === false){
    console.log("Please pay your rent!")
}

else {
    discount = 0;
    let discountAmount = rent * discount;
    rentAfterDiscount = rent - discountAmount;
    console.log("Amount paid is " + rentAfterDiscount);
}  
 */

/*
    rent paid by 30/11/2024 discount = 25%
    rent paid by 31/12/2024 discount = 10%
    rent paid afterwards discount = 0% 
*/

    
/*     const dueDate1 = new Date('November 30 2024');
    const dueDate2 = new Date('December 31 2024');
    const todaysDate1 = new Date().toString().slice(0, 15);
    console.log(todaysDate1);
    const inputDate = prompt('input your payment date in the format of month day year');
    console.log(inputDate);
    const paymentDate = new Date(inputDate).toString().slice(0, 15);
    console.log(paymentDate);
    const rentConfirmation = confirm('has your rent been paid');
    let discount;
    const rent = 500000;
    
    if (rentConfirmation === true){
        if (paymentDate >= todaysDate1 && paymentDate <= dueDate1){
            discount = 0.25;
            const rentdue = rent - (rent * discount);
            console.log('your rent due ' + rentdue);
        }

        else if (paymentDate >= todaysDate1 && paymentDate <= dueDate2){
            discount = 0.1;
            const rentdue = rent - (rent * discount);
            console.log('your rent due ' + rentdue);
        }

        else {
            discount = 0;
            const rentdue = rent - (rent * discount);
            console.log('your rent due ' + rentdue);
        }
            
    }
    else{
        console.log('please pay your rent');
    }  */

/* 
===========> Nested If Statements <============

The nested if statement is an if statement that is nested inside another if statement in a parent child relationship, where the child if statement will only run if the condition of the parent if statement is true.

*/

// Ex: Eligibility of a customer to receive PTA.
/* 
----Conditions
(1) Must be an account holder
(2) Must have a valid visa
(3) Must have a return flight ticket
(4) The flight must originate from Nigeria
(5) You can only be eligible for PTA once a quarter.
(6) The flight duration must not be less than 5 hours
(7) You can only purchase PTA 2 weeks before travel


*/
let accountHolder = true;
const validVisa = true;
const returnTicket = true;
const flightFromNigeria = true;
const ptaPerQuarter = false;
const flightDuration = 5;  //captured in hours
const applicationTimeline = 14;
const nigerian = true;

if (accountHolder){
    if (nigerian === true) {
        if (ptaPerQuarter === true) {
            console.log("You are not eligible for PTA: you've applied for PTA within the last three months");
        }
        else{
            if (validVisa === true) {
                if (returnTicket === true) {
                    if (flightFromNigeria === true) {
                        if (applicationTimeline <= 14){
                            if (flightDuration >= 5){
                                console.log("Congratulations you qualified for PTA!");
                            }
                            else{
                                console.log("You are not eligible for PTA: flight duration is not up to 5 hours");
                            }
                        }
                        else {
                            console.log("You are not eligible for PTA: application timeline is more than 2 weeks");
                        }
                    }
                    else {
                        console.log("You are not eligible for PTA: you're not flying from Nigeria");
                    }
                }
                else {
                    console.log("You are not eligible for PTA: you do not have a return ticket");
                }
            }
            else {
                console.log("You are not eligible for PTA: you do not have a valid visa");
            }
        }
    } 
    else {
        console.log("You are not eligible for PTA: you're not Nigerian");
    }
} 
else {
    console.log("You are not eligible for PTA: You're not an account holder");
}

/* 
Switch Statements
The switch is a conditional statement that evaluates the value of an expression and matches it against multiple cases. It then executes the statement after the first case clause that matches the expression until a break statement is encountered. A default clause will be executed if no case matches the expression value. It is an alternative to using multiple if else if statements and can make the code more readable when there are many possible conditions. 

Syntax

switch(expression){
    case value 1:
        //the code to be executed if expression === value 1;
        break;
    case value 2:
        //the code to be executed if expression === value 1;
        break;
    case value 3:
        //the code to be executed if expression === value 1;
        break;
    default:
        //the code to be executed if none of the cases match the expression;
}

Explanation
(1) Expression: The expression is the value or the variable being evaluated. Each case is compared against this value.
(2) Case: The case represents a possible value for the expression. If the expression matches the value of a case, javascript will run the code inside that case.
(3) Break: This keyword stops the execution from continuing to the next case and practically exit the switch statement. In the absence of the break keyword, javascript will continue to execute all the other cases until it gets to the end of the switch statement.
(4) Default: The default is the back-up option. If none of the cases value matches the expression, the code within the default will execute.

*/
/* let day;
const currentDate = new Date().getDay();
switch(currentDate){
    case 0:
        day = "Sunday";
        break;
    case 1: 
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    case 3: 
        day = "Wednesday";
        break;
    case 4: 
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "NaN";
} */

let day = new Date().getDay();
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();
console.log(day + " " + date + " " + month + " " + year);

switch(day){
    case 0:
        day = "Sunday";
        break;
    case 1: 
        day = "Monday";
        break;
    case 2: 
        day = "Tuesday";
        break;
    case 3: 
        day = "Wednesday";
        break;
    case 4: 
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "NaN";
}

switch(month){
    case 0:
        month = "January";
        break;
    case 1: 
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3: 
        month = "April";
        break;
    case 4: 
        month = "May";
        break;
    case 5: 
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September"
        break;
    case 9: 
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
}


/* let colors = prompt('traffic light color').toLowerCase();
let message;

try{
    switch(colors){
        case 'red':
            message = 'stop';
            console.log(message);
            break;
    
        case 'yellow':
            message = 'get ready';
            console.log(message);
            break;
    
        case 'green':
            message = 'move';
            console.log(message);
            break;
    
        default:
            console.log('not a traffic color');
    }
    
}catch(err){
    console.log(err);
} */
/* 
Important concepts in Switch Statements

(1) Type Coercion: The switch statement uses strict equality (===) to compare the expression with each cases. The case must match the expression in both value and data type.

*/
//Example on type coercion
let typeCoer = 4;

switch(typeCoer){
    case 4:
        console.log("This will execute");
        break;
    case "4":
        console.log("This will not execute");
        break;
}

/* 
(2) Fall-through Behaviour: If the break keyword is omitted, JavaScript will execute the code for the matching case and continue to execute subsequent case blocks regardless of whether they match the expression or not. This fall-through behaviour can be used intentionally for grouping cases.
*/
let phone = "S 24";

switch(phone){
    case "15 Pro Max":

    case "14 Pro Max":

    case "13 Pro Max":
        console.log("brand apple");
        break;
    case "Fold 6":

    case "flip 6":

    case "S 24":
        console.log("samsung");
        break;
    case "Note 10":

    case "Hot 10 Play":

    case "Note 40":
        console.log("infinix");
        break;
}

/* 
Using Logical Conditions in cases: Cases are not only constants, they can also be expressions that evaluates to a boolean value

80 and above = A
70 - 79 = B
60 -69 = C
50 - 59 = D
40 - 49 = E
Below 40 is F

*/

let passMark;
let mark = 75;
switch(true){
    case mark >= 80:
        passMark = "A";
        console.log("Grade is " + passMark);
        break;
    case mark >= 70:
        passMark = "B";
        console.log("Grade is " + passMark);
        break;
    case mark >= 60:
        passMark = "C";
        console.log("Grade is " + passMark);
        break;
    case mark >= 50:
        passMark = "D";
        console.log("Grade is " + passMark);
        break;
    case mark >= 40:
        passMark = "E";
        console.log("Grade is " + passMark);
        break;
    default:
        passMark = "F";
        console.log("Grade is " + passMark);
}

/* 
Tenary Operator
The tenary operator is used as a short hand to capture the if else statements. 

It has three parts to its syntax:
(1) The condition
(2) The expression to execute if the condition is true.
(3) The expression to execute if the condition is false.

SYNTAX
condition ? <expression if true> : <expression if false>

*/
let number = 11;
/* if (number > 10){
    console.log("great");
}else{
    console.log("false");
} */

number > 10 ? console.log("great") : console.log("false");

let age;
// Using if statements
/* if (age >= 18){
    console.log("You're eligible to vote");
} else {
    console.log("You're not eligible to vote");
} */

age >= 18 ? console.log("You're eligible to vote") : console.log("You're not eligible to vote");


/* 
LOOPS
A loop is a statement that is used to run certain instructions repeatedly. It is used for a variety of reasons -- For example, if you want to print a document 20 times, you donot need to copy and paste it 20 times, you can simply execute the instructions using a loop statement.

Real Life Implementation of Loops
(1) In an assembly line, where a robot hand graps and transfers an object to the next phase of the assembly process.
(2) In a counting operation, where a program has to sequentially count the number of times an operation is run in a batch.
(3) When a printer needs to print a number of copies of a document.

Types of Loops
There are three main types loops:
(1) For Loop
(2) While Loop
(3) Do While Loop


For Loop
The for loop creates a loop using three expressions: 
(a) The initialization: It is where the variable used in the loop is initialized.
(b) The condition: It is a boolean expression of what needs to be met for the loop to stop. Without the condition, the loop will run endlessly.
(c) The increment or decrement: This is where the variable is increased or decreased.

Syntax
for(initialized variable; condition; increment or decrement){
    //code to be executed
}

for (let i = 0; i <= 10; i++){
    console.log(i);
}

*/
for (let i = 0; i <= 10; i++){
    console.log(i);
}

// Counting even and odd numbers
for (let i = 1; i <= 20; i++){
    i % 2 === 0 ? console.log(i + " is an even number") : console.log(i + " is an odd number");
}

// Sum numbers from 1 to 100;
let sum = 0;
for (let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum);

// Add Numbers in an Array
let add = 0;
let arnums = [10, 20, 30];
for (let i = 0; i < arnums.length; i++){
    add += arnums[i];
}
console.log(add);

/* 
While Loop

This instructs JavaSCript to execute a block of code repeatedly until a certain condition is reached.

===== SYNTAX =====
let i = 0;
While (i <= 10) {
    console.log(i); //Code to be executed as long as the condition is true.
    i++;
}


*/

// Summation using a while loop
let sumNumbers = 0;
let j = 0;
while (j <= 100){
    sumNumbers += j;
    j++;
}
console.log(sumNumbers);

// Dice roll
let diceNumber = 0;
let count = 0;
while (diceNumber !== 6) {
    console.log(diceNumber);
    const numOnDice = Math.floor(Math.random() * 6 + 1);
    diceNumber = numOnDice; 
    count++;
}
console.log(count);

/* 
Do while loop
Do while loop is used to repeat a set of instructions in JavaScript until a condition is false, just like we have in the while loop. However, in the do while loop the code executes atleast once before checking for the condition.

SYNTAX
do {
  code block to be executed
}
while (condition);

Example.
let text = "";
let i = 0;
do {
  text += i + "<br>";
  i++;
}
while (i < 5);

*/

/* let studentUsername;
do {
    studentUsername = prompt("Enter your username");
    console.log(studentUsername);
}
while(studentUsername === "" || studentUsername === null || studentUsername === " "); */


/*

FUNCTIONS IN JAVASCRIPT
A function in JavaScript is a block of code that performs a specific task, oftentimes returning a value.
2 things about a function
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

Why Use Functions?
•	To organize your code into small, reusable pieces.
•	To avoid repeating yourself (you can call the function whenever you need it).
•	To make your program easier to understand.

How a function is defined/declared
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses () and then followed by the curly brace.
NOTE: Explain what name, () and {} does. Also state the name must be meaningful and describe what it’s used for.


Keywords and naming convention
(1)	 Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
(2)	 The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
(3)	 The code to be executed, by the function, is placed inside curly brackets: {}

BASIC FUNCTION SYNTAX (give examples for each)
function functionName() {
  // code to be executed
}
Example:
function sayHello() {
  console.log("Hello, World!");
}
________________________________________
Functions With Parameters
You can give a function parameters, which are like placeholders for inputs.
The inputs are provided when you call the function.
Example:
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Chiemezie"); // Output: Hello, Chiemezie!
________________________________________
Returning a Value
Sometimes, a function needs to send back a result. This is done using the return keyword.
Example:
function add(a, b) {
  return a + b;
}
let result = add(3, 4); // result gets 7
console.log(result); // Output: 7

Function calling - () Operator
The () operator invokes (calls) the function:
You call a function by using its name followed by parentheses, which may include arguments.


*/

//TASK
/* 
(1)
Write a function that converts temperature from degree Celsius to Kelvin using celsius as the only parameter.
Formula:
Temperature(kelvin) = Temperature (Celsius) + 273
*/

function convertToKelvin(celsius){
    const tempInKelvin = celsius + 273;
    console.log(tempInKelvin);
}
convertToKelvin(27);

/* 
(2)
Write a function that calculates body mass index using weight and height as parameter.
Formula:
Body mass index = 𝑤𝑒𝑖𝑔ℎ𝑡 / (ℎ𝑒𝑖𝑔ℎ𝑡 × ℎ𝑒𝑖𝑔ℎ𝑡)

*/

function bmiCalculator(weight, height){
    const bmi = weight / (height ** 2);
    console.log(bmi);
}
bmiCalculator(70, 1.734);

/* 
(3)
Write a function that takes a name as a parameter and prints a greeting message ‘Hello, John!’
*/
function greetMsg(name){
    console.log("Hello, " + name + "!");
}
greetMsg("John");

/* 
(4)
Write a function that prints the goodbye message ‘Goodbye! See you next time!’ when called.
*/
function sayGoodBye(){
    console.log("Goodbye! See you next time!");
}
sayGoodBye();

/* 
(5)
Write a function that takes any number as parameter and doubles it
*/
function doubleNumber(num){
    console.log(num * 2);
}
doubleNumber(7);

/* Parameters, Arguments and Variables */
// Return makes a function available outside a function (its block). It outputs a value.
// Parameters are variables that are declared within the function definition. They are entered within the parenthesis of a function name.
// Arguments are values that are passed into the paramters of a function when it is called.

/* 
Passing less or more argument in a function: 
passing less argument than parameters: when you have less argument than parameters, the extra parameter will be undefined.

Passing more argument than parameters: when we have more argument than parameters, javascript will ignore the addtitonal 
argument


*/

//less argument than parameters

function welcomeMessage(time, username, appname){
    console.log('good' + time + ' ' + username + ' welcome back to ' + appname)
}
welcomeMessage('evening', 'emekaike', 'turingtech');
welcomeMessage('evening', 'emekaike');

//more argument than parameters
welcomeMessage('morning', 'jerry', 'turingtech', 'saturday');


/* 
Anonymous Functions
An anonymous functions that are not given function names at the point of declaration.
 
SYNTAX
function () {
    //block of code to be executed
}

Function Expression
const newFunction = function() {
    //block of code to be executed
}

Arrow Functions
An arrow function is an anonymous function with a shorter syntax. It's a more concise way to write a function expression. 

The concept of an arrow function was introduced during version ES6(ECMA Standard Version 6). In other programming languages, the feature is known as Lambda function.

SYNTAX
const newFunction = (parameter1, parameter2, ...) => {
        //block of code to be executed
    }


When we have just one line of code to be executed
const newFunction = (parameter1, parameter2) => parameter1 + parameter2

*/

/* 
ARRAYS
An array is a data structure that allows you to store multiple values in one variable. These values can be of similar data types or different data types.

How To Create an Array
(1) Using the array constructor
    const myArray = new Array("item1", "item2", "item3");

(2) Using the square bracket notation 
    const myArray = ["item1", "item2", "item3"];

To initialize an empty array, we use:
const myArray = [];

Accessing An Element In An Array
To access an element in an array, we use the square bracket notation containing the index of the element we want to access, alongside the name of the array.

In this case, the index is the position of the element in the array and the index position starts counting from 0.

SYNTAX
variableName[indexNumber]


Modifying an Element within an Array
We can modify an element within an array by overwriting the existing element. This is achieved by accessing the element and assigning a new value to it.

SYNTAX
variableName[indexNumber] = newValue;


Length Property of an Array
The length property is used to return the number of items that an array has.

SYNTAX
variableName.length

*/
const attendance = ["Emeka", "Eudorah", "Martha", "Ndubuisi", "Sarah", "Chiemezie"];
console.log(attendance);
console.log(attendance[0]);
console.log(attendance[5]);

// Modifying an element
attendance[0] = "Martins";
console.log(attendance[0]);
console.log(attendance);

// Length property
console.log(attendance.length);


/* 
Array Methods
(1) Push Method: The push method is used to add one or more element to the end of our array. This method modifies our array and it returns the new length of the array.
const myArray = [item1, item2, item3];
myArray.push(item4);
console.log(myArray); output: [item1, item2, item3, item4]

(2) Pop() Method: The pop method is used to remove the last element in an array. It also modifies the array and changes its length. The pop method does not accept any parameter.
const myArray = [item1, item2, item3];
myArray.pop();
console.log(myArray); output: [item1, item2]

(3) Unshift() Method: The unshift method is used to add one or more method to the beginning of an array. It also modifies an array and return the new lenth of the array.
const myArray = [item1, item2, item3];
myArray.unshift(item0);
console.log(myArray); output: [item0, item1, item2, item3]

(4) shift() method: The shift method is used to remove the first element in an array. It also has zero parameters and modifies the array.
const myArray = [item1, item2, item3];
myArray.shift();
console.log(myArray); output: [item2, item3]

(5) Concat() method: The concat method is used to merge an array with one or more other array or/and a value. It returns the new merged array. It does not modify the existing array. 
The concat method can accept one or more array and/or a value as a parameter.
const myArray1 = [item1, item2];
const myArray2 = [item3, item4];
const myArray3 = [item5, item6];

myArray1.concat(myArray2); //The returned value - [item1, item2, item3, item4]
myArray1.concat(myArray2, myArray3); //The returned value - [item1, item2, item3, item4, item5, item6]
myArray1.concat(item7); //The returned value - [item1, item2, item7]

(6) join() method: The join method joins all the elements of an array into a string. It has the option of taking a separator as a parameter and it returns the string.
const myArray = [item1, item2];
myArray.join(); // The return value - "item1,item2"
myArray.join("+"); // The return value - "item1+item2"

(7) Slice() method: This is used to extract a part of an array and it returns the part that has been extracted. It takes one or two arguments. The first argument is the start index which indicates the start index of the slicing and the second argument is the end index. It is inclusive of the start index but exclusive of the end index. When it has only one argument, it represents the start index and end at the end of the array.

(8) Splice() method: The splice method is used to remove, replace and/or insert an element/elements into an array. It modifies the existing array and returns the removed element. It can take between 1 to 3 parameters. The first parameter is required while the other two is optional.

SYNTAX
myArray.splice(startIndex); // The start index is the index where it starts changing the array from.
myArray.splice(startIndex, deleteCount) // The delete count is the number of items you want it to delete.

// We use three parameters when you want to insert
myArray.splice(startIndex, deleteCount, newItem) or myArray.splice(startIndex, deleteCount, newItem1, newItem2, ...)

*/

// Push Method
const listOfGroceries = ["chicken", "beef", "apples"];
console.log(listOfGroceries);
listOfGroceries.push("plantain", "rice");
console.log(listOfGroceries);

// Pop Method
const removedItem = listOfGroceries.pop();
console.log(removedItem);
console.log(listOfGroceries);

// Unshift method
listOfGroceries.unshift("milk");
console.log(listOfGroceries);

// Shift Method
listOfGroceries.shift();
console.log(listOfGroceries);

// Concat Method
const numbers = [1, 2, 3, 4, 5];
const alphabets = ["a", "b", "c", "d", "e"];

const concat1 = numbers.concat(alphabets);
console.log(concat1);

const concat2 = numbers.concat(alphabets, listOfGroceries);
console.log(concat2);

const concat3 = numbers.concat(alphabets, 10, "f", "g");
console.log(concat3);

// Join Method
const joinedList = listOfGroceries.join();
console.log(joinedList);

const joinedList1 = listOfGroceries.join(" + ");
console.log(joinedList1);

// Slice Method
const slicedArray = listOfGroceries.slice(0, 2);
console.log(slicedArray);

const slicedArray1 = listOfGroceries.slice(1);
console.log(slicedArray1);

// Splice Method
const favoriteColors = ["blue", "gold", "yellow", "green", "violet", "grey", "white"];
console.log(favoriteColors);
favoriteColors.splice(5);
console.log(favoriteColors);

favoriteColors.splice(1, 2);
console.log(favoriteColors);

favoriteColors.splice(1, 0, "gold", "yellow");
console.log(favoriteColors);

favoriteColors.splice(1, 1, "red");
console.log(favoriteColors);

/* 
Sorting Method In Arrays

(1) reverse() Method: It is used to reverse the order of an array. The first element becomes the last and the last becomes the first. It modifies the original array.

const myArray = [item1, item2, item3];
myArray.reverse(); // [item3, item2, item1]

(2) toReversed() Method: It is similar to the reverse method, but it does not modify the original array. It returns the reversed array.

const myArray = [item1, item2, item3];
const newArray = myArray.toReversed();
console.log(newArray) // [item3, item2, item1]

(3) sort() method: It is used to sort the elements of an array. By default, it sorts an array in ascending order - with the smallest value sorted first and the largest value sorted last. It modifies the array.

Parameters
(a) no parameter( sort() )
    When the sort method is called without a parameter, the elements of the array are first converted to a string then they are compared based on their UTF-16 code value.

(b) compare callback function
    It helps us to determine the order of the elements. It accepts two arguments - the first argument is the first element to be compared and the second argument is the second element to be compared.

    ====> Method 1 <====
    const compare = (a, b) => {
            return a - b;
        }
    myArray.sort(compare);

    ====> Method 2 <====
    myArray.sort((a, b) => a - b); // ascending order
    myArray.sort((a, b) => b - a); // descending order

    This function can return one of three different values: 
    - a negative value which means a is smaller than b, so a comes before b. 
    - a zero value indicates that both values are equal and should remain as it is.
    - a positive value which means that b is smaller than a and b should come before a.


Shuffling an Array Using the Sort Method
myArray.sort(() => Math.random() - 0.5);
*/

const myArray = ["fruits", "milk", "cream", "monitor"];
myArray.reverse();
console.log(myArray);

const evenNumbers = [2, 4, 6, 8, 10];
const reversedNumbers = evenNumbers.toReversed();
console.log(reversedNumbers);
console.log(evenNumbers);

const randomWords = ["great", "excellent", "awesome", "fantastic", "appealing"];
const randomNumbers1 = [1, 9, 2, 7, 3, 6];
const randomNumbers2 = [5, 90, 205, 156, 3000, 16];
console.log(`Array before sort:[ ${randomWords} ]`);
randomWords.sort();
console.log(`Array after sort:[ ${randomWords} ]`);

console.log(`Array before sort:[ ${randomNumbers1} ]`);
randomNumbers1.sort();
console.log(`Array after sort:[ ${randomNumbers1} ]`);

console.log(`Array before sort:[ ${randomNumbers2} ]`);
randomNumbers2.sort((a, b) => a - b);
console.log(`Ascending Order:[ ${randomNumbers2} ]`);

console.log(`Array before sort:[ ${randomNumbers2} ]`);
randomNumbers2.sort((a, b) => b - a);
console.log(`Descending Order:[ ${randomNumbers2} ]`);

randomNumbers2.sort(() => Math.random() - 0.5);
console.log(`shuffled array: [${randomNumbers2}]`);


/* 
Iteration Method
(1) forEach() Method
    It is used to loop (iterate) through the element of an array and execute a specified function (callback function) on each element.

    Parameters
    The forEach method callback function takes 1 to 3 parameters.
    - 1 element(first parameter). This represents the current element being processed in the array.
    - 2 index: This represents the index number of the element being processed in the array.
    - 3 array: This represents the array that the forEach() was called on.

    SYNTAX
    function callback(element) {
        // code to be executed
    }
    myArray.forEach(callback);


    myArray.forEach((element) => {
            // code to be executed
        })

    myArray.forEach((element, index) => {
            // code to be executed
        })

    myArray.forEach((element, index, array) => {
            // code to be executed
        })


*/

const animals = ["dog", "cat", "goat", "fish", "elephant"];
animals.forEach((animal) => console.log(animal));

animals.forEach((animal, i, arr) => {
    console.log(`[${arr}] [${i}] = ${animal}`);
});

/* 
Map() Method
The map() method is used to loop through the elements of an array and executes a specific function on each element. It returns an array of the modfied elements

Parameters
It takes a callback function as a parameter and the callback function takes one to three parameters.

    - 1 element(first parameter). This represents the current element being processed in the array.
    - 2 index: This represents the index number of the element being processed in the array.
    - 3 array: This represents the array that the forEach() was called on.

Syntax
function callback(element) {
        // code to be executed
    }
    
    const newArray = myArray.map(callback);


    const newArray = myArray.map((element) => {
                    // code to be executed
                })

    const newArray = myArray.map((element, index) => {
                    // code to be executed
                })

    const newArray = myArray.map((element, index, array) => {
                    // code to be executed
                })

    =======> Read out filter and includes
*/

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = newNumbers.map(number => Math.pow(number, 2));
console.log(squaredNumbers);


/* 
====== For Of Loop =======

The For Of Loop
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Syntax
for (variable of iterable) {
  // code block to be executed
}

Square numbers without Array Methods

let x = [1, 2, 3];
let arr = [];

for (const num of x) {
    const answer = num ** 2;
    arr.push(answer);
}

console.log(arr);

or 

const numArray = [1, 2, 3, 4, 5, 6, 7];
let indexNum = 0;
for (const num of numArray){
    numArray[indexNum] = num ** 2;
    indexNum++; 
}
console.log(numArray);

*/

/* 
Objects

An object is a non primitive data type that is used to represent a thing (someone or something - animate or inanimate) that has its own set of properties (attributes (data) and behaviour or functionality (method)).

Creating an Object
An object is created using the object literal. It starts with declaring a variable that will hold our object and equating it to a set of curly braces that contains sets of name (key) / value pairs separated by a comma. It can also be initialized empty.

SYNTAX
keyword objectName = {} // initializing an empty object

keyword objectName = {
    name1: value1,
    name2: value2,
    name3: value3
} 

======> Name / Value <=========

Guidelines for Name
(1) The property names are case sensitive.
(2) It follows the same naming convention as JavaScript variables. 
(3) Each property name must be unique.
(4) When you're not following the typical JavaScript naming convention, the name must be enclosed in a quotation mark.

Guidelines for Values
(1) Our value can be any valid JavaScript data type

==== Method =====
A method is simply an action or a function that an object performs. 


Accessing the properties of an object
There are two ways to access the properties within an object;
(1) The dot notation
(2) The square bracket notation

Dot Notation
To access a property using the dot notation, you write the object name followed by a dot (period or fullstop) then the name of the property you want to access.
Syntax
objectName.name1

Square Bracket Notation
To access a property using the square bracket notation, you write the object name followed by a square bracket. Within the square bracket, write the property name enclosed in a quotation mark.
Syntax
objectName["name1"]

Modifying the Object Property
To modify an object property, we access the object and assign it to the new value.
objectName.name1 = value4

Adding a New Property
To add a new property, we call the object name and chain it to the new property name we are trying to create using either the dot notation or the square bracket notation and assign it to a value.
objectName.newName = newValue; 

Deleting a Property
We can delete a property from an object using the delete operator. This is done by putting the delete operator then accessing the property you want to delete.
syntax
delete objectName.name3

*/

const monitor = {
    brand: "Hp",
    size: 24,
    color: "black",
    "screen resolution": "1080px",
    hasCharger: true,
    onMonitor: function(){
        console.log("switch on the monitor");
    }
}
console.log(monitor);
console.log(typeof monitor);

// Accessing an object property
console.log(monitor.brand); // dot notation
console.log(monitor["brand"]); // square bracket notation
console.log(monitor["screen resolution"]); //square bracket notation

// modifying an object property
monitor.color = "grey";
console.log(monitor.color);
console.log(monitor);

// adding a new property
monitor.definition = true;
console.log(monitor);

// deleting an object property
delete monitor.definition;
console.log(monitor);

const student = {
    name: "Eudorah",
    age: 25,
    occupation: "Software Engineer",
    hobby: "Reading"
}

/* 
Nested Objects
A nested object is an object that contains another object as one of its properties. This structure is commonly used to organise related data in a heirachial format.

We can access an object nested within another object using either the dot notation or the square bracket notation. This is done by chaining the new child object and its value to the parent object. With this same method we can also modify the value of the nested object.

*/

const student1 = {
    name: "Ham",
    age: 30,
    hobby: "Reading",
    address: {
        street: "allen avenue",
        zipcode: 100001,
        city: "Ikeja",
        state: "Lagos"
    }
}

// Accessing a nested object
console.log(student1.address.street);

// Modifying a nested object
console.log(student1);
student1.address.zipcode = 101106;
console.log(student1);

student1.address["house number"] = 14;
console.log(student1);

const graduateSchool = {
    faculties: {
        Engineering: {
            "electrical engineering": {
                "course duration": "5 years",
                "degree obtained": "B.ENG"
            },
            "Mechanical Engineering": {
                "course duration": "5 years",
                "degree obtained": "B.ENG"
            },
            "Civil Engineering": {
                "course duration": "5 years",
                "degree obtained": "B.ENG"
            },
            "Chemical Engineering": {
                "course duration": "5 years",
                "degree obtained": "B.ENG"
            },
            "Computer Engineering": {
                "course duration": "5 years",
                "degree obtained": "B.ENG"
            }
        },
        "Social Sciences": {
            psychology: {
                "course duration": "4 years",
                "degree obtained": "BSC"
            },
            law: {
                "course duration": "5 years",
                "degree obtained": "BL"
            },
            history: {
                "course duration": "4 years",
                "degree obtained": "BSC"
            },
            "political science": {
                "course duration": "4 years",
                "degree obtained": "BSC"
            }
        },
        "Medical Sciences": ""
    }
}

console.log(graduateSchool.faculties.Engineering["Chemical Engineering"]["degree obtained"]);

graduateSchool.faculties["physical science"] = {
    biochemistry: {},
    astronomy: {},
    "industrial physics": {}
}

console.log(graduateSchool.faculties);

/* 
Arrays Within Objects
An array within an object is used to store multiple related items as a property of an object. This provides a good way to organise and access our data

*/

const car = {
    brand: {
        tesla: {
            models: ["Model S", "model 3", "model X", "model Y"]
        },
        mercedes: {
            models: ["GLE", "GLA", "GLS", "GLK", "GLT", "CLS"]
        },
        toyota: {
            models: ["camry", "corolla", "avensus", "venza", "landcruiser", "tundra"]
        }
    },
    color: "white"
}

console.log(car.brand.tesla.models);

console.log(car.brand.toyota.models[3]);

car.brand.toyota.models.push("sienna");

console.log(car.brand.toyota.models);

/* 
Objects within an array

An object within an array allows you to store multiple objects in a single array. This is useful for managing collections of related data where each item has its own set of properties. This way, it is easy to loop through and manipulate the collection using different array methods
*/

const cohort2Students = [
    {
        firstname: "Elizabeth",
        lastname: "Nduka", 
        hobby: "Working Out"
    },
    {
        firstname: "Chiemezie",
        lastname: "Uchenwoke", 
        hobby: "Reading"
    },
    {
        firstname: "Chinenye",
        lastname: "Ugwu", 
        hobby: "Traveling"
    },
    {
        firstname: "Emeka",
        lastname: "Edekobi", 
        hobby: "Reading"
    },
    {
        firstname: "Eudorah",
        lastname: "Ibiam", 
        hobby: "Traveling"
    }
];

console.log(cohort2Students[3].hobby);

cohort2Students.forEach((student) => {
    console.log(`My name is ${student.firstname} ${student.lastname} and my hobby is ${student.hobby}`);
});