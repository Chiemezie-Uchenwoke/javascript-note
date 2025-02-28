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


//HIGHER-ORDER FUNCTION
/* A higher-order function is a function that either takes another function as an argument or returns a function as its result or both.
This ability makes it extremely powerful, enabling more concise reuseable expressive code. 

CALLBACK FUNCTIONS
A callback function is a function that is passed as an argument to another function.

HOF TAKING A FUNCTION AS AN ARGUMENT:
A HOF can take one or more function as a parameter to control how it operates.
 */

function studentName(studentName) {
    return `Hello, ${studentName}`;
}

function studentMessage(sir) {
    return `Hope you had a good night rest ${sir}`;
}

function studentGreeting(callback, parr) {
    const callbackVar = callback(parr);
    console.log(`${callbackVar} Good morning.`)
}

studentGreeting(studentName, 'Ndubuisi');
studentGreeting(studentMessage, 'Ma');

// Creating a high-order function that can iterate over an array and perform a specific task.
function demoMap(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const callbackVar = callback(arr[i]);
        newArr.push(callbackVar);
    }
    return newArr;
}

const numberArray = [2, 4, 6, 8, 10];

function double(parr) {
    return parr*2;
}

console.log(demoMap(numberArray, double));
// Demonstrating using an arrow function inside the HOF call
console.log(demoMap(numberArray, (el) => el*el));

// HOF RETURNING A FUNCTION:
/* A HOF can return another function, allowing for the creation of dynamic functions.  */
function multiplier(factor) {
    return (num) => {
        return num*factor;
    }
}

const triple = multiplier(3);
console.log(triple(4));

// COMMON EXAMPLES OF HOF:
/* 1) Array method (forEach(), map(), filter(), reduce(), sort());
   2) Asynchronous operations (setTimeOut(), setInterval(), clearInterval())

   ADVANTAGES OF HOF:
   1) Reusability: you can create a generic logic, and reuse it by passing in different functions.
   2) Abstraction: they abstract away boilerplate code, letting you focus on what the function should do rather than how it does it.
   3) Composability: It allows combining of smaller functions to solve a complex problem.
   4) Modularity: It encourages separating concerns, leading to cleaner and more maintainable code.
*/

const student5 = {
    name: "mezie",
    occupation: "student",
    age: 20,
    bio: () => {
        return `My name is ${this.name}`
    }
}

/* console.log("code number 1");
    console.log("code number 1a");
    console.log("code number 1b");
    console.log("code number 1c");
    console.log("code number 1d");
    console.log("code number 1e");
    console.log("final value");
console.log("code number 2");
console.log("code number 3");
console.log("code number 4");
console.log("code number 5");
console.log("code number 6");
console.log("code number 7");
console.log("code number 8");
console.log("code number 9");
console.log("code number 10");

console.log("code number 1");
    console.log("code number 1a");-10secs
    console.log("code number 1b");-3secs
    console.log("code number 1c");-5secs
    console.log("code number 1d");-4secs
    console.log("code number 1e");-7secs
    console.log("final value");Total-29secs
console.log("code number 2");
    console.log("code number 2a");-100secs
    console.log("code number 2b");-150secs
    console.log("code number 2c");-180secs
    console.log("code number 2d");-220secs
    console.log("code number 2e");-400secs
    console.log("final value");Total-1050secs
console.log("code number 3");
    console.log("code number 3a");-1secs
    console.log("code number 3b");-1secs
    console.log("code number 3c");-1secs
    console.log("code number 3d");-1secs
    console.log("code number 3e");-1secs
    console.log("final value");Total-5secs
console.log("code number 4");
console.log("code number 5");
console.log("code number 6");
console.log("code number 7");
console.log("code number 8");
console.log("code number 9");
console.log("code number 10"); */


/* CALLBACK FUNCTION/ASYNCHRONOUS PROGRAMMING -  4TH FUNCTION TYPE
To understand callback functions, we would first need to understand asynchronous JavaScript.

The concept of Asynchronous JavaScript governs how JavaScript performs tasks that take time to complete.
    Examples of such tasks include:
         a - Requesting data from an external database
         b - Making a HTTP request
         c - Requesting data from an API

Every developer who builds an application in JavaScript will at one point or another, make use of
asynchronous JavaScript to perform these kinds of operations. 

Asynchronous JavaScript or code is a code that starts now and finishes later. To understand this, we need
to first understand Synchronous JavaScript. JavaScript was developed by default as a synchronous programming
language. This means that it executes its codes line by line; from top to bottom (sequentially).

Let us assume that JavaScript has these four(4) lines of codes below to execute:
         console.log ("Code 1")
         console.log ("Code 2")
         console.log ("Code 3")
         console.log ("Code 4")

Code 2 by default cannot start until Code 1 has fully executed. Code 3 cannot execute until Code 2 has finished
executing. JavaScript is also a single-threaded programming language. For example, every block of codes may
have multiple statements or threads. In executing that block of codes with many threads or statements, JavaScript
will have to execute each thread sequentially, line by line. This is the core of synchronous programming.

It looks simple but let us look further and imagine a more complex scenario. 
  Let us do so using the lines of codes above and more:
      console.log ("Code 1") - Add 4 + 3 - duration: half a second
      console.log ("Code 2") - GET/FETCH a music file from a 3rd party database (Sony Music) - duration: 30secs
      console.log ("Code 3") - Make a HTTP request/API call - duration: 45secs
      console.log ("Code 4") - Display a function value - duration: half a second
      console.log ("Code 5") - Display a web page - duration: 1/10th of a second
      console.log ("Code 6") - Activate a button - duration: half a second

The scenario above is typical. In synchronous programming, JavaScript will first execute Code 1 which takes
half a second, then when it gets to Code 2, which involves fetching a music file from a 3rd party database
(30 seconds duration), JavaScript will stall, will stay there and not proceed any further, until that file
 is fetched. This is despite the fact that it has no control over Sony Music's database.

This is known as Code Blocking bacause the stalling process blocks the next line of codes from running until
it completes the task of fetching the music file in Sony Music's database. This process could last 30 seconds
or more.


ASYNCHRONOUS PROGRAMMING
This is where asynchronous programming comes in. It is also where callback comes in. If we remember correctly,
we began by defining Asynchronous JavaScript as a code that starts now and finishes later. When we apply
asynchronous programming to the execution of the six (6) codes above, it means that JavaScript will not stall
when it gets to Code 2. It will simply assign the execution of that code to a callback function.

It is the callback function that takes up and completes the task later, when the music file is fetched from the
Sony Music database. 

SO HOW DOES THIS WORK PRACTICALLY? 

Once JavaScript gets to Code 2, it uses an asynchronous function to get to the music file. 
The browser simply takes the HTTP request and handles it outside of the scope of the code in another part 
of the browser. It also takes the callback function and puts it aside so that it knows and remembers to 
execute it, once the video request response comes back.

Because this asynchronous request is taken to another part of the browser for execution, JavaScript can continue
to the next statement and keep executing sequentially while the asynchronous request still goes on. 

Once it receives the music video from Sony Music's database, the callback function is called and executed. 
 
This is the core of asynchronous programming. It begins a task now and finishes it later. 

Unlike synchronous programming, asynchronous programming does not do CODE BLOCKING.
   
When executing the codes below asynchronously, this is the sequence of activities:
      console.log ("Code 1") - Add 4 + 3 - duration: half a second - executes synchronously
      console.log ("Code 2") - GET/FETCH a music file from a 3rd party database (Sony Music) - duration: 30secs
                                                       executes asynchronously - use a callback function here
      console.log ("Code 3") - Make a HTTP request/API call - duration: 45secs - executes asynchronously
                                                                               - use a callback function here
      console.log ("Code 4") - Display a function value - duration: half a second - executes synchronously
      console.log ("Code 5") - Display a web page - duration: 1/10th of a second - executes synchronously
      console.log ("Code 6") - Activate a button - duration: half a second - executes synchronously

When JavaScript outputs these results using asynchronous programming/callback functions, the output will
be made in the following order:
      1 - Code 1 - executed in sequence (1st in line of sequence)
      2 - Code 4 - executed in sequence (2nd in line of sequence)
      3 - Code 5 - executed in sequence (3rd in line of sequence)
      4 - Code 6 - executed in sequence (4th in line of sequence)
      5 - Code 2 (30 secs)
      6 - Code 3 (45 secs)


FOUR (4) METHODS TO EXECUTE ASYNCHRONOUS PROGRAMMING:
      1 - CALLBACK FUNCTION
      2 - NESTED (aka CALLBACK HELL or PYRAMID OF DOOM) FUNCTION
      3 - PROMISE (METHOD-CHAINING) FUNCTION
      4 - ASYNC/AWAIT (programs asynchronous codes in easy synchronous manner) FUNCTION


CALLBACK FUNCTION - ASYNCHRONUS PROGRAMMING 1
So what is a callback function?

A callback function is a function that is passed as an argument to another function. 
It is used to handle asynchronous operations.

For example:
      1 - reading a file
      2 - interacting with databases
      3 - making network or HTTP requests


DEMONSTRATION OF HOW A CALLBACK FUNCTION WORKS */

// EXAMPLE 1 - SYNCHRONOUS PROGRAMMING
console.log ("Hello");   // execution time: half a second
console.log ("My name is Turing Tech");   // execution time: 1/10th of a second
console.log ("Tell me your name?");    // execution time: half a second
console.log ("Tell me your address?");     // execution time: 1/10th of a second
console.log ("Tell me the name of your CEO?");   // execution time: half a second


// EXAMPLE 2 - ASYNCHRONOUS PROGRAMMING
console.log ("My name is Turing Tech");   // execution time: 1/10th of a second
console.log ("Tell me your address?");     // execution time: 1/10th of a second

// setTimeout (()=>{
//     console.log ("Tell me your name?");   // execution time: 15 secs (15000 millisecs)
// }, 15000)

console.log ("Hello");   // execution time: half a second
console.log ("Tell me the name of your CEO?");   // execution time: half a second


// EXAMPLE 3 - ASYNCHRONOUS PROGRAMMING
console.log ("What is your name?");   // execution time: 1/10th of a second
console.log ("How much is your tunover?");     // execution time: 1/10th of a second

// setTimeout (() => {
//     console.log ("What is your business here?");   // execution time: 20 secs (or 20000 millisecs)
// }, 20000)

console.log ("Who are you?");   // execution time: half a second
console.log ("What's your mission statement?");   // execution time: half a second

/* - Note from the above examples that the callback function is triggered and timed.
   - The callback function loads only when the set time elapses. Eg 15secs (15000), 22secs (22000), etc. 

   - The setTimeout is a method used to invoke the callback function.

   - JavaScript converts execution times to milliseconds. E.g 15 seconds is coverted to 15000 milliseconds
                                                              20 seconds is coverted to 20000 milliseconds

   - setTimeout (()=>{
        console.log ("")  - The setTimeout method sets a timer to execute a function once the timer expires
     }, 20000)                  This demonstrates the callback function and asynchronous programming

   - In EXAMPLE 3 above, "What is your business here?" defaults to asynchronous programming by using a 
     setTimeout method to set the execution time of code3 beyond the execution times of codes 4 and 5

   - Notice that no code blocking is involved in asynchronous programming and there was no delay in the 
     execution of other codes that have shorter execution times.    */


/* A TYPICAL INDUSTRY TYPE CALLBACK SCENARIO 
A typical callback scenario could involve 20 to 100 different operations, many of them nested inside their
preceding functions; each function calling back the preceding function. 

This typically creates a complex scenario that can drag and stall a program.

Such nested callback functions might create a scenario which in JavaScript is called CALLBACK HELL.

When CALLBACK HELL occurs in JavaScript, the way out of it is to use what is called a PROMISE SYNTAX.

We will look at Promises later but first of all, let us describe a typical callback hell scenario:
      Task 1 - Fetch 10 videos from Netflix
      Task 2 - Add the 10 videos to the list of items in the landing page
      Task 3 - Notify Sales and Admin
      Task 4 - Let Quality Control check the content of the video and approve before use
      Task 5 - Let Sales display the goods only after approval from Quality Control
      Task 6 - Let the CEO give approval before the display of items
      Task 7 - Notify the Board when it is over

Notice from the above that Task 7 is dependent on Task 6 being completed and Task 6 is dependent om task 5
before it begins. Task 5 itself has to wait for Task 4 while Task 4 is waiting for Task 3 to be completed.
Task 3 waits for Task 2 which itself waits for Task 1.

When these tasks are programmed asynchronously, they could get messy. It is called CALLBACK HELL. 
It is one of the critical challenges that callback functions suffer from. 
This is because each task is nested inside the preceeding one, from Task 7 right up to Task 1.

The concept of PROMISES helped stop the above challenge. We will look at promises in the next class, but let
us first of all, try coding a nested callback function. Let us simulate how it works.

We will start by first coding the nested functions synchronously after which we will render the same codes
asynchronously using the callback functions. Note that most of the tasks above involve making HTTP requests
or HTTP calls in order to gain access to databases outside the programmers control.

Let us use normal functions to capture these 7 tasks.   

Let us use normal functions to capture these 7 tasks.    */


// EXAMPLE 1 - CAPTURING CALLBACK FUNCTIONS USING SYNCHRONOUS CODING
function task1(){
    console.log("Fetch 10 videos from Netflix");
}
task1();


function task2 (){
    console.log("Add the 10 videos to the list of items in the landing page");
}
task2 ();


function task3 (){
    console.log("Notify Sales and Admin");
}
task3 ();


function task4 (){
    console.log("Let Quality Control check the content of the video and approve before use");
}
task4 ();


function task5 (){
    console.log("Let Sales display the goods only after approval from Quality Control");
}
task5 ();


function task6 (){
    console.log("Let the CEO give approval before display of items");
}
task6 ();


function task7 (){
    console.log("Notify the Board when it is over");
}
task7 ();



/* EXAMPLE 2a - PERFORMING SIMILAR TASKS VIA NESTED CALLBACK FUNCTIONS   */

function myTask1 (callback){
    setTimeout (()=>{
        console.log("Fetch 20 videos from Netflix");
        callback();
    }, 100)
}


function myTask2 (callback){
    setTimeout (()=>{
        console.log("Add the 20 videos to the list of items in the landing page");
        callback();
    }, 300)
}


function myTask3 (callback){
    setTimeout (()=>{
        console.log("Notify Sales and Admin again");
        callback();
    }, 500)
}


function myTask4 (callback){
    setTimeout (() =>{
        console.log("Let Quality Control check the content of the video and approve before use again");
        callback();
    }, 700)
}


function myTask5 (callback){
    setTimeout (() =>{
        console.log("Let Sales display the goods only after approval from Quality Control again");
        callback();
    }, 900)
}


function myTask6 (callback){
    setTimeout (() =>{
        console.log("Let the CEO give a 2nd approval before display of items");
        callback();
    }, 1100)
}


function myTask7 (callback){
    setTimeout (() =>{
        console.log("Notify the Board again when it is completed");
        callback();
    }, 1300)
}

/* The above callback functions are merely declared but not yet called.
  
   To call a callback function:  
        1 - call the function name of the 1st task
        2 - Nest the 2nd task to the first using an arrow key
        3 - Nest the 3rd to the 2nd using an arrow key
        4 - Repeat until the final action is nested
        5 - console.log the last action and declare its instructions
        6 - Display the results   */

// NESTED FUNCTION (CALLBACK HELL or PYRAMID OF DOOM) - ASYNCHRONOUS PROGRAMMING 2
myTask1 (() =>{
    myTask2 (() =>{
        myTask3 (() =>{
            myTask4 (() =>{
                myTask5 (() =>{
                    myTask6 (() =>{
                        myTask7 (() => console.log("Notify the Board again when it is completed"));
                    })
                })
            })
        })
    })
})

// Class Example 2b - Nested Vacation
/* 
Step 1: Decide on where to go for vacation
Step 2: Apply for and obtain visa 
Step 3: Estimated cost of the vacation
Step 4: Reservation for flight and accomodation
Step 5: Departure date
Step 6: Enjoy the vacation
Step 7: Return date
*/

// Demonstration
function myVacation1 (callback){
    setTimeout (()=>{
        console.log("Decide on where to go for vacation");
        callback();
    }, 50)
}


function myVacation2 (callback){
    setTimeout (()=>{
        console.log("Apply for and obtain visa");
        callback();
    }, 100)
}

function myVacation3 (callback){
    setTimeout (()=>{
        console.log("Estimated cost of the vacation");
        callback();
    }, 150)
}


function myVacation4 (callback){
    setTimeout (()=>{
        console.log("Reservation for flight and accomodation");
        callback();
    }, 200)
}

function myVacation5 (callback){
    setTimeout (()=>{
        console.log("Departure date");
        callback();
    }, 250)
}

function myVacation6 (callback){
    setTimeout (()=>{
        console.log("Enjoy the vacation");
        callback();
    }, 300)
}


function myVacation7 (callback){
    setTimeout (()=>{
        console.log("Return date");
        callback();
    }, 350)
}

myVacation1 (() =>{
    myVacation2 (() => {
        myVacation3 (() => {
            myVacation4 (() => {
                myVacation5 (() => {
                    myVacation6 (() => {
                        myVacation7 (() => {
                            console.log("Return date");
                        })
                    })
                })
            })
        })
    })
})

// 

// Class Example 2c - Nested - Cloth Design
/* 
Step 1: Design selection
Step 2: Sourcing for fabric
Step 3: Taking measurement
Step 4: Cutting of the fabric
Step 5: Start sewing
Step 6: Fitness check
Step 7: Make adjustments
Step 8: Fitness recheck
Step 9: Job completed
Step 10: Packaging and delivery
Step 11: Payment received
Step 12: Customer review
*/

// Demonstration
function clothDesign1 (cohort){
    setTimeout (()=>{
        console.log("Design selection");
        cohort();
    }, 400)
}

function clothDesign2 (cohort){
    setTimeout (()=>{
        console.log("Sourcing for fabric");
        cohort();
    }, 450)
}

function clothDesign3 (cohort){
    setTimeout (()=>{
        console.log("Taking measurement");
        cohort();
    }, 500)
}

function clothDesign4 (cohort){
    setTimeout (()=>{
        console.log("Cutting of the fabric");
        cohort();
    }, 550)
}

function clothDesign5 (cohort){
    setTimeout (()=>{
        console.log("Start sewing");
        cohort();
    }, 600)
}

function clothDesign6 (cohort){
    setTimeout (()=>{
        console.log("Fitness check");
        cohort();
    }, 650)
}

function clothDesign7 (cohort){
    setTimeout (()=>{
        console.log("Make adjustments");
        cohort();
    }, 700)
}

function clothDesign8 (cohort){
    setTimeout (()=>{
        console.log("Fitness recheck");
        cohort();
    }, 750)
}

function clothDesign9 (cohort){
    setTimeout (()=>{
        console.log("Job completed");
        cohort();
    }, 800)
}

function clothDesign10 (cohort){
    setTimeout (()=>{
        console.log("Packaging and delivery");
        cohort();
    }, 850)
}

function clothDesign11 (cohort){
    setTimeout (()=>{
        console.log("Payment received");
        cohort();
    }, 900)
}

function clothDesign12 (cohort){
    setTimeout (()=>{
        console.log("Customer review");
        cohort();
    }, 950)
}

clothDesign1 (() =>{
    clothDesign2 (() => {
        clothDesign3 (() => {
            clothDesign4 (() => {
                clothDesign5 (() => {
                    clothDesign6 (() => {
                        clothDesign7 (() => {
                            clothDesign8 (() => {
                                clothDesign9 (() => {
                                    clothDesign10 (() => {
                                        clothDesign11 (() => {
                                            clothDesign12 (() => console.log("Customer review"))
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

//  2d - Grocery Shopping
/* 
    Step 1: Make a list of items
    Step 2: Write out the prices
    Step 3: Get an estimate 
    Step 4: Decide on where to go
    Step 5: Drive to the location
    Step 6: Do the shopping
    Step 7: Make payment
    Step 8: Return home
*/

function grocery1 (callback){
    setTimeout (()=>{
        console.log("Make a list of items");
        callback();
    }, 50)
}
function grocery2 (callback){
    setTimeout (()=>{
        console.log("Write out the prices");
        callback();
    }, 100)
}
function grocery3 (callback){
    setTimeout (()=>{
        console.log("Get an estimate");
        callback();
    }, 150)
}
function grocery4 (callback){
    setTimeout (()=>{
        console.log("Decide on where to go");
        callback();
    }, 200)
}
function grocery5 (callback){
    setTimeout (()=>{
        console.log("Drive to the location");
        callback();
    }, 250)
}
function grocery6 (callback){
    setTimeout (()=>{
        console.log("Do the shopping");
        callback();
    }, 300)
}
function grocery7 (callback){
    setTimeout (()=>{
        console.log("Make payment");
        callback();
    }, 350)
}
function grocery8 (callback){
    setTimeout (()=>{
        console.log("Return home");
        callback();
    }, 400)
}

grocery1 (() => {
    grocery2(() => {
        grocery3(() => {
            grocery4(() => {
                grocery5 (() => {
                    grocery6(() => {
                        grocery6(() => {
                            grocery7(() => {
                                grocery8(() => {
                                    console.log("Return home");
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

// Example 2e Grocery Shopping using Method Chaining / Promise - Resolve only
function grocery9 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Make a list of items");
        }, 10000)
    })
}
grocery9()
    .then()


// Example using promises:

function clothDesign13 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Design selection");
        }, 10000)
    })
}

function clothDesign14 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Sourcing for fabric");
        }, 15000)
    })
}

function clothDesign15 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Taking measurement");
        }, 18000)
    })
}

function clothDesign16 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Cutting of the fabric");
        }, 20000)
    })
}

function clothDesign17 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Start sewing");
        }, 22000)
    })
}

function clothDesign18 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Fitness check");
        }, 24000)
    })
}

function clothDesign19 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Make adjustments");
        }, 26000)
    })
}

function clothDesign20 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Fitness recheck");
        }, 28000)
    })
}

function clothDesign21 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Job completed");
        }, 30000)
    })
}

function clothDesign22 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Packaging and delivery");
        }, 32000)
    })
}

function clothDesign23 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Payment received");
        }, 34000)
    })
}

function clothDesign24 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Customer review");
        }, 36000)
    })
}

clothDesign13().then(value=>{console.log(value);return "Sourcing for fabric"})
             .then(value=>{console.log(value);return "Taking measurement"})
             .then(value=>{console.log(value);return "Cutting of the fabric"})
             .then(value=>{console.log(value);return "Start sewing"})
             .then(value=>{console.log(value);return "Fitness check"})
             .then(value=>{console.log(value);return "Make adjustments"})
             .then(value=>{console.log(value);return "Fitness recheck"})
             .then(value=>{console.log(value);return "Job completed"})
             .then(value=>{console.log(value);return "Packaging and delivery"})
             .then(value=>{console.log(value);return "Payment received"})
             .then(value=>{console.log(value);return "Customer review"})
             .then(value=>{console.log(value);console.log ("Task Completed")});




// EXAMPLE 3A - CAPTURING 12 NESTED CALLBACK FUNCTIONS USING SYNCHRONOUS CODING
function prepareFood1 (){
    console.log ("Purchase vegetables");
}
prepareFood1 ();


function prepareFood2 (){
    console.log ("Wash the vegetables");
}
prepareFood2 ();


function prepareFood3 (){
    console.log ("Chop the vegetables");
}
prepareFood3 ();


function prepareFood4 (){
    console.log ("Boil the vegetables");
}
prepareFood4 ();


function prepareFood5 () {
    console.log ("Mix the vegetables with salt");
}
prepareFood5 ();


function prepareFood6 () {
    console.log ("Add pepper to the vegetables");
}
prepareFood6 ();


function prepareFood7 () {
    console.log ("Add water to the vegetables");
}
prepareFood7 ();


function prepareFood8 () {
    console.log ("Stir the vegetable mix");
}
prepareFood8 ();


function prepareFood9 () {
    console.log ("Boil the vegetable mix");
}
prepareFood9 ();


function prepareFood10 () {
    console.log ("Put off the stove");
}
prepareFood10 ();


function prepareFood11 () {
    console.log ("Serve the meal");
}
prepareFood11 ();


function prepareFood12 () {
    console.log ("Eat the meal");
}
prepareFood12 ();



// EXAMPLE 3B - CAPTURING 12 NESTED CALLBACK FUNCTIONS USING ASYNCHRONOUS CODING
function myPreparedFood1 (callback){
    setTimeout (()=>{
        console.log("Buy the vegetables");
        callback ();
    }, 6400)
}


function myPreparedFood2 (callback) {
    setTimeout (()=>{
        console.log("Wash the vegetables thoroughly");
        callback ();
    }, 200)
}


function myPreparedFood3 (callback) {
    setTimeout (() =>{
        console.log("Chop vegetables very well");
        callback ();
    }, 400)
}


function myPreparedFood4 (callback) {
    setTimeout (() =>{
        console.log("Boil the vegetables for 10 mins only");
        callback ();
    }, 600)
}


function myPreparedFood5 (callback) {
    setTimeout (() =>{
        console.log("Add a little salt to the vegetables");
        callback ();
    }, 800)
}


function myPreparedFood6 (callback){
    setTimeout (() =>{
        console.log("Mix the vegetables with a little pepper");
        callback ();
    }, 1000)
}


function myPreparedFood7 (callback){
    setTimeout (() =>{
        console.log("Add about 1 litre of water");
        callback ();
    }, 1200)
}


function myPreparedFood8 (callback) {
    setTimeout (() =>{
        console.log("Stir well");
        callback ();
    }, 1400)
}


function myPreparedFood9 (callback){
    setTimeout (()=>{
        console.log("Boil the vegetable mix");
        callback ();
    }, 1600)
}


function myPreparedFood10 (callback){
    setTimeout (()=>{
        console.log("Turn off the stove");
        callback ();
    }, 1800)
}


function myPreparedFood11 (callback){
    setTimeout (()=>{
        console.log("Dish the cooked vegetables");
        callback ();
    }, 2000)
}


function myPreparedFood12 (callback){
    setTimeout (()=>{
        console.log("Bon Appetit");
        callback ();
    }, 2200)
}


myPreparedFood1 (() =>{
    myPreparedFood2 (() =>{
        myPreparedFood3 (() =>{
            myPreparedFood4 (() =>{
                myPreparedFood5 (() =>{
                    myPreparedFood6 (() =>{
                        myPreparedFood7 (() =>{
                            myPreparedFood8 (() =>{
                                myPreparedFood9 (() =>{
                                    myPreparedFood10 (() =>{
                                        myPreparedFood11 (() =>{
                                            myPreparedFood12 (() => console.log("Clear the table"));
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })



// EXAMPLE 4A - CAPTURING NESTED CALLBACK FUNCTIONS USING SYNCHRONOUS CODING - CLASS WORK
function looseHair (){
    console.log ("Loose your hair")
}
looseHair ();


function washHair (){
    console.log ("Wash your hair")
}
washHair ();


function blowHair (){
    console.log ("Blow your hair")
}
blowHair ();


function dryHair (){
    console.log ("Dry your hair")
}
dryHair ();


function straightHair (){
    console.log ("Straight your hair")
}
straightHair ();


function braidHair (){
    console.log ("Braid your hair")
}
braidHair ();
             


// EXAMPLE 4B - CAPTURING NESTED CALLBACK FUNCTIONS USING ASYNCHRONOUS CODING
function looseTheHair (callback) {
    setTimeout (() =>{
        console.log("Loose the hair properly");
        callback ();
    }, 21100)
}
  

function washTheHair (callback) {
    setTimeout (() =>{
        console.log("Wash the hair thoroughly");
        callback ();
    }, 200)
}


function blowTheHair (callback) {
    setTimeout (() =>{
        console.log("Blow the hair well");
        callback ();
    }, 400)
}


function dryTheHair (callback) {
    setTimeout (() =>{
        console.log("Dry the hair well");
        callback ();
    }, 600)
}


function straightTheHair (callback) {
    setTimeout (() =>{
        console.log("Straighten the hair");
        callback ();
    }, 800)
}


function braidTheHair (callback) {
    setTimeout (() =>{
        console.log("Braid the hair meticulously");
        callback ();
    }, 1000)
}


looseTheHair (() =>{
    washTheHair (() =>{
        blowTheHair (() =>{
            dryTheHair (() =>{
                straightTheHair (() =>{
                    braidTheHair (() => console.log ("Braid the hair meticulously"));
                })
            })
        })
    })
})

// 



/* PROMISES (METHOD CHAINING) - ASYNCHRONOUS PROGRAMMING 3
In web development, it is typically the job of the web developer to manage asynchronous operations that
lead to callback hell. When developers continued to have problems with callback hell, the idea of
promises was developed to remove the complications embedded in nested asynchronous codes.

A PROMISE in JavaScript is an assurance that something will be done to deal with repetitive callbacks.
That thing that will be done will either resolve or not resolve the issue at stake. Whatever the results
might be, the promise syntax will display that for the user to see and therefore resolve the asynchronous
delay.

A promise is therefore an object that manages asynchronous operations, for example:
     - Query a database
     - Obtain data from a target database
     - Fetch a file
     - etc

These operations typically take an indeterminate amount of time. To deal with this therefore, a developer
can wrap a promise object around asynchronous code. So what does a promise do?

A promise is used to keep track of an asynchronous event:
     - Has it been executed?
     - Has it not been executed?
     - If it has been executed, has the next activity followed right through?

A promise has four (4) states namely:
     1 - RESOLVED or FULFILLED; Has the promise been executed?
     2 - REJECTED; Has the action related to the promise failed?
     3 - PENDING; Is the promise still pending?
     4 - SETTLED; Has the promise been fulfilled or rejected?

A promise can be created using a 'promise' constructor

     - When a promise object promises to return a value, that object will be PENDING. 

     - If a promise is executed successfully, It IS RESOLVED. 

     - If a promise fails, it is REJECTED.

What are the things that can cause a promise to fail?:
     1 - Maybe it could not fetch the file for whatever reasons
     2 - Maybe the database does not exist anymore
     3 - Maybe the network is down
     4 - Maybe that file has been deleted from the database
     5 - Etc

A promise handles all of these usually using two (2) parameters:
     1 - RESOLVE
         or
     2 - REJECT

Let us look at a typical syntax for a PROMISE. We can use a variable or a function.   */

// LET'S START WITH A NESTED FUNCTION/CALLBACK HELL.
function performOps1 (callback){
    setTimeout (()=>{
        console.log ("Search for Netflix database");
        callback();
    }, 25600)
}

function performOps2 (callback){
    setTimeout (()=>{
        console.log ("Located the Netflix database");
        callback();
    }, 200)
}

function performOps3 (callback){
    setTimeout (()=>{
        console.log ("Found the video files in the database");
        callback();
    }, 400)
}

function performOps4 (callback){
    setTimeout (()=>{
        console.log ("Downloaded the video files");
        callback();
    }, 600)
}

function performOps5 (callback){
    setTimeout (()=>{
        console.log ("Organise the downloaded files into an array");
        callback();
    }, 800)
}

function performOps6 (callback){
    setTimeout (()=>{
        console.log ("Uploaded the arrayed files");
        callback();
    }, 1000)
}

function performOps7 (callback){
    setTimeout (()=>{
        console.log ("Went live");
        callback();
    }, 1200)
}

performOps1 (()=>{
    performOps2 (()=>{
        performOps3 (()=>{
            performOps4 (()=>{
                performOps5 (()=>{
                    performOps6 (()=>{
                        performOps7 (()=> console.log("Went live but network crashed"));
                    })
                })
            })
        })
    })
})

/* Note from the above examples that we have nested 7 asynchronous callback codes and called the functions
using callback hell. Now let us avoid callback hell and use promises instead. We are going to wrap all the
asynchronous codes with a promise. Instead of using callbacks, we will use a system known as METHOD-CHAINING.

In other words, we will method-chain our promises. At the end of each object, we will return a new promise
object with resolve and reject options.  */



/* Named functions, Unnamed (Anonymous or UnHoisted) Functions as well as Arrow Functions are all executed by the browser and JavaScript in a SYNCHRONOUS manner.

Named Functions are also known as Hoisted Functions.

This is because the function is named at the point of initialization so it is stored in the system with its name. This is known as HOISTING.

Unnamed Functions are declared using a variable and so their names are not stored as functions names but as variable names.

So when they are to be called, they are called anonymously, using the variables names
This is what makes them anonymous

It is also what makes them UNHOISTED

They are UNHOISTED because their function names are not stored at initialization.

Note that JavaScript is an event-driven and a SYNCHRONOUS Scripting Language.

It is event-driven because its behavior is driven by 2 major event types
Events initiated from a mouse

2. Events initiated from a keyboard

Examples of keyboard-driven events include
Press Enter Key
Press Space Key
Key Down
Key Press
Etc

Examples of Mouse -driven events include
hover
click
double click
Etc


JavaScript is also a SyYNCHRONOUS Language

By "synchronous", we mean that JavaScript executes its code in a sequential and a linear manner

If there are 10 lines of code, JavaScript will firsty, execute code in line 1, before proceeding to line 2. It will finish executing code in line 2 before proceeding code in line 3. And it will continue to execute every line of code in a sequential or linear until it gets to code in line 10

Then it stops.

This method of execution of code is beautiful and predictive. It is also logical and sequential

However, in real life, code execution does not play out that sequentially.

Code 1 might take 2 seconds to execute while code 2 takes 5 seconds to execute. Code 3 might take 1000 seconds to execute. 1000 seconds is a long time in programming.

What this means is that code 4, 5, 6, 7, 8, 9 and 10 will wait for 1000 seconds before they can be executed.

This blocks code 4 and others after it from being executed in a timely manner.

It is known as Code Blocking.

In other words, Synchronous programming creates a problem known as CODE BLOCKING.

To solve that problem, programmers created a new type of function known as CALL BACK FUNCTION.

Using Call Back Functions, JavaScript programmers are able to bypass the delay that code number 3 would cause

The call function simply transfers the code execution in line 3 to another part of the browser

And enables JavaScript to proceed to code number 4.

Anytime that code number 3 finishes executing, the call back function will call itself and notify the browser / JavaScript and the result will instantly be added to the code output.

Using callback functions, JavaScript i able to solve the problem of code blocking brought about by synchronous programming.

The process whereby JavaScript temporarily suspends its linear code execution to transfer a line of code to another pRT OF THE BROWSER TO EXECUTE IS KN OWN AS asynchronous programming.

Asynchronous Programming solved the problem of Code Blocking.

Call Back, because of its asynchronous approach to code execution had helped solve a major problem

But is also created a new one one

For Example
Assuming we have the following lines of code to execute
1. Go to the house
2. Clean the house
3. Arrange the furniture
4. Wash the dishes
5. Clean the floor
6. Leave the house
7. Lock the door of the house
8. Return the key to me

The above example demonstrates a series of activities or functions each of which is dependent on the other for execution
For example 
Code 1 - go to the house is the first code.
Code 2 - Clean the house, cannot be executed until the primary actor goes to the house
In other words, code 2 is dependent or nested inside of code 1
Code 3 is nested inside of code 2
Code 4 is nested inside of code 3 etc

So as great as Call back functions are, they are not structured to deal with Nested Functions.

Sometimes, there could be as many as 2000 nested functions, each one nested inside its preceeding one.

This created a new kind of problem which CALLBACK functions are incapable of solving.

The problem created by nested functions in call back is known in JavaScript as CALL BACK HELL. It is also called PYRAMMID OF DOOM. 

Callback Hell / Pyramid of Doom was such a big problem for JavaScript programmers because of bugs and endless loops created when JavaScript is forced to execute codes that sit inside of codes which themselves, are nested inside of preceding lines of code.

To solve this problem, JavaScript programmers created a new solution called PROMISES.

Promises helped to solve the problem of callback hell/ Pyramid of doom. It did so by giving JavaScript the option to either RESOLVE a code execution problem or to REJECT executing the code because it could not obtain the required data or file. In other words, JavaScript, through promises, is faced with a Boolean or Binary choice - RESOLVE if the option is true or REJECT if the option is false.

When the function / variable that is created is called, it uses an approach / syntax called METHOD-CHAINING. Through this method, the entire process of callback hell / Pyramid of doom is bypassed and the problem is solved.

A promise in JavaScript is like a proxy for a value that is not known when it is created. It is an object
that represents the eventual resolution or rejection of an asynchronous operation and its resulting value.

Promises can either be:
     1 - Resolve
         or
     2 - Reject

Sometimes, promises are resolved through a process known as METHOD CHAINING.
Method Chaining is a method used in JavaScript to write more concise, more readable and shorter codes.
In Method Chaining, we call separate methods of a simple object like a chain without asigning the same object.

Method Chaining works well when we use asynchronous functions with promises. 

PROMISES can be coded using:
      1 - then
      2 - catch
      3 - finally

These are methods used to associate further actions with promises that are become settled.

The 'then' method takes up to two (2) arguments:
      1 - A callback function for the fulfilled case of the promise (resolve)
      2 - A callback function for the rejected case of the promise (reject)

The 'catch' or 'finally' methods call 'then' internally and makes error handling less verbose. 
In other words, a 'catch' is really a 'then' method but without passing the fulfillment handle. 

If the initial promise is fulfilled, the fulfilment handler (resolve) is called with the fulfillment value. 
If the initial value is rejected, the rejection handler (reject) is called with the rejection reason.
 */
/* 
Activities / Steps - Preparing for an Exam:
(1) Decide on the choice of exam
(2) Obtain the syllabus
(3) Purchase of books
(4) Study
(5) Review and answer past questions
(6) Test yourself
(7) Decide if you're ready
(8) Perform final review
(9) Sit for the exam
(10) Obtain result

*/


// EXAMPLE 1a (PROMISES) - USING ONLY THE RESOLVE PROMISE OPTION, DECLARING AND CALLING ALL THE TEN FUNCTIONS USING METHOD CHAINING
function examPrep1 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Decide on the choice of exam1");
        }, 100)
    })
}

function examPrep2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Obtain the syllabus1");
        }, 150)
    })
}

function examPrep3 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Purchase books1");
        }, 200)
    })
}

function examPrep4 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Study1");
        }, 250)
    })
}

function examPrep5 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Review and answer past questions1");
        }, 300)
    })
}

function examPrep6(){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Test yourself1");
        }, 350)
    })
}

function examPrep7(){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Decide if you're ready1");
        }, 400)
    })
}

function examPrep8(){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Perform final review1");
        }, 400)
    })
}

function examPrep9(){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Sit for Exam1");
        }, 400)
    })
}
function examPrep10(){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Obtain result1");
        }, 400)
    })
}

examPrep1().then(value=>{console.log(value);return "Obtain the syllabus1"})
             .then(value=>{console.log(value);return "Purchase of books1"})
             .then(value=>{console.log(value);return "Study1"})
             .then(value=>{console.log(value);return "Review and answer past questions1"})
             .then(value=>{console.log(value);return "Test yourself1"})
             .then(value=>{console.log(value);return "Decide if you're ready1"})
             .then(value=>{console.log(value);return "Perform final review1"})
             .then(value=>{console.log(value);return "Sit for Exam1"})
             .then(value=>{console.log(value);return "Obtain result1"})
             .then(value=>{console.log(value);console.log ("Task Completed")});

/* In above example, examPrep1 points to examPrep2 and renders a new message "Obtain the syllabus"
                     examPrep2 points to examPrep3 and renders a new message "Purchase of books"
                     examPrep3 points to examPrep4 and renders a new message "Study"
                     examPrep4 points to examPrep5 and renders a new message "Review and answer past questions"
                     examPrep5 points to examPrep6 and renders a new message "Test yourself"
                     examPrep6 points to examPrep7 and renders a new message "Decide if you're ready"   
                     examPrep7 points to examPrep8 and renders a new message "Perform final review"   
                     examPrep8 points to examPrep9 and renders a new message "Sit for Exam"   
                     examPrep9 points to examPrep10 and renders a new message "Obtain result"
                     examPrep10 points to the concluding message "Task Completed"
                     */
// EXAMPLE 1B (PROMISES) - USING ONLY THE RESOLVE PROMISE OPTION AND DECLARING ONLY THE FIRST FUNCTION BUT CALLING THE TEN OF THEM THROUGH METHOD CHAINING. THE RESULT WILL BE THE SAME AS 1A. THIS IS A SHORTER METHOD FOR EXECUTING PROMISES AND METHOD CHAINING.

function examPrep1 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            resolve ("Decide on the choice of exam2");
        }, 100)
    })
}

examPrep1().then(value=>{console.log(value);return "Obtain the syllabus2"})
             .then(value=>{console.log(value);return "Purchase of books2"})
             .then(value=>{console.log(value);return "Study2"})
             .then(value=>{console.log(value);return "Review and answer past questions2"})
             .then(value=>{console.log(value);return "Test yourself2"})
             .then(value=>{console.log(value);return "Decide if you're ready2"})
             .then(value=>{console.log(value);return "Perform final review2"})
             .then(value=>{console.log(value);return "Sit for Exam2"})
             .then(value=>{console.log(value);return "Obtain result2"})
             .then(value=>{console.log(value);console.log ("Task Completed2")});



// EXAMPLE 2A - USING BOTH RESOLVE & REJECT PROMISE OPTIONS (This will involve using "if else" statement)
function examPrep11 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const choiceOfExam = true;
            if (choiceOfExam){
                resolve ("I decided on the choice of exam");
            }
            else{
                reject ("I did not decide on the choice of exam");
            }
        }, 500);
    });
}


function examPrep12 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const obtainedSyllabus = false;
            if (obtainedSyllabus){
                resolve ("I obtained the syllabus");
            }
            else{
                reject ("I did not obtain the syllabus");
            }
        }, 600);
    });
}


function examPrep13 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const purchaseBook = false;
            if (purchaseBook) {
                resolve ("I purchased books");
            }
            else {
                reject ("I did not purchase books");
            }
        }, 700);
    });
}

function examPrep14 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const study = false;
            if (study) {
                resolve ("I studied");
            }
            else {
                reject ("I did not study");
            }
        }, 700);
    });
}

function examPrep15 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const questionReview = false;
            if (questionReview) {
                resolve ("I reviewed and answered past questions");
            }
            else {
                reject ("I did not review past questions");
            }
        }, 700);
    });
}

function examPrep16 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const testSelf = false;
            if (testSelf) {
                resolve ("I tested myself");
            }
            else {
                reject ("I did not test myself");
            }
        }, 700);
    });
}

function examPrep17 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const testSelf = false;
            if (testSelf) {
                resolve ("I decided if i'm ready");
            }
            else {
                reject ("I'm not sure that i am ready");
            }
        }, 700);
    });
}

function examPrep18 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const finalReview = false;
            if (finalReview) {
                resolve ("I did a final review");
            }
            else {
                reject ("I did not do a final review");
            }
        }, 700);
    });
}

function examPrep19 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const exam = false;
            if (exam) {
                resolve ("I sat for exam");
            }
            else {
                reject ("I did not sit for exam");
            }
        }, 700);
    });
}

function examPrep20 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const obtainResult = false;
            if (obtainResult) {
                resolve ("I obtained my result");
            }
            else {
                reject ("I did not obtain my result");
            }
        }, 700);
    });
}

examPrep11 ().then(value=>{console.log(value);return "I obtained the syllabus"})
               .then(value=>{console.log(value);return "I purchased books"})
               .then(value=>{console.log(value); console.log ("I studied")})
               .then(value=>{console.log(value); console.log ("I reviewed past questions")})
               .then(value=>{console.log(value); console.log ("I tested myself")})
               .then(value=>{console.log(value); console.log ("I decided i was ready")})
               .then(value=>{console.log(value); console.log ("I performed final review")})
               .then(value=>{console.log(value); console.log ("I sat for the exam")})
               .then(value=>{console.log(value); console.log ("I obtained my result")})
               .catch(error => console.error(error));

 

// EXAMPLE 2B - USING BOTH THE RESOLVE AND THE REJECT PROMISE OPTIONS (This will involve using "if else" statement)
function performOps18 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const netflixDatabase = false;
            if (netflixDatabase){
                resolve ("I accessed Netflix database");
            }
            else{
                reject ("I did not access Netflix database");
            }
        }, 800);
    });
}


function performOps19 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const downloadVideo = true;
            if (downloadVideo) {
                resolve ("I downloaded the video");
            }
            else {
                reject ("I did not download the video");
            }
        }, 900);
    });
}

function performOps20 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            const installedVideo = true;
            if (installedVideo) {
                resolve ("I installed the video");
            }
            else {
                reject ("I did not install the video");
            }
        }, 1000);
    });
}

performOps18().then(value=>{console.log(value);return "I downloaded the video"})
              .then(value=>{console.log(value);return "I installed the video"})
              .then(value=>{console.log(value); console.log ("I concluded the process")})
              .catch(error=>console.error(error));
     


/* FURTHER NOTES ON PROMISES (RESOLVE AND REJECT)
NB: In EXAMPLES 2A & 2B above, we used a promise to deal with the problems in Callback Hell/ Pyramid of Doom.

A promise in JavaScript is like a proxy for a value that is not known when it is created. It is an object
that represents the eventual resolution or rejection of an asynchronous operation and its resulting value.

Promises can either be:
     1 - Resolve
         or
     2 - Reject

Sometimes, promises are resolved through a process known as METHOD CHAINING.
Method Chaining is a method used in JavaScript to write more concise, more readable and shorter codes.
In Method Chaining, we call separate methods of a simple object like a chain without asigning the same object.

Method Chaining works well when we use asynchronous functions with promises. 

PROMISES can be coded using:
      1 - then
      2 - catch
      3 - finally

These are methods used to associate further actions with promises that are become settled.

The 'then' method takes up to two (2) arguments:
      1 - A callback function for the fulfilled case of the promise (resolve)
      2 - A callback function for the rejected case of the promise (reject)

The 'catch' or 'finally' methods call 'then' internally and makes error handling less verbose. 
In other words, a 'catch' is really a 'then' method but without passing the fulfillment handle. 

If the initial promise is fulfilled, the fulfilment handler (resolve) is called with the fulfillment value. 
If the initial value is rejected, the rejection handler (reject) is called with the rejection reason.

These features lead us to async/await.



ASYNCHRONOUS PROGRAMMING - ASYNC/AWAIT 
These are JavaScript keywords which when used together, provide a declarative way to define asynchronous 
functions and use their results. 

When used together, Async/Await simplify the syntax necessary to deliver a promise-based API.

The 'await' keyword is used inside an async function to pause its execution and wait for a promise to 
resolve before continuing.

Async makes a function to return a promise. 
Await makes an async function to wait for a promise.

Both are usually used together. 
When used together, these two keywords enable a programmer to write an asynchronous code in a synchronous manner. */


// EXAMPLE 1 - ASYNC/AWAIT
function searchDatabase (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let databaseSearched = true;
            if (databaseSearched){
                resolve ("I successfully searched the database");
            }
            else {
                reject ("I could not search the database");
            }
        }, 4000);
    });
}

function obtainedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosProcured = true;
            if (videosProcured){
                resolve ("I successfully obtained the videos");
            }
            else {
                reject ("I did not obtain the videos");
            }
        }, 100);
    });
}

function uploadedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosInstalled = true;
            if (videosInstalled){
                resolve ("I successfully uploaded the videos");
            }
            else {
                reject ("I did not upload the videos");
            }
        }, 200);
    });
}

async function databaseOps (){
    const searchDatabaseOutput = await searchDatabase ();
    console.log (searchDatabaseOutput);

    const obtainedVideosOutput = await obtainedVideos ();
    console.log (obtainedVideosOutput);

    const uploadedVideosOutput = await uploadedVideos ();
    console.log (uploadedVideosOutput);

    console.log ("Operations Concluded")
}
databaseOps ();



// EXAMPLE 2 - ASYNC/AWAIT
function selectCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardSelected = true;
            if (creditCardSelected){
                resolve ("I successfully selected a credit card");
            }
            else {
                reject ("I did not select a credit card");
            }
        }, 4500);
    });
}

function validatedCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardValidated = true;
            if (creditCardValidated){
                resolve ("I successfully validated the credit card number");
            }
            else {
                reject ("I could not validate the credit card number");
            }
        }, 100);
    });
}

function returnedCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardReturned = true;
            if (creditCardReturned){
                resolve ("I returned the credit card");
            }
            else {
                reject ("I did not return the credit card");
            }
        }, 200);
    });
}

async function creditCardOps (){
    let selectCreditCardOutput = await selectCreditCard ();
    console.log (selectCreditCardOutput);

    let validatedCreditCardOutput = await validatedCreditCard ();
    console.log (validatedCreditCardOutput);

    let returnedCreditCardOutput = await returnedCreditCard ();
    console.log (returnedCreditCardOutput);

    console.log ("Operations Completed")
}
creditCardOps ();



// EXAMPLE 3 - ASYNC/AWAIT
function fixTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carFixed = true;
            if (carFixed){
                resolve ("I fixed the car");
            }
            else {
                reject ("I did not fix the car");
            }
        }, 5000);
    });
}

function testTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carTested = true;
            if (carTested){
                resolve ("I tested the car");
            }
            else {
                reject ("I did not test the car");
            }
        }, 100);
    });
}

function returnedTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carReturned = false;
            if (carReturned){
                resolve ("I returned the car");
            }
            else {
                reject ("I did not return the car");
            }
        }, 200);
    });
}

async function carRepair (){
try{
    let fixTheCarResult = await fixTheCar ();
    console.log (fixTheCarResult);

    let testTheCarResult = await testTheCar ();
    console.log (testTheCarResult);

    let returnedTheCarResult = await returnedTheCar ();
    console.log (returnedTheCarResult);

    console.log ("Car Repair Concluded")
}
catch (error){
    console.error (error);
}
    }
carRepair ();


/* ASYNCHRONOUS PROGRAMMING - ASYNC/AWAIT 
These are JavaScript keywords which when used together, provide a declarative way to define asynchronous 
functions and use their results. 

When used together, Async/Await simplify the syntax necessary to deliver a promise-based API.

The 'await' keyword is used inside an async function to pause its execution and wait for a promise to 
resolve before continuing.

Async makes a function to return a promise. 
Await makes an async function to wait for a promise.

Both are usually used together. 
When used together, these two keywords enable a programmer to write an asynchronous code in a synchronous manner. */

// EXAMPLE 1A - ASYNC/AWAIT
/*
Steps - On-campus Accomodation
(1) Apply online
(2) Submit personal documents
(3) Make payment through teller
(4) Wait for list
(5) Check for hall and room number
(6) Move in on resumption date
(7) Operation completed

*/  

function appliedOnline (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let appliedOnline = true;
            if (appliedOnline){
                resolve ("I successfully applied online");
            }
            else {
                reject ("I did not apply online");
            }
        }, 4000);
    });
}

function submittedPersonalDocument (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let submittedPersonalDocument = true;
            if (submittedPersonalDocument){
                resolve ("I submitted my personal documents");
            }
            else {
                reject ("I did not submit my personal documents");
            }
        }, 4500);
    });
}


function madePayment (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let madePayment = true;
            if (madePayment){
                resolve ("I made payment through teller");
            }
            else {
                reject ("I did not make payment through teller");
            }
        }, 5000);
    });
}

function waitedForList (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let waitedForList = true;
            if (waitedForList){
                resolve ("I waited for the list of successful candidates");
            }
            else {
                reject ("I did not wait for the list of successful candidates");
            }
        }, 5500);
    });
}

function hallCheck (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let hallCheck = true;
            if (hallCheck){
                resolve ("I checked for my hall and room number");
            }
            else {
                reject ("I did not check for my hall and room number");
            }
        }, 6000);
    });
}

function movedIn (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let movedIn = true;
            if (movedIn){
                resolve ("I moved into my room on campus");
            }
            else {
                reject ("I did not move into my room on campus");
            }
        }, 6500);
    });
}

function operationCompleted (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let operationCompleted = true;
            if (operationCompleted){
                resolve ("Operation is complete");
            }
            else {
                reject ("Operation is still pending");
            }
        }, 7000);
    });
}

async function accomodation (){
    const appliedOnlineResult = await appliedOnline ();
    console.log (appliedOnlineResult);

    const submittedPersonalDocumentResult = await submittedPersonalDocument ();
    console.log (submittedPersonalDocumentResult);

    const madePaymentResult = await madePayment ();
    console.log (madePaymentResult);

    const waitedForListResult = await waitedForList ();
    console.log (waitedForListResult);

    const hallCheckResult = await hallCheck ();
    console.log (hallCheckResult);

    const movedInResult = await movedIn ();
    console.log (movedInResult);

    console.log ("Operations Concluded")
}
accomodation ();

// Example 1B
function appliedOnline (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let appliedOnline = true;
            if (appliedOnline){
                resolve ("I successfully applied online");
            }
            else {
                reject ("I did not apply online");
            }
        }, 4000);
    });
}

function submittedPersonalDocument (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let submittedPersonalDocument = true;
            if (submittedPersonalDocument){
                resolve ("I submitted my personal documents");
            }
            else {
                reject ("I did not submit my personal documents");
            }
        }, 4500);
    });
}


function madePayment (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let madePayment = true;
            if (madePayment){
                resolve ("I made payment through teller");
            }
            else {
                reject ("I did not make payment through teller");
            }
        }, 5000);
    });
}

function waitedForList (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let waitedForList = true;
            if (waitedForList){
                resolve ("I waited for the list of successful candidates");
            }
            else {
                reject ("I did not wait for the list of successful candidates");
            }
        }, 5500);
    });
}

function hallCheck (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let hallCheck = true;
            if (hallCheck){
                resolve ("I checked for my hall and room number");
            }
            else {
                reject ("I did not check for my hall and room number");
            }
        }, 6000);
    });
}

function movedIn (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let movedIn = false;
            if (movedIn){
                resolve ("I moved into my room on campus");
            }
            else {
                reject ("I did not move into my room on campus");
            }
        }, 6500);
    });
}

function operationCompleted (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let operationCompleted = true;
            if (operationCompleted){
                resolve ("Operation is complete");
            }
            else {
                reject ("Operation is still pending");
            }
        }, 7000);
    });
}

async function accomodation (){
    try{
        const appliedOnlineResult = await appliedOnline ();
        console.log (appliedOnlineResult);

        const submittedPersonalDocumentResult = await submittedPersonalDocument ();
        console.log (submittedPersonalDocumentResult);

        const madePaymentResult = await madePayment ();
        console.log (madePaymentResult);

        const waitedForListResult = await waitedForList ();
        console.log (waitedForListResult);

        const hallCheckResult = await hallCheck ();
        console.log (hallCheckResult);

        const movedInResult = await movedIn ();
        console.log (movedInResult);

        console.log ("Operations Concluded")
    }
    catch (error){
        console.error (error);
    }
}
accomodation (); 

// Example 1C - Class Work 1
/* 

TITLE: HOW TO MAKE PEPPER-SOUP
(1) Decide on the type of pepper soup
(2) Make a list
(3) Decide the market
(4) Buy Ingredients
(5) Prepare and wash the ingredients
(6) Put all the ingredients in a pot
(7) Start cooking / set cooking time
(8) Allow to cook for 40 to 50 minutes
(9) Lower the heat and allow to simmer
(10) Dish out
(11) Serve
(12) Operation completed.

*/

function pepperSoupType (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let pepperSoupTypeDecision = true;
            if (pepperSoupTypeDecision){
                resolve ("I decided on the type of pepper soup");
            }
            else {
                reject ("I did not decide on the type of pepper soup");
            }
        }, 500);
    });
}

function ingredientsList (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let makeList = true;
            if (makeList){
                resolve ("I wrote a list of ingredients");
            }
            else {
                reject ("I did not write a list of Ingredients");
            }
        }, 1000);
    });
}

function decideMarket (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let marketDecide = true;
            if (marketDecide){
                resolve ("I decided on which market to shop in");
            }
            else {
                reject ("I do not know which market to shop in");
            }
        }, 1500);
    });
}

function buyIngredients (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let purchaseIngredients = true;
            if (purchaseIngredients){
                resolve ("I purchased all the ingredients");
            }
            else {
                reject ("I did not purchase all ingredients");
            }
        }, 2000);
    });
}

function prepareAndWash (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let prepareIngredients = true;
            if (prepareIngredients){
                resolve ("I prepared and washed all the ingredients");
            }
            else {
                reject ("I did not prepare and wash all the ingredients");
            }
        }, 2500);
    });
}

function inAPot (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let allIngredientsInAPot = true;
            if (allIngredientsInAPot){
                resolve ("I added all the ingredients in a pot");
            }
            else {
                reject ("I did not add all the ingredients in a pot");
            }
        }, 3000);
    });
}

function startCooking (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let cookingBegins = true;
            if (cookingBegins){
                resolve ("I started cooking");
            }
            else {
                reject ("I did not start cooking");
            }
        }, 3500);
    });
}

function cookingTime (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let cookingTimeSet = true;
            if (cookingTimeSet){
                resolve ("I set the time for cooking");
            }
            else {
                reject ("I did not set the time for cooking");
            }
        }, 4000);
    });
}

function lowerHeat (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let lowHeat = true;
            if (lowHeat){
                resolve ("I lowered the heat");
            }
            else {
                reject ("I did not lower the heat");
            }
        }, 4500);
    });
}

function dishOut (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let dishItOut = true;
            if (dishItOut){
                resolve ("I dished out the pepper soup");
            }
            else {
                reject ("I did not dish out the pepper soup");
            }
        }, 5000);
    });
}

function serveMeal (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let servePepperSoup = true;
            if (servePepperSoup){
                resolve ("I served the pepper soup");
            }
            else {
                reject ("I did not serve the pepper soup");
            }
        }, 5500);
    });
}

function operationCompleted (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let completedOperation = true;
            if (completedOperation){
                resolve ("Cooking completed");
            }
            else {
                reject ("Cooking not completed");
            }
        }, 6000);
    });
}


async function pepperSoupPreparation (){
    try{
        const pepperSoup = await pepperSoupType ();
        console.log (pepperSoup);

        const ingredients = await ingredientsList ();
        console.log (ingredients);

        const decide = await decideMarket ();
        console.log (decide);

        const buy = await buyIngredients ();
        console.log (buy);

        const prepare = await prepareAndWash ();
        console.log (prepare);

        const putInPot = await inAPot ();
        console.log (putInPot);

        const cook = await startCooking ();
        console.log (cook);

        const cookTime = await cookingTime ();
        console.log (cookTime);

        const lowHeat = await lowerHeat ();
        console.log (lowHeat);

        const dishIt = await dishOut ();
        console.log (dishIt);

        const serve = await serveMeal ();
        console.log (serve);

        const complete = await operationCompleted ();
        console.log(complete);
    } catch (err){
        console.log(err);
    }
}
pepperSoupPreparation ();


// EXAMPLE 1C - CLASSWORK 2
/* 
TITLE: COMPANY - WORKERS BIO

*/
 
function workersBio () {
    return new Promise((resolve, reject) => {
        const isWorkers = true;
        
        setTimeout(() => {
            const workersData = {
                name: "Mr Ndubuisi",
                role: "Software Developer",
                department: "IT"
            }

            if (isWorkers){
                resolve (workersData);
            }
            else {
                reject ("Could not find worker");
            }

        }, 5000)
    })
}

function workersBio1 () {
    return new Promise((resolve, reject) => {
        const isWorkers = true;
        
        setTimeout(() => {
            const workersData = {
                name: "Mr Chiemezie",
                role: "Accountant",
                department: "IT"
            }

            if (isWorkers){
                resolve (workersData);
            }
            else {
                reject ("Could not find worker");
            }

        }, 5000)
    })
}

async function checkWorkers (){
    try{
        const worker1 = await workersBio ();
        console.log (worker1);

        const worker2 = await workersBio1();
        console.log(worker2);

    } catch (err){
        console.log(err);
    }
}
checkWorkers ();
 
// Example 1C - Class Work 3
/* 

TITLE: How to farm 
(1) Decide on the crop to farm
(2) Land preparation
(3) Get the seeds
(4) Go plant the seeds
(5) Weed the farm
(6) Apply fertilizer
(7) Weed the second time
(8) Allow to mature and ripen
(9) Harvest
(10) Post harvest processing
(11) packaging and storing
(12) Sales
(13) Operations completed

*/

function cropType (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let cropTypeDecision = true;
            if (cropTypeDecision){
                resolve ("I decided on the type of crop to farm");
            }
            else {
                reject ("I did not decide on the type of crop to farm");
            }
        }, 500);
    });
}

function prepareLand (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let landPreparation = true;
            if (landPreparation){
                resolve ("I got the land prepared");
            }
            else {
                reject ("I did not get the land prepared");
            }
        }, 1000);
    });
}

function getSeeds (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let getMaizeSeed = true;
            if (getMaizeSeed){
                resolve ("I got the maize seeds");
            }
            else {
                reject ("I do not get the maize seeds");
            }
        }, 1500);
    });
}

function plantSeeds (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let plantTheSeed = true;
            if (plantTheSeed){
                resolve ("I planted the maize seeds");
            }
            else {
                reject ("I did not plant the maize seeds");
            }
        }, 2000);
    });
}

function firstFarmWeeding (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let firstWeeding = true;
            if (firstWeeding){
                resolve ("I did the first weeding");
            }
            else {
                reject ("I did not do the first weeding");
            }
        }, 2500);
    });
}

function fertilizerApplication (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let applyFertilizer = true;
            if (applyFertilizer){
                resolve ("I applied fertilizer on the farm");
            }
            else {
                reject ("I did not apply fertilizer on the farm");
            }
        }, 3000);
    });
}

function secondFarmWeeding (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let secondWeeding = true;
            if (secondWeeding){
                resolve ("I did the second weeding");
            }
            else {
                reject ("I did not do the second weeding");
            }
        }, 3500);
    });
}

function allowToMature (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let matureAndRipen = true;
            if (matureAndRipen){
                resolve ("I allowed the maize to mature and ripen");
            }
            else {
                reject ("I did not allow the maize to mature and ripen");
            }
        }, 4000);
    });
}

function harvest (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let harvestTime = true;
            if (harvestTime){
                resolve ("I harvested the maize");
            }
            else {
                reject ("I did not harvest the maize");
            }
        }, 4500);
    });
}

function postHarvest (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let postHarvestProcessing = true;
            if (postHarvestProcessing){
                resolve ("I processed the harvest");
            }
            else {
                reject ("I did not process the harvest");
            }
        }, 5000);
    });
}

function packaging (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let maizePackaging = true;
            if (maizePackaging){
                resolve ("I packaged the maize for sales");
            }
            else {
                reject ("I did not package the maize for sales");
            }
        }, 5500);
    });
}

function sales (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let soldMaize = true;
            if (soldMaize){
                resolve ("I sold the maize");
            }
            else {
                reject ("I did not sell the maize");
            }
        }, 6000);
    });
}

function operationCompleted (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let completed = true;
            if (completed){
                resolve ("Operation is complete");
            }
            else {
                reject ("Operation is not complete");
            }
        }, 6500);
    });
}


async function maizeFarming (){
    try{
        const crop = await cropType ();
        console.log (crop);

        const prepareL = await prepareLand ();
        console.log (prepareL);

        const seeds = await getSeeds ();
        console.log (seeds);

        const plantSeed = await plantSeeds ();
        console.log (plantSeed);

        const firstWeed = await firstFarmWeeding ();
        console.log (firstWeed);

        const fertilizer = await fertilizerApplication ();
        console.log (fertilizer);

        const secondWeed = await secondFarmWeeding ();
        console.log(secondWeed);

        const mature = await allowToMature ();
        console.log (mature);

        const harvestTime = await harvest ();
        console.log (harvestTime);

        const postHarvestTime = await postHarvest ();
        console.log (postHarvestTime);

        const package = await packaging ();
        console.log (package);

        const sale = await sales ();
        console.log(sale);

        const complete = await operationCompleted ();
        console.log(complete);

    } catch (err){
        console.log(err);
    }
}
 maizeFarming(); 

 function plantType (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let plantTypeDecision = true;
            if (plantTypeDecision){
                resolve ("I decided on the type of plant to farm");
            }
            else {
                reject ("I did not decide on the type of plant to farm");
            }
        }, 500);
    });
}

function prepareSoil (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let soilPreparation = true;
            if (soilPreparation){
                resolve ("I got the soil prepared");
            }
            else {
                reject ("I did not get the soil prepared");
            }
        }, 550);
    });
}

function getSoilSeeds (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let gotPlantSeed = true;
            if (gotPlantSeed){
                resolve ("I got the plant seeds");
            }
            else {
                reject ("I do not get the plant seeds");
            }
        }, 600);
    });
}

function plantSeeds2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let plantTheSeed2 = true;
            if (plantTheSeed2){
                resolve ("I planted the sugarcane seeds");
            }
            else {
                reject ("I did not plant the sugarcane seeds");
            }
        }, 650);
    });
}

function firstFarmWeeding2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let firstWeeding2 = true;
            if (firstWeeding2){
                resolve ("I did the first weeding2");
            }
            else {
                reject ("I did not do the first weeding2");
            }
        }, 700);
    });
}

function fertilizerApplication2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let applyFertilizer2 = false;
            if (applyFertilizer2){
                resolve ("I applied fertilizer2 on the farm");
            }
            else {
                reject ("I did not apply fertilizer2 on the farm");
            }
        }, 750);
    });
}

function secondFarmWeeding2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let secondWeeding2 = true;
            if (secondWeeding2){
                resolve ("I did the second weeding2");
            }
            else {
                reject ("I did not do the second weeding2");
            }
        }, 800);
    });
}

function allowToMature2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let matureAndRipen2 = true;
            if (matureAndRipen2){
                resolve ("I allowed the maize to mature and ripen2");
            }
            else {
                reject ("I did not allow the maize to mature and ripen2");
            }
        }, 850);
    });
}

function harvest2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let harvestTime2 = true;
            if (harvestTime2){
                resolve ("I harvested the maize2");
            }
            else {
                reject ("I did not harvest the maize2");
            }
        }, 900);
    });
}

function postHarvest2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let postHarvestProcessing2 = true;
            if (postHarvestProcessing2){
                resolve ("I processed the harvest2");
            }
            else {
                reject ("I did not process the harvest2");
            }
        }, 950);
    });
}

function packaging2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let maizePackaging2 = true;
            if (maizePackaging2){
                resolve ("I packaged the maize for sales2");
            }
            else {
                reject ("I did not package the maize for sales2");
            }
        }, 1000);
    });
}

function sales2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let soldMaize2 = false;
            if (soldMaize2){
                resolve ("I sold the maize2");
            }
            else {
                reject ("I did not sell the maize2");
            }
        }, 1050);
    });
}

function operationCompleted2 (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let completed2 = true;
            if (completed2){
                resolve ("Operation is complete2");
            }
            else {
                reject ("Operation is not complete2");
            }
        }, 1100);
    });
}


async function maizeFarming2 (){
    try{
        const crop2 = await plantType ();
        console.log (crop2);

        const prepareL2 = await prepareSoil ();
        console.log (prepareL2);

        const seeds2 = await getSoilSeeds ();
        console.log (seeds2);

        const plantSeed2 = await plantSeeds2 ();
        console.log (plantSeed2);

        const firstWeed2 = await firstFarmWeeding2 ();
        console.log (firstWeed2);

        const fertilizer2 = await fertilizerApplication2 ();
        console.log (fertilizer2);

        const secondWeed2 = await secondFarmWeeding2 ();
        console.log(secondWeed2);

        const mature2 = await allowToMature2 ();
        console.log (mature2);

        const harvestTime2 = await harvest2 ();
        console.log (harvestTime2);

        const postHarvestTime2 = await postHarvest2 ();
        console.log (postHarvestTime2);

        const package2 = await packaging2 ();
        console.log (package2);

        const sale2 = await sales2 ();
        console.log(sale2);

        const complete2 = await operationCompleted2 ();
        console.log(complete2);

    } catch (err){
        console.log(err);
    }
}
 maizeFarming2();



// Example 1D
function searchDatabase (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let databaseSearched = true;
            if (databaseSearched){
                resolve ("I successfully searched the database");
            }
            else {
                reject ("I could not search the database");
            }
        }, 4000);
    });
}

function obtainedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosProcured = true;
            if (videosProcured){
                resolve ("I successfully obtained the videos");
            }
            else {
                reject ("I did not obtain the videos");
            }
        }, 100);
    });
}

function uploadedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosInstalled = true;
            if (videosInstalled){
                resolve ("I successfully uploaded the videos");
            }
            else {
                reject ("I did not upload the videos");
            }
        }, 200);
    });
}

async function databaseOps (){
    const searchDatabaseOutput = await searchDatabase ();
    console.log (searchDatabaseOutput);

    const obtainedVideosOutput = await obtainedVideos ();
    console.log (obtainedVideosOutput);

    const uploadedVideosOutput = await uploadedVideos ();
    console.log (uploadedVideosOutput);

    console.log ("Operations Concluded")
}
databaseOps ();

 

// EXAMPLE 1E - ASYNC/AWAIT
function searchDatabase (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let databaseSearched = true;
            if (databaseSearched){
                resolve ("I successfully searched the database");
            }
            else {
                reject ("I could not search the database");
            }
        }, 4000);
    });
}

function obtainedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosProcured = true;
            if (videosProcured){
                resolve ("I successfully obtained the videos");
            }
            else {
                reject ("I did not obtain the videos");
            }
        }, 100);
    });
}

function uploadedVideos (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let videosInstalled = true;
            if (videosInstalled){
                resolve ("I successfully uploaded the videos");
            }
            else {
                reject ("I did not upload the videos");
            }
        }, 200);
    });
}

async function databaseOps (){
    const searchDatabaseOutput = await searchDatabase ();
    console.log (searchDatabaseOutput);

    const obtainedVideosOutput = await obtainedVideos ();
    console.log (obtainedVideosOutput);

    const uploadedVideosOutput = await uploadedVideos ();
    console.log (uploadedVideosOutput);

    console.log ("Operations Concluded")
}
databaseOps ();



// EXAMPLE 2 - ASYNC/AWAIT
function selectCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardSelected = true;
            if (creditCardSelected){
                resolve ("I successfully selected a credit card");
            }
            else {
                reject ("I did not select a credit card");
            }
        }, 4500);
    });
}

function validatedCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardValidated = true;
            if (creditCardValidated){
                resolve ("I successfully validated the credit card number");
            }
            else {
                reject ("I could not validate the credit card number");
            }
        }, 100);
    });
}

function returnedCreditCard (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let creditCardReturned = true;
            if (creditCardReturned){
                resolve ("I returned the credit card");
            }
            else {
                reject ("I did not return the credit card");
            }
        }, 200);
    });
}

async function creditCardOps (){
    let selectCreditCardOutput = await selectCreditCard ();
    console.log (selectCreditCardOutput);

    let validatedCreditCardOutput = await validatedCreditCard ();
    console.log (validatedCreditCardOutput);

    let returnedCreditCardOutput = await returnedCreditCard ();
    console.log (returnedCreditCardOutput);

    console.log ("Operations Completed")
}
creditCardOps ();


// EXAMPLE 3 - ASYNC/AWAIT
function fixTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carFixed = true;
            if (carFixed){
                resolve ("I fixed the car");
            }
            else {
                reject ("I did not fix the car");
            }
        }, 5000);
    });
}

function testTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carTested = true;
            if (carTested){
                resolve ("I tested the car");
            }
            else {
                reject ("I did not test the car");
            }
        }, 100);
    });
}

function returnedTheCar (){
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            let carReturned = false;
            if (carReturned){
                resolve ("I returned the car");
            }
            else {
                reject ("I did not return the car");
            }
        }, 200);
    });
}

async function carRepair (){
try{
    let fixTheCarResult = await fixTheCar ();
    console.log (fixTheCarResult);

    let testTheCarResult = await testTheCar ();
    console.log (testTheCarResult);

    let returnedTheCarResult = await returnedTheCar ();
    console.log (returnedTheCarResult);

    console.log ("Car Repair Concluded")
}
catch (error){
    console.error (error);
}
    }
carRepair (); 



/* CONSTRUCTOR FUNCTIONS - FUNCTION TYPE 5 
Also known as OBJECT CONSTRUCTORS and/or OBJECT CONSTRUCTOR FUNCTIONS, Constructor Functions are a 
special function type that are used to create and initialise different instances of an object. 

Any time that a web programmer wants to create multiple objects with similar properties, constructor 
functions are used.

A constructor function takes an object, its properties and its values and renders them in a manner 
that is far simpler than an object would. It creates a replicable template: a template which if it 
did not exist, the web programmer will have to spend time manually coding every instruction that is 
meant to be executed.

See an example / instance of an object below:
    - Person
        - name: "Jason",
        - gender: "male",
        - height: "6ft",
        - nationality: "American",
        - carOwned: "Mercedes",
        - model: 2025
    
Suppose you have 50 persons and you want to capture all the properties and values of each of those 50 persons, it will be repetitive and long to copy and paste the above object 50 times and console.log each one. This is where a constructor function comes in. It uses the function keyword and creates a template which it uses to create 50 instances of persons. 

This is a faster and more efficient method, which is why constructor functions are also known as object constructors and / or object constructor functions.

Let us attempt to use a constructor function to create a template for the above object */
        function Persona(name, gender, height, nationality, carOwned, model){
            this.name = name,
            this.gender = gender,
            this.height = height,
            this.nationality = nationality,
            this.carOwned = carOwned,
            this.model = model
        }
        
        const persona1 = new Persona("Eric", "Male", "6ft", "American", "Toyota", "2025");

        console.log(persona1.name);
        console.log(persona1.gender);
        console.log(persona1.height);
        console.log(persona1.nationality);
        console.log(persona1.carOwned);
        console.log(persona1.model);

/* Note that we have used the newly created constructor function above to create an object template. From this template, we have created one person who we called person1 and gave an argument for by giving person1 a name, a gender, a height, a nationality, etc. 

We can use this same template to create 1 million persons and give each person his / her own properties and values like name, gender, height, nationality, etc.

We will demonstrate this with the codes below. We are going to use the template created by the constructor function to create instances of just five persons. See the examples below: */


function Individual(name, gender, height, nationality, carOwned, model){
    this.name = name,
    this.gender = gender,
    this.height = height,
    this.nationality = nationality,
    this.carOwned = carOwned,
    this.model = model
}

let individual1 = new Individual("Eric", "Male", "6ft", "American", "Toyota", "2025");
let individual2 = new Individual("Chioma", "Female", "6ft", "Nigerian", "Mercedes", "2024");
let individual3 = new Individual("John", "Male", "5ft", "England", "Honda", "2023");
let individual4 = new Individual("Alice", "Female", "6ft", "Brazilian", "SUV", "2022");
let individual5 = new Individual("Yamashita", "Male", "6ft", "Japanese", "Honda", "2020");

console.log(individual1.name);
console.log(individual1.gender);
console.log(individual1.height);
console.log(individual1.nationality);
console.log(individual1.carOwned);
console.log(individual1.model);

console.log(individual2.name);
console.log(individual2.gender);
console.log(individual2.height);
console.log(individual2.nationality);
console.log(individual2.carOwned);
console.log(individual2.model);

console.log(individual3.name);
console.log(individual3.gender);
console.log(individual3.height);
console.log(individual3.nationality);
console.log(individual3.carOwned);
console.log(individual3.model);

console.log(individual4.name);
console.log(individual4.gender);
console.log(individual4.height);
console.log(individual4.nationality);
console.log(individual4.carOwned);
console.log(individual4.model);

console.log(individual5.name);
console.log(individual5.gender);
console.log(individual5.height);
console.log(individual5.nationality);
console.log(individual5.carOwned);
console.log(individual5.model);


/* CLASS EXAMPLE - Sample JAMB Result Sample */
function Candidate(lastName, middleName, firstName, gender, nationality, state, LGA, town, center, course, subject1, subject2, subject3, subject4, subject5, score1, score2, score3, score4, score5, totalScore, grade) {
    this.lastName = lastName;
    this.middleName = middleName;
    this.firstName = firstName;
    this.gender = gender;
    this.nationality = nationality;
    this.state = state;
    this.LGA = LGA;
    this.town = town;
    this.center = center;
    this.course = course;
    this.subject1 = subject1;
    this.subject2 = subject2;
    this.subject3 = subject3;
    this.subject4 = subject4;
    this.subject5 = subject5;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
    this.score4 = score4;
    this.score5 = score5;
    this.totalScore = totalScore;
    this.grade = grade;
}

let candidate1 = new Candidate("Last Name: Garba", "Middle Name: James", "First Name: Sarah", "Gender: Female", "Nationality: Nigeria", "State: Adamawa", "LGA: Yola North", "Town: Jimeta", "Examination Center: FCE Yola", "Course: Medicine", "Subject1: English", "Subject2: Mathematics", "Subject3: Physics", "Subject4: Chemistry", "Subject5: Biology", "English: 95", "Mathematics: 97", "Physics: 98", "Chemistry: 96", "Biology: 95", "Total Score: 481", "Grade: Pass");

let candidate2 = new Candidate("Last Name: Ibiam", "Middle Name: Chioma", "First Name: Eudorah", "Gender: Female", "Nationality: Nigeria", "State: Ebonyi", "LGA: Afikpo North", "Town: Afikpo", "Examination Center: Federal Polytechnic", "Course: Computer Science", "Subject1: English", "Subject2: Mathematics", "Subject3: Physics", "Subject4: Geography", "Subject5: Economics", "English: 95", "Mathematics: 97", "Physics: 98", "Geography: 96", "Economics: 95", "Total Score: 481", "Grade: Pass");

let candidate3 = new Candidate("Last Name: Ugwu", "Middle Name: Martha", "First Name: Chinenye", "Gender: Female", "Nationality: Nigeria", "State: Enugu", "LGA: Nsukka", "Town: Obino", "Examination Center: UNN", "Course: Industrial Physics", "Subject1: English", "Subject2: Mathematics", "Subject3: Physics", "Subject4: Chemistry", "Subject5: Biology", "English: 95", "Mathematics: 97", "Physics: 98", "Chemistry: 96", "Biology: 95", "Total Score: 481", "Grade: Pass");

let candidate4 = new Candidate("Last Name: Uchenwoke", "Middle Name: Franklin", "First Name: Chiemezie", "Gender: Male", "Nationality: Nigeria", "State: Anambra", "LGA: Anaocha", "Town: Neni", "Examination Center: UNIZIK", "Course: Medicine", "Subject1: English", "Subject2: Mathematics", "Subject3: Physics", "Subject4: Chemistry", "Subject5: Biology", "English: 95", "Mathematics: 97", "Physics: 98", "Chemistry: 96", "Biology: 95", "Total Score: 481", "Grade: Pass");

console.log(candidate1.lastName);
console.log(candidate1.middleName);
console.log(candidate1.firstName);
console.log(candidate1.gender);
console.log(candidate1.nationality);
console.log(candidate1.state);
console.log(candidate1.LGA);
console.log(candidate1.town);
console.log(candidate1.center);
console.log(candidate1.course);
console.log(candidate1.subject1);
console.log(candidate1.subject2);
console.log(candidate1.subject3);
console.log(candidate1.subject4);
console.log(candidate1.subject5);
console.log(candidate1.score1);
console.log(candidate1.score2);
console.log(candidate1.score3);
console.log(candidate1.score4);
console.log(candidate1.score5);
console.log(candidate1.totalScore);
console.log(candidate1.grade);

console.log(candidate2.lastName);
console.log(candidate2.middleName);
console.log(candidate2.firstName);
console.log(candidate2.gender);
console.log(candidate2.nationality);
console.log(candidate2.state);
console.log(candidate2.LGA);
console.log(candidate2.town);
console.log(candidate2.center);
console.log(candidate2.course);
console.log(candidate2.subject1);
console.log(candidate2.subject2);
console.log(candidate2.subject3);
console.log(candidate2.subject4);
console.log(candidate2.subject5);
console.log(candidate2.score1);
console.log(candidate2.score2);
console.log(candidate2.score3);
console.log(candidate2.score4);
console.log(candidate2.score5);
console.log(candidate2.totalScore);
console.log(candidate2.grade);

console.log(candidate3.lastName);
console.log(candidate3.middleName);
console.log(candidate3.firstName);
console.log(candidate3.gender);
console.log(candidate3.nationality);
console.log(candidate3.state);
console.log(candidate3.LGA);
console.log(candidate3.town);
console.log(candidate3.center);
console.log(candidate3.course);
console.log(candidate3.subject1);
console.log(candidate3.subject2);
console.log(candidate3.subject3);
console.log(candidate3.subject4);
console.log(candidate3.subject5);
console.log(candidate3.score1);
console.log(candidate3.score2);
console.log(candidate3.score3);
console.log(candidate3.score4);
console.log(candidate3.score5);
console.log(candidate3.totalScore);
console.log(candidate3.grade);

console.log(candidate4.lastName);
console.log(candidate4.middleName);
console.log(candidate4.firstName);
console.log(candidate4.gender);
console.log(candidate4.nationality);
console.log(candidate4.state);
console.log(candidate4.LGA);
console.log(candidate4.town);
console.log(candidate4.center);
console.log(candidate4.course);
console.log(candidate4.subject1);
console.log(candidate4.subject2);
console.log(candidate4.subject3);
console.log(candidate4.subject4);
console.log(candidate4.subject5);
console.log(candidate4.score1);
console.log(candidate4.score2);
console.log(candidate4.score3);
console.log(candidate4.score4);
console.log(candidate4.score5);
console.log(candidate4.totalScore);
console.log(candidate4.grade);

/* EXAMPLE 2 - Sample WAEC Result Sheet */
function Student(lastName, middleName, firstName, gender, nationality, state, LGA, town, center, examNumber, subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8, subject9, subject10, subject11, subject12, score1, score2, score3, score4, score5,score6, score7, score8, score9, score10, score11, score12, totalSubjectsRegistered, totalCredits) {
    this.lastName = lastName;
    this.middleName = middleName;
    this.firstName = firstName;
    this.gender = gender;
    this.nationality = nationality;
    this.state = state;
    this.LGA = LGA;
    this.town = town;
    this.center = center;
    this.examNumber = examNumber;
    this.subject1 = subject1;
    this.subject2 = subject2;
    this.subject3 = subject3;
    this.subject4 = subject4;
    this.subject5 = subject5;
    this.subject6 = subject6;
    this.subject7 = subject7;
    this.subject8 = subject8;
    this.subject9 = subject9;
    this.subject10 = subject10;
    this.subject11 = subject11;
    this.subject12 = subject12;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
    this.score4 = score4;
    this.score5 = score5;
    this.score6 = score6;
    this.score7 = score7;
    this.score8 = score8;
    this.score9 = score9;
    this.score10 = score10;
    this.score11 = score11;
    this.score12 = score12;
    this.totalSubjectsRegistered = totalSubjectsRegistered;
    this.totalCredits = totalCredits;
}

let student12 = new Student("Last Name: Garba", "Middle Name: James", "First Name: Sarah", "Gender: Female", "Nationality: Nigeria", "State: Adamawa", "LGA: Yola North", "Town: Jimeta", "Examination Center: FCE Yola", "Exam Number: 21234", "Subject1: English", "Subject2: Mathematics", "Subject3: Physics", "Subject4: Chemistry", "Subject5: Biology", "Subject6: Literature in English", "Subject7: Further Mathematics", "Subject8: Geography", "Subject9: Health Science", "Subject10: CRS", "Subject11: Civil Education", "Subject12: Technical Drawing", "English: A1", "Mathematics: A1", "Physics: A1", "Chemistry: A1", "Biology: A1", "Literature in English: Absent", "Further Mathematics: Absent", "Geography: A1", "Health Science: A1", "CRS: A1", "Civil Education: A1","Technical Drawing: Absent", "Total Subjects Registered: 12", "Total Credit: 12");

let student2 = new Student("Last Name: Ibiam", "Middle Name: Chioma", "First Name: Eudorah", "Gender: Female", "Nationality: Nigeria", "State: Ebonyi", "LGA: Afikpo North", "Town: Afikpo", "Examination Center: Federal Polytechnic", "Exam Number: 21207", "Subject1: English", "Subject2: Mathematics", "Subject3: Physics", "Subject4: Chemistry", "Subject5: Biology", "Subject6: Literature in English", "Subject7: Further Mathematics", "Subject8: Geography", "Subject9: Health Science", "Subject10: CRS", "Subject11: Civil Education", "Subject12: Technical Drawing", "English: A1", "Mathematics: A1", "Physics: A1", "Chemistry: A1", "Biology: A1", "Literature in English: Absent", "Further Mathematics: Absent", "Geography: A1", "Health Science: A1", "CRS: A1", "Civil Education: A1","Technical Drawing: Absent", "Total Subjects Registered: 12", "Total Credit: 9");

let student3 = new Student("Last Name: Ugwu", "Middle Name: Martha", "First Name: Chinenye", "Gender: Female", "Nationality: Nigeria", "State: Enugu", "LGA: Nsukka", "Town: Obino", "Examination Center: UNN", "Exam Number: 21005", "Subject1: English", "Subject2: Mathematics", "Subject3: Physics", "Subject4: Chemistry", "Subject5: Biology", "Subject6: Literature in English", "Subject7: Further Mathematics", "Subject8: Geography", "Subject9: Health Science", "Subject10: CRS", "Subject11: Civil Education", "Subject12: Technical Drawing", "English: A1", "Mathematics: A1", "Physics: A1", "Chemistry: A1", "Biology: A1", "Literature in English: Absent", "Further Mathematics: Absent", "Geography: A1", "Health Science: A1", "CRS: A1", "Civil Education: A1","Technical Drawing: Absent", "Total Subjects Registered: 11", "Total Credit: 12");

let student4 = new Student("Last Name: Uchenwoke", "Middle Name: Franklin", "First Name: Chiemezie", "Gender: Male", "Nationality: Nigeria", "State: Anambra", "LGA: Anaocha", "Town: Neni", "Examination Center: UNIZIK", "Exam Number: 21999", "Subject1: English", "Subject2: Mathematics", "Subject3: Physics", "Subject4: Chemistry", "Subject5: Biology", "Subject6: Literature in English", "Subject7: Further Mathematics", "Subject8: Geography", "Subject9: Health Science", "Subject10: CRS", "Subject11: Civil Education", "Subject12: Technical Drawing", "English: A1", "Mathematics: A1", "Physics: A1", "Chemistry: A1", "Biology: A1", "Literature in English: Absent", "Further Mathematics: Absent", "Geography: A1", "Health Science: A1", "CRS: A1", "Civil Education: A1","Technical Drawing: Absent", "Total Subjects Registered: 12", "Total Credit: 12");

console.log(student12.lastName);
console.log(student12.middleName);
console.log(student12.firstName);
console.log(student12.gender);
console.log(student12.nationality);
console.log(student12.state);
console.log(student12.LGA);
console.log(student12.town);
console.log(student12.center);
console.log(student12.examNumber);
console.log(student12.subject1);
console.log(student12.subject2);
console.log(student12.subject3);
console.log(student12.subject4);
console.log(student12.subject5);
console.log(student12.subject6);
console.log(student12.subject7);
console.log(student12.subject8);
console.log(student12.subject9);
console.log(student12.subject10);
console.log(student12.subject11);
console.log(student12.subject12);
console.log(student12.score1);
console.log(student12.score2);
console.log(student12.score3);
console.log(student12.score4);
console.log(student12.score5);
console.log(student12.score6);
console.log(student12.score7);
console.log(student12.score8);
console.log(student12.score9);
console.log(student12.score10);
console.log(student12.score11);
console.log(student12.score12);
console.log(student12.totalSubjectsRegistered);
console.log(student12.totalCredits);

console.log(student2.lastName);
console.log(student2.middleName);
console.log(student2.firstName);
console.log(student2.gender);
console.log(student2.nationality);
console.log(student2.state);
console.log(student2.LGA);
console.log(student2.town);
console.log(student2.center);
console.log(student2.examNumber);
console.log(student2.subject1);
console.log(student2.subject2);
console.log(student2.subject3);
console.log(student2.subject4);
console.log(student2.subject5);
console.log(student2.subject6);
console.log(student2.subject7);
console.log(student2.subject8);
console.log(student2.subject9);
console.log(student2.subject10);
console.log(student2.subject11);
console.log(student2.subject12);
console.log(student2.score1);
console.log(student2.score2);
console.log(student2.score3);
console.log(student2.score4);
console.log(student2.score5);
console.log(student2.score6);
console.log(student2.score7);
console.log(student2.score8);
console.log(student2.score9);
console.log(student2.score10);
console.log(student2.score11);
console.log(student2.score12);
console.log(student2.totalSubjectsRegistered);
console.log(student2.totalCredits);

console.log(student3.lastName);
console.log(student3.middleName);
console.log(student3.firstName);
console.log(student3.gender);
console.log(student3.nationality);
console.log(student3.state);
console.log(student3.LGA);
console.log(student3.town);
console.log(student3.center);
console.log(student3.examNumber);
console.log(student3.subject1);
console.log(student3.subject2);
console.log(student3.subject3);
console.log(student3.subject4);
console.log(student3.subject5);
console.log(student3.subject6);
console.log(student3.subject7);
console.log(student3.subject8);
console.log(student3.subject9);
console.log(student3.subject10);
console.log(student3.subject11);
console.log(student3.subject12);
console.log(student3.score1);
console.log(student3.score2);
console.log(student3.score3);
console.log(student3.score4);
console.log(student3.score5);
console.log(student3.score6);
console.log(student3.score7);
console.log(student3.score8);
console.log(student3.score9);
console.log(student3.score10);
console.log(student3.score11);
console.log(student3.score12);
console.log(student3.totalSubjectsRegistered);
console.log(student3.totalCredits);

console.log(student4.lastName);
console.log(student4.middleName);
console.log(student4.firstName);
console.log(student4.gender);
console.log(student4.nationality);
console.log(student4.state);
console.log(student4.LGA);
console.log(student4.town);
console.log(student4.center);
console.log(student4.examNumber);
console.log(student4.subject1);
console.log(student4.subject2);
console.log(student4.subject3);
console.log(student4.subject4);
console.log(student4.subject5);
console.log(student4.subject6);
console.log(student4.subject7);
console.log(student4.subject8);
console.log(student4.subject9);
console.log(student4.subject10);
console.log(student4.subject11);
console.log(student4.subject12);
console.log(student4.score1);
console.log(student4.score2);
console.log(student4.score3);
console.log(student4.score4);
console.log(student4.score5);
console.log(student4.score6);
console.log(student4.score7);
console.log(student4.score8);
console.log(student4.score9);
console.log(student4.score10);
console.log(student4.score11);
console.log(student4.score12);
console.log(student4.totalSubjectsRegistered);
console.log(student4.totalCredits);

// Classwork 1
function Player(lastName, firstName, nickName, age, nationality,  nationalJerseyNumber, club, clubJerseyNumber, clubCountry, division, position, strongFoot, height, trait, goals, assist, yellowCard, redCard, marketValue){
    this.lastName = `Last Name: ${lastName}`;
    this.firstName = `First Name: ${firstName}`;
    this.nickName = `Nick Name: ${nickName}`;
    this.age = `Age: ${age}`;
    this.nationality = `Nationality: ${nationality}`;
    this.nationalJerseyNumber = `National Jersey Number: ${nationalJerseyNumber}`;
    this.club = `Club: ${club}`;
    this.clubJerseyNumber = `Club Jersey Number: ${clubJerseyNumber}`;
    this.clubCountry = `Club Country: ${clubCountry}`;
    this.division = `Division: ${division}`;
    this.position = `Position: ${position}`;
    this.strongFoot = `Strong Foot: ${strongFoot}`;
    this.height = `Height: ${height}`;
    this.trait = `Trait: ${trait}`;
    this.goals = `Goals: ${goals}`;
    this.assist = `Assist: ${assist}`;
    this.yellowCard = `Yellow Card: ${yellowCard}`;
    this.redCard = `Red Card: ${redCard}`;
    this.marketValue = `Market Value: ${marketValue}`;
    this.bio = function(){
        console.log(`My name is ${lastName} ${firstName}. My fans call me ${nickName}. I am from ${nationality} and I play for ${club}.`);
    }
}

const player1 = new Player("Martins", "Obafemi", "Oba Goal", 30, "Nigeria",  9, "Inter Milan", 30, "Italy", "First", "Striker", "Left", "5ft 10", "Pace", 324, 157, 25, 2, "25 Million Euros");
console.log(player1.lastName);
console.log(player1.firstName);
console.log(player1.nickName);
console.log(player1.age);
console.log(player1.nationality);
console.log(player1.nationalJerseyNumber);
console.log(player1.club);
console.log(player1.clubJerseyNumber);
console.log(player1.clubCountry);
console.log(player1.division);
console.log(player1.position);
console.log(player1.strongFoot);
console.log(player1.height);
console.log(player1.trait);
console.log(player1.goals);
console.log(player1.assist);
console.log(player1.yellowCard);
console.log(player1.redCard);
console.log(player1.marketValue);
player1.bio();

// Classwork 2
function FlightTicket(lastName, middleName, firstName, emailAddress, address, contact, nextOfKin, nextOfKinPhoneNumber, travelFrom, travelTo, boardingTime, departureTime, arrivalTime, ticketNumber, flightNumber, seatNumber){
    this.lastName = `Last Name: ${lastName}`;
    this.middleName = `Middle Name: ${middleName}`;
    this.firstName = `First Name: ${firstName}`;
    this.emailAddress = `Email Address: ${emailAddress}`;
    this.address = `Address: ${address}`;
    this.contact = `Contact: ${contact}`;
    this.nextOfKin = `Next of Kin: ${nextOfKin}`;
    this.nextOfKinPhoneNumber = `Next of Kin Phone Number: ${nextOfKinPhoneNumber}`;
    this.travelFrom = `Travelling From: ${travelFrom}`;
    this.travelTo = `Travelling To: ${travelTo}`;
    this.boardingTime = `Boarding Time: ${boardingTime}`;
    this.departureTime = `Departure Time: ${departureTime}`;
    this.arrivalTime = `Arrival Time: ${arrivalTime}`;
    this.ticketNumber = `Ticket Number: ${ticketNumber}`;
    this.flightNumber = `Flight Number: ${flightNumber}`;
    this.seatNumber = `Seat Number: ${seatNumber}`;
}

const passenger1 = new FlightTicket("Kanu", "Cynthia", "Chidinma", "cynthia@yahoo.com", "Lekki Phase 1", "+234803344556", "Kanu Grace", "+2347079778780", "Lagos, Nigeria", "New York", "11:45pm", "1:00am", "8:00am", 123456, "AB017", "16C");

console.log(passenger1.lastName);
console.log(passenger1.middleName);
console.log(passenger1.firstName);
console.log(passenger1.address);
console.log(passenger1.contact);
console.log(passenger1.nextOfKin);
console.log(passenger1.nextOfKinPhoneNumber);
console.log(passenger1.travelFrom);
console.log(passenger1.travelTo);
console.log(passenger1.boardingTime);
console.log(passenger1.departureTime);
console.log(passenger1.arrivalTime);
console.log(passenger1.ticketNumber);
console.log(passenger1.flightNumber);
console.log(passenger1.seatNumber);


/* A constructor function therefore is similar to an object and its properties and values.

    - It makes use of the 'new' keyword and uses it to create a new instance of the same object.
      If that 'new' keyword is omitted, the constructor function will not behave as expected. 

    - It makes use of the 'this' keyword to refer to the object being created by the constructor.

    - Lastly, it typically makes use of an uppercase first letter to name its function.

We will demonstrate the syntax of a constructor function by firstly defining an object, its properties 
and values.

Then we will convert that object into a constructor function. 
We will call the function after that and display the output.

Let us start with three (3) objects:
       1 - a person object
       2 - a fruit object
       3 - a country object

EXAMPLE 1 

    let thePerson1 = {
        first name: "Jason",
        middle name: "Damian",
        last name: "Woods",
        age: "37"        
      }      

      let thePerson2 = {
        first name: "Chinenye",
        middle name: "Angela",
        last name: "Adaku",
        age: "30"       
      }    

      let thePerson3 = {
        first name: "Abubakar",
        middle name: "Mohammed",
        last name: "Adamu",
        age: "47"          
      }    

     
      let theFruit1 = {
        name: "Banana",
        type: "Jamaican",
        store: "Walmart",
        price: "$1"        
      }      

      let theFruit2 = {
        name: "Apple",
        type: "Gala",
        store: "Kroeger",
        price: "$2"        
      }      

      let theFruit3 = {
        name: "Oranges",
        type: "Golden",
        store: "Publix",
        price: "$1"        
      }      


      let theCountry1 = {
        country name: "USA",
        population: "350m",
        gdp: "$3t"
        continent: "North America", 
      }      

      let theCountry2 = {
        country name: "Canada",
        population: "40m",
        gdp = "$1t"
        continent: "North America", 
      }    

      let theCountry3 = {
        country name: "Mexico",
        population: "10m",
        gdp: "500m",
        continent: "South America",        
      }    

Note the following in the object examples above
      - The first line in each example gives us the object (person, fruit, country)
      - The 2nd, 3rd and 4th lines gave us the properties per object and their corresponding values

We are going to render these objects and their properties using a constructor function. 
We will start by creating a constructor from where we will build multiple instances of the object 
and their different properties. 

We will also make use of the 'new' and 'this' keywords. 

Lastly we will build a replicable template.    */




// DEMONSTRATION - CONSTRUCTOR FUNCTIONS
function Person(firstName, middleName, lastName, age){
    this.firstName = firstName,
    this.middleName = middleName,
    this.lastName = lastName,
    this.age = age
}

let Person1 = new Person ("Jason", "Damian", "Woods", "37");
let Person2 = new Person ("Chinenye", "Angela", "Adaku", "30");
let Person3 = new Person ("Abubakar", "Mohammed", "Adamu", "47");
let Person4 = new Person ("Kwame", "James", "Mensah", "27");
let Person5 = new Person ("Kofi", "Yaw", "Abena", "22");
let Person6 = new Person ("Abimbola", "James", "Lookman", "33");
let Person7 = new Person ("Kemi", "Victoria", "Badenoch", "45");

console.log(Person1.firstName);
console.log(Person1.middleName);
console.log(Person1.lastName);
console.log(Person1.age);

console.log(Person2.firstName);
console.log(Person2.middleName);
console.log(Person2.lastName);
console.log(Person2.age);

console.log(Person3.firstName);
console.log(Person3.middleName);
console.log(Person3.lastName);
console.log(Person3.age);

console.log(Person4.firstName);
console.log(Person4.middleName);
console.log(Person4.lastName);
console.log(Person4.age);

console.log(Person5.firstName);
console.log(Person5.middleName);
console.log(Person5.lastName);
console.log(Person5.age);

console.log(Person6.firstName);
console.log(Person6.middleName);
console.log(Person6.lastName);
console.log(Person6.age);

console.log(Person7.firstName);
console.log(Person7.middleName);
console.log(Person7.lastName);
console.log(Person7.age);


function Fruits(name, type, store, price) {
    this.name = name
    this.type = type,
    this.store = store,
    this.price = price
}

let Fruits1 = new Fruits("banana", "jamaican", "walmart", "$1");
let Fruits2 = new Fruits("apple", "gala", "kroeger", "$2");
let Fruits3 = new Fruits("oranges", "golden", "publix", "$1");
let Fruits4 = new Fruits("plums", "australian", "pulix", "$2");
let Fruits5 = new Fruits("tangerine", "arizona", "walmart", "$1.50");
let Fruits6 = new Fruits("avocado", "mexican", "walmart", "$2.50");
let Fruits7 = new Fruits("watermelon", "ghanaian", "publix", "$1.75");

console.log(Fruits1.name);
console.log(Fruits1.type);
console.log(Fruits1.store);
console.log(Fruits1.price);

console.log(Fruits2.name);
console.log(Fruits2.type);
console.log(Fruits2.store);
console.log(Fruits2.price);

console.log(Fruits3.name);
console.log(Fruits3.type);
console.log(Fruits3.store);
console.log(Fruits3.price);

console.log(Fruits4.name);
console.log(Fruits4.type);
console.log(Fruits4.store);
console.log(Fruits4.price);

console.log(Fruits5.name);
console.log(Fruits5.type);
console.log(Fruits5.store);
console.log(Fruits5.price);

console.log(Fruits6.name);
console.log(Fruits6.type);
console.log(Fruits6.store);
console.log(Fruits6.price);

console.log(Fruits7.name);
console.log(Fruits7.type);
console.log(Fruits7.store);
console.log(Fruits7.price);


function Country(name, population, gdp, continent) {
    this.name = name,
    this.population = population,
    this.gdp = gdp,
    this.continent = continent
}

let Country1 = new Country("USA", "350m", "$3t", "North America");
let Country2 = new Country("Canada", "40m", "$1t", "North America");
let Country3 = new Country("Mexico", "10m", "$500m", "South America");
let Country4 = new Country("UK", "200m", "$1.5t", "Europe");
let Country5 = new Country("Japan", "500m", "$5t", "Asia");
let Country6 = new Country("Nigeria", "100m", "$1t", "Africa");
let Country7 = new Country("Ghana", "70m", "$1t", "Africa");

console.log(Country1.name);
console.log(Country1.population);
console.log(Country1.gdp);
console.log(Country1.continent);

console.log(Country2.name);
console.log(Country2.population);
console.log(Country2.gdp);
console.log(Country2.continent);

console.log(Country3.name);
console.log(Country3.population);
console.log(Country3.gdp);
console.log(Country3.continent);

console.log(Country4.name);
console.log(Country4.population);
console.log(Country4.gdp);
console.log(Country4.continent);

console.log(Country5.name);
console.log(Country5.population);
console.log(Country5.gdp);
console.log(Country5.continent);

console.log(Country6.name);
console.log(Country6.population);
console.log(Country6.gdp);
console.log(Country6.continent);

console.log(Country7.name);
console.log(Country7.population);
console.log(Country7.gdp);
console.log(Country7.continent);



/* RECURSION/ RECURSIVE FUNCTIONS - FUNCTION TYPE SIX (6)
In computer science and software engineering, recursion is a technique used to break 
complex problems into smaller parts that are simpler to execute and that are repeatable. 

When you apply a recursive technique, you repeat smaller portions of a bigger problem
until you completely solve the bigger problem and aggregate the answers into one.

Recursion is a technique in which the solution to a bigger problem is dependent on the
aggregate solutions of each of the smaller sub-problems that make up the bigger problem. 

This method of problem solving in computer science is known as DIVIDE AND CONQUER. Divide and conquer is a 
known technique in algorithm design. An algorithm is simply a series of steps used to solve a problem. 
Recursion is a divide and conquer algorithmic method and can be executed in JavaScript as function. 

When executed as code, recursion is typically expressed as a function which calls itself 
over and over until it reaches a stopping or terminating condition. In this regard, a 
recursive function is similar to
        (i) a callback function which calls itself repeatedly
        (ii) a loop a WHILE LOOP. 

However, a callback function calls itself repeatedly under asynchronous programming conditions. But a recursive function calls itself repeatedly using a divide and conquer approach.

Secondly, a recursive function if similar to a for-loop in that both of them repeatedly execute themselves on a piece of code until they reach a terminal condition. However, a loop does this in an iterative manner while a recursive function does this using a divide and conquer approach.

It is important to note that callback functions, for-loops and recursive functions have their roles in computer science. They help solve critical problems that may be critical to society.

Yet, there is a difference.

Since we have already covered callback functions, we'll focus on the difference between recursive functions and while loops.

A loop uses an iterative process that calls itself over and over again, repeating the same
code until it solves the problem. When we use a simple 'for loop' process for example to
display numbers 1 - 10, we follow an iterative process. We finish one step and move to 
another sequentially and continue in an iterative manner until we finish solving the problem.

Recursion is different in that it follows a slightly different process which is NOT ITERATIVE.
Recursion will break down the problem into smaller solvable units and keep recursing into 
itself until it reaches a terminal condition. Then it stops.

Recursion is very functional when applied to a tree structure or to objects composed of other objects.

Every recursive function has two (2) major parts:
       1 - The Base Case
       2 - The Recursive Case

The Base Case is what causes the recursive function not to repeatedly call itself 'ad inifitum'. 
The Base Case is also called the Terminating or Stopping condition. 

Without a Base Case, every code executed recursively will loop infinitely and/or lead to stack overflow.

The Recursive Case is the function that repeatedly calls itself, usually with an argument different from
what was called before. This explains why recursion is very useful when applied to a tree structure.

Let us attempt to create a function that allows us to count down numbers. 
We will create three (3) instances of this countdown:
      1 - Using a Loop
      2 - Using Recursion without a base case
      3 - Using Recursion with a base case   */


// RECURSION - EXAMPLE 1 - USING A LOOP
let countDown = (sum) =>{
    while (sum > 0){
        console.log(sum)
        sum--;
    }
};
countDown (10);


// EXAMPLE 2 - RECURSIVE FUNCTION WITHOUT A BASE CASE
const myCountDown = (launch) => {
    console.log (launch);
    myCountDown (launch);
};
// myCountDown (5);

/*** Do not attempt to uncomment Example 2 above as it has no terminating or base case and will lead
     to an infinite loop/ stack overflow. This can crash your system. 
     
     In every recursive function, JavaScript first looks for the base or terminating case. 
     If it does not find it, it loops interminably.
     
     In Example 2 above, JavaScript did not see a base case and so, this leads to an infinite loop.
     
     Let us now go to Example 3 below and tell JavaScript to stop looping. 
     We will do this by inserting a base case.   */


// EXAMPLE 3 - RECURSIVE FUNCTION WITH A BASE CASE
   const theCountDown = (kickOff) =>{
     if (kickOff === 0){
         return;
     }
         console.log (kickOff)
         theCountDown (kickOff - 1);
     };
     theCountDown (25);


// EXAMPLE 4 - USING A LOOP (CLASS WORK)
let evenNumbers1 = (even) =>{
    while (even > 0){
        if (even % 2 === 0){
            console.log (even)
        }
        even--;
    }
};
evenNumbers1 (20);


// EXAMPLE 5 - RECURSIVE FUNCTION WITH A BASE CASE (CLASS WORK)
const oddNumbers = (odd) =>{
    if (odd === 0){
        return;
    };
    if (odd % 2 === 1){
        console.log (odd)
    } 
        oddNumbers (odd - 1);
    };
    oddNumbers (15);

// Example 1 - Recursive Function - Recursion starts (25), countDown (-1), Base case 0
/* const theCountDown = (kickOff) => {
  if (kickOff === 0) {
    return;
  }
  console.log(kickOff);
  theCountDown(kickOff - 1);
};
theCountDown(25); */

// Example 2 - Recursive Function - Recursion starts (50), countDown (-2), Base case (<= 5)
/* const herCountDown = (kickOff) => {
  if (kickOff <= 5) {
    return;
  }
  console.log(kickOff);
  herCountDown(kickOff - 2);
};
herCountDown(50); */

// Example 3 - Recursive Function - Recursion starts (1), countUp (+1), Base case (50)
/* const countUp = (herKickOff) => {
  if (herKickOff === 50) {
    return;
  }
  console.log(herKickOff);
  countUp(herKickOff + 1);
};
countUp(1); */

// Example 4 - Recursive Function - Recursion starts (0), countUp (+2), Base case (50)
/* const myCountUp = (herKickOff) => {
    if (herKickOff === 50) {
      return;
    }
    console.log(herKickOff);
    myCountUp(herKickOff + 2);
  };
  myCountUp(0); */

  // Example 5 - Classwork 1 - Recursive Function - Recursion starts (31), countDown (-1), Base case (<=2)
  const myBirthDay = (startTime) => {
    if (startTime <= 2) {
      return;
    }
    console.log(startTime);
    myBirthDay(startTime - 1);
  };
  myBirthDay(23);


// Example 6 - work in progress
/* const birthDayCountDown = () => {
  const now = new Date();
  console.log(now);
  const birthDate = new Date("2025-05-31T23:59:59");

  const diff = birthDate - now;
  console.log(diff);

  const days = Math.floor(diff/(1000 * 60 * 60 * 24));

  const hours = Math.floor(diff / (1000 * 60 * 60) % 24);

  const minutes = Math.floor(diff / (1000 * 60) % 60);

  const seconds = Math.floor(diff / (1000) % 60);

  console.log(days, hours, minutes, seconds);

  if (diff <= 0){
    clearInterval(timeInterval);
    return;
  }
} */
// birthDayCountDown()
// const timeInterval = setInterval(birthDayCountDown, 1000);

/* 
Early Warning System for a project that should end by June 30th, 2025. The countdown should start from today February 25th, 2025. 

First Warning - March 31st, 2025 - 33rd day = 33 * 24 * 60 * 60 * 1000 
Second warning - April 30th, 2025 - 63rd day = 63 * 24 * 60 * 60 * 1000
Third warning - May 30th, 2025 - 94th day = 94 * 24 * 60 * 60 * 1000
Penultimate warning - June 15th, 2025 - 109th day = 109 * 24 * 60 * 60 * 1000
Final warning - June 29th, 2025. - 123rd day = 123 * 24 * 60 * 60 * 1000

warnings should be in console.log.
*/

// We can use a single function for each of the five warnings.
/* const warningSystem = () => {
  const now = new Date();
  const targetDate = new Date("2025-06-30T23:59:59");

  const diff = targetDate - now;
  console.log(diff);

  const firstWarning = 33 * 24 * 60 * 60 * 1000;
  const secondWarning = 63 * 24 * 60 * 60 * 1000;
  const thirdWarning = 94 * 24 * 60 * 60 * 1000;
  const penultimateWarning = 109 * 24 * 60 * 60 * 1000;
  const finalWarning = 123 * 24 * 60 * 60 * 1000;

  console.log(firstWarning, secondWarning, thirdWarning, penultimateWarning, finalWarning);
  console.log(typeof diff, typeof firstWarning);

  if (diff <= 0){
    return;
  }
  else if (diff === firstWarning){
    console.log("This is your first warning");
  }
  else if (diff === secondWarning){
    console.log("This is your second warning");
  }
  else if (diff === thirdWarning){
    console.log("This is your third warning");
  }
  else if (diff === penultimateWarning){
    console.log("This is your penultimate warning");
  }
  else if (diff === finalWarning){
      console.log("If you haven't finished the project by now, then i can't help you");
  }
  
}
warningSystem();
 */

const warningSystem1 = () => {
    const now = new Date();
    const targetDate = new Date("2025-02-26T01:30:00");
  
    const diff = targetDate - now;
    console.log(diff);
  
    const firstWarning = 60 * 1.5 * 1000;
    const secondWarning = 60 * 1 * 1000;
    const thirdWarning = 60 * 0.5 * 1000;
   
  
    // console.log(firstWarning, secondWarning, thirdWarning);
    // console.log(typeof diff, typeof firstWarning);
  
    if (diff <= 0){
      clearInterval(warningInterval);
      return;
    }
    else if (diff <= firstWarning && diff > secondWarning){
      console.log("This is your first warning");
    }
    else if (diff <= secondWarning && diff > thirdWarning){
      console.log("This is your second warning");
    }
    else if (diff <= thirdWarning){
      console.log("This is your third warning");
    }
    
  }
  
  const warningInterval = setInterval(warningSystem1, 1000);

/* 
HIGHER ORDER FUNCTIONS (MAP, FILTER, REDUCE) - FUNCTION TYPE SEVEN (7) 

map(), filter() and reduce() are a unique set of capabilities that JavaScript brings into programming. 
They can be treated as Higher Order Functions because they take user-defined functions as parameters. 

Higher Order Functions are also known as ARRAY METHODS.

Let us quickly look at each of them starting with map();


MAP (map())
map() is used when you need to apply the same operation to every element in an array resulting in
the transformation of the original array to a new array of same length but different set of values.

So map() therefore does the following:
    1 - It creates a new array from calling a function for each array element
    2 - It does not execute the function for empty element
    3 - It leaves the original array unchanged

In other words, when you execute a map method, you leave the original array intact but create
a new array of the same length, but with a transformed set of values.

Example:
    original array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    action to be performed = double each element in the array set above

    new array created = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    - Notice that the original array above is left unchanged
    - Notice also that the same action is applied to every element in the array
    - Lastly, notice that a new array is created from the original one. 
    - The new array has the same length as the old one but with different set of values

    
REAL LIFE APPLICATION - WHY map() is IMPORTANT?

Case 1 - Imagine a situation where you work with Amazon and Amazon has 1000 products on display
and you want to give customers a holiday discount of 50%. You can do that using map().

The first thing you do is capture all the prices you want to apply discount to into a one 
dimensional array format. For example:
     Amazon prices = ["$4", "$6", "$2", "$24", "$14", "$16", "$40", "$13", "$30"];
     Apply 50% discount
     New Amazon prices = ["$2", "$3", "$1", "$12", "$7", "$8", "$20", "$6.50", "$15"]


Case 2 - Imagine a case where you have 50 names all in lower case and you either want to
convert each of the first letter to upper case or all the names to upper case. 
You can use the map() method. 
Example:
     Names of African actors = ["samloko", "julietibrahim", "osuofia", "kennethokonkwo"];
     Action to be performed = convert all the names to upper case
     Names in upper case = = ["SAMLOKO", "JULIETIBRAHIM", "OSUOFIA", "KENNETHOKONKWO"]


Case 3 - Imagine a situation where you import 100,000 records from a 3rd party source
and the date format is different from the format that your data dictionary accepts;
and now you have to convert 100,000 dates into a format that your database will accept
Example:
      Original date format = ["12/12/2024", "03/11/2023", "17/08/2022", "09/10/2021"];
      Action to be performed = convert the date format above to "mm-dd-yyyy"
      New date format = ["12-12-2024", "11-03-2023", "08-17-2022", "10-09-2021"]


DEMONSTRATION USING ACTUAL SYNTAX

DEMONSTRATION 1
Imagine an array of say 7 elements denoting the monthly salaries of 7 staff in a company.
The business owner wants to pay his staff a holiday bonus of double what they earn monthly.
      Current monthly pay = ["$5000", "$6000", "$7200", "$8000", "$10000", "$14000", "$15000"];
      Action to be performed = double the salaries
      New date format = ["$10000", "$12000", "$14400", "$16000", "$20000", "$28000", "$30000"]

    - To convert this to code, we need to remember that the map() method uses the .map() keyword

    - Inside of the parenthesis, you put the instructions that are to be executed and give that
      instruction a new function name. 
      
    - It is that new function name that will be console.log to render the new array of salaries.

Let us do this example using an arrow function  */ 

const staffSalaries = [5000, 6000, 7200, 8000, 10000, 14000, 15000];

const newStaffSalaries = staffSalaries.map(n => n*2);

console.log (newStaffSalaries);


let 


//DEMONSTRATION 2
const africanActors = ["sam loko", "juliet ibrahim", "patience ozokwor", "kenneth okonkwo"]

const upperCaseActors = africanActors.map(upperCase);

console.log (upperCaseActors);

function upperCase (element){
    return element.toUpperCase();
}


//DEMONSTRATION 3 (CLASS WORK 1 - By Patrick Nkwo)
const foodPrices = [100, 150, 200, 500, 800, 1000]

const percentageFoodPriceIncrease = foodPrices.map(val => percentageIncrease(val, 10));

console.log (percentageFoodPriceIncrease);

function percentageIncrease (element, percentage){
    return element *((percentage + 100)/100);
}


// DEMONSTRATION 4 (CLASS WORK 2)
const stampRate = [200, 500, 100, 50, 300, 1000, 2000];

const newStampRate = stampRate.map(n => n/10 + n);

console.log (newStampRate);



// DEMONSTRATION 5 (CLASS WORK 3A)
const waterRate = [300, 600, 700, 500, 400, 100, 200];

const newWaterRate = waterRate.map(n => n * 1.2);

console.log (newWaterRate);


// DEMONSTRATION 6 (CLASS WORK 3B)
const fireRate = [300, 600, 700, 500, 400, 100, 200];

const newFireRate = fireRate.map(n => n/5 + n);

console.log (newFireRate);

// Let us do this example using an arrow function  

/* const staffSalaries = [5000, 6000, 7200, 8000, 10000, 14000, 15000];

const newStaffSalaries = staffSalaries.map(n => n*2);

console.log (newStaffSalaries); */

// Demonstration 1b
/* let currentPrice = [100, 20, 200, 300, 40, 800, 1000, 120, 80, 60];

let adjustedPrice = currentPrice.map((num) => (num / 5) * 4 );
console.log(adjustedPrice); */

// DEMONSTRATION 1C
// const currentPrice1 = ["apple: 50", "mangoes: 20", "cucumber: 10", "peaches: 5"];

// const currentPrice1 = [ 50, 20, 10, 5];

/* const adjustPrice1 = currentPrice1.map(num => num * 1.5);
console.log(adjustPrice1); */

/* const newPrice = [50, 20, 10, 5];
const newAdjustedPrice = newPrice.map(price => price * 1);
console.log(newAdjustedPrice); */

function currentPrice2 (apple, mangoes, cucumber, peach){
    console.log( "Current Prices:" + "apple: " + "$" + apple + ",", "mangoes: " + "$" + mangoes + ",", "cucumber: " + "$" + cucumber + ",", "peach: " + "$" + peach);
  }
  currentPrice2(50*1, 20*1, 10*1, 5*1);
  
  function currentPrice3 (apple, mangoes, cucumber, peach){
    console.log("Adjusted Prices:" + "apple: " + "$" + apple + ",", "mangoes: " + "$" + mangoes + ",", "cucumber: " + "$" + cucumber + ",", "peach: " + "$" + peach);
  }
  currentPrice3(50*1.5, 20*1.5, 10*1.5, 5*1.5);
  
  // console.log(50, 20, 10, 5);
  
  
  // Class Example:
  const pricePromo = [200, 150, 185, 300, 75];
  const promoPrice = pricePromo.map((price) => price * 0.95);
  console.log(promoPrice);
  
  const pricePromo2 = ["blender: $200", "juicer: $150", "toaster: $185", "air fryer: $300", "coffee maker: $75"];
  const promoPrice2 = pricePromo2.map((price) => `Home Appliance: ${price}`);
  console.log(promoPrice2);
  
  
  
  //DEMONSTRATION 2
  /* const africanActors = ["sam loko", "juliet ibrahim", "patience ozokwor", "kenneth okonkwo"]
  
  const upperCaseActors = africanActors.map(upperCase);
  
  console.log (upperCaseActors);
  
  function upperCase (element){
      return element.toUpperCase();
  } */
  
  
  //DEMONSTRATION 3 (CLASS WORK 1 - By Patrick Nkwo)
  /* const foodPrices = [100, 150, 200, 500, 800, 1000]
  
  const percentageFoodPriceIncrease = foodPrices.map(val => percentageIncrease(val, 10));
  
  console.log (percentageFoodPriceIncrease);
  
  function percentageIncrease (element, percentage){
      return element *((percentage + 100)/100);
  }
   */
  
  // DEMONSTRATION 4 (CLASS WORK 2)
  /* const stampRate = [200, 500, 100, 50, 300, 1000, 2000];
  
  const newStampRate = stampRate.map(n => n/10 + n);
  
  console.log (newStampRate);
   */
  
  
  // DEMONSTRATION 5 (CLASS WORK 3A)
  /* const waterRate = [300, 600, 700, 500, 400, 100, 200];
  
  const newWaterRate = waterRate.map(n => n * 1.2);
  
  console.log (newWaterRate); */
  
  
  // DEMONSTRATION 6 (CLASS WORK 3B)
  /* const fireRate = [300, 600, 700, 500, 400, 100, 200];
  
  const newFireRate = fireRate.map(n => n/5 + n);
  
  console.log (newFireRate); */
  

/* 
FILTER (filter()) 
The Filter (filter()) method of an array is a bit different from the map() method.

The filter() method is used to create a new array, this new array contains only elements 
that pass a given test. The new array is a smaller portion of the original one.
The new array returns a subset of the original array set.

The filter() method uses Boolean logic in its callback function to determine whether 
or not each item in an original array should be included in the new and smaller array.

The filter() method is iterative. It calls a provided function once for each array and
constructs a new array made up of all the values for which the callback returns a true value.

Array elements which do not pass the callback function test are excluded from being included
in the new array. Let us look at several examples

EXAMPLE 1: 
    Original array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    Action to be performed = (a) select even numbers in the array set
                             (b) display the result in a new array
    New array/result = [2, 4, 6, 8, 10];


EXAMPLE 2:
    Original array (scores by students in a course) = [70, 65, 90, 85, 42, 98, 87, 71, 75];
    Action to be performed = (a) create an admission list by selecting those whose grade >= 80
                             (b) display the result/output in a new array
    New array/result = [90, 85, 98, 87];

    
EXAMPLE 3:
    Original array (monthly crime statistics average for 10 years) = 
             ["Jan-250", "Feb- 350", "Mar-300", "Apr-300", 'May-150", "Jun-256", "Jul-177"];
    Actions to be performed = predict months that crime is likely to cross the 200 threshhold
    New array/output = ["Jan", "Feb", "Mar", "Apr", "Jun"];

You can see from the three(3) examples above that the reduce() array method has day-to-day
application. It can be used in any situation; eduction, healthcare, crime management, etc.

It is important to note that as in map(), filter() uses the filter() keyword.
Let us try a few practical coding examples.

Our 1st example will use an arrow function. Our other examples will use a normal, non-arrow function.
*/

// DEMONSTRATION 1 - USING AN ARROW FUNCTION
const iNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const iEvenNumbers = iNumbers.filter(n => n % 2 === 0);
console.log (iEvenNumbers);


// DEMONSTRATION 2 - USING A NORMAL CALLBACK FUNCTION
let tNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tAllEven = tNumbers.filter(tEven);

console.log (tAllEven);

function tEven (element){
    return element % 2 === 0
} 


// DEMONSTRATION 3 - DECLARING A FUNCTION BEFORE CALLING IT (CLASS WORK)
let zNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let zAllEven = zNumbers.filter(zEven);

console.log (zAllEven);

function zEven (element){
    return element % 2 === 0
} 


// DEMONSTRATION 4 - USING A NORMAL CALLBACK FUNCTION (ODD NUMBERS)
let kNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let kAllOdd = kNumbers.filter(kOdd);

console.log (kAllOdd);

function kOdd (element){
    return element % 2 !== 0;
} 


// DEMONSTRATION 5 - USING A NORMAL CALLBACK FUNCTION
const iGrades = [1600, 1300, 1500, 1550, 1000, 950, 1100, 1400];

const iResult = iGrades.filter(iScores);

console.log (iResult);

function iScores (element){
    return element >= 1400;
}


// DEMONSTRATION 6 - USING AN ARROW FUNCTION (CLASS WORK)
const tempRead = [80, 82, 73, 64, 54, 60, 65, 81, 77, 40];
const tempEvenRead = tempRead.filter(n => n % 5 === 0);
console.log (tempEvenRead);


// DEMONSTRATION 7 - USING A NORMAL CALLBACK FUNCTION (CLASS WORK)
const tempRead2 = [80, 82, 73, 64, 54, 60, 65, 81, 77, 40];

const tempRead4 = tempRead2.filter(tempRead3);

console.log (tempRead4);

function tempRead3 (element){
    return element > 60;
}


// DEMONSTRATION 7 - USING AN ARROW FUNCTION (CLASS WORK)
const applicants = [{name:"John Doe", yearOfExperience:3, skill:"HTML"}, 
                    {name:"Jane Doe", yearOfExperience:5, skill:"CSS"},
                    {name:"James Smith", yearOfExperience:4, skill:"JavaScript"}];
// const requiredYearsOfExperience = 5;
// const requiredSkill = CSS;
const eligibleCandidates = applicants.filter(applicant => applicant.yearOfExperience >= 5);

console.log (eligibleCandidates);



/* 
REDUCE (reduce()) 
REDUCE (reduce()) is one of the higher order functions in JavaScript, just like map() and filter().

It executes a "reducer" callback function over every element in an array, in an iterative manner.

When this is done, it accumulates the output of every previous operation and uses the accumulated
result to work on/determine the value of the next item in the array. It continues this until every
element in the array is iterated.

Let us demonstrate this using a simple example:

Original array = [1, 2, 3, 4, 5];

When we apply the reduce() method and ask JavaScript to come up with the total sum, here is what
reduce() does:
      step 1 - it treats the first element as the starting element or accumulator value (1)

      step 2 - it adds one(1) to two(2). This gives the total of three(3)
      
      step 3 - it now takes three(3) as the new accumulator value and adds three(3) to it. 
               this gives it the total of six(6). Six(6) becomes the new accumulator value.

      step 4 - it takes six(6) and adds to the next element which is four (4), giving a total
               of ten(10) which becomes the new accumulator value

      step 5 - using ten(10) as the new accumulator value, it now adds it to the next element.
               which is five(5), giving a total of fifteen(15)

What the reduce method has done is take an array of five (5) elements and reduce the output to 
one(1), using an iterative callback function. Let us show another example below.

We are trying to obtain the maximum or minimum value from a number set, displaced in form of
an array. Let us assume that the array is the same as the one above, [1, 2, 3, 4, 5].

The reduce() method will start with an initial accumulator value, which in this case is one (1).

It will then iterate through every element until it gets to the end and then display a single value,
which is either the minimum or maximum, depending on what it initially set out to accomplish.

When dealing with the reducer method, it is important to understand two key concepts:
      1 - the reducer
      2 - the accumulator

It is important that the initial accumulator value be defined. if this is not done, there might be
errors or bugs in our code. 2ndly, the reducer operation must also be defined and these two must be
passed into the callback function. In doing this, four(4) key arguments are passed to the callback
function.
      1 - the accumulator value
      2 - the item value
      3 - the index of the current value
      4 - the array from which the method is called

So the reduce() method, for those who understand arrays is similar to the forEach method() except
that the reduce() method comes with the added ability to collect the result of each iteration as a
single value. Let us try coding some examples.

Suppose Jason is taking an Introduction to Computer Science course and did five(5) tests during 
the semester, and his grades are as follows: [18, 19, 17, 15, 18];

Now the instructor wants to total his scores for the semester in this course.

Let us write a simple reduce() function or method for this.  */

// DEMONSTRATION 1 - USING REDUCE(reduce()) METHOD TO COMPUTE TOTAL SCORES
let jasonGrades = [18, 19, 17, 15, 18];

let totalJasonGrades = jasonGrades.reduce(sum);

console.log (totalJasonGrades);

function sum1 (accumulator, element){
    return accumulator + element
}


// DEMONSTRATION 2 - A cashier wants to add up total sales for the day using the reduce() method
let totalSales = [300, 4000, 5100, 1200, 1500, 6000];

let grandTotalSales = totalSales.reduce(sales);

console.log ("$" + grandTotalSales);

function sales (accumulator, element){
    return accumulator + element
}


// DEMONSTRATION 3 - USING REDUCE (reduce()) METHOD TO FIND OUT THE MAXIMUM VALUE
let tempValue = [22, 25, 27, 28, 30, 33, 35];

let maxTempValue = tempValue.reduce(getMax);

console.log (maxTempValue + " degrees" + " Centigrade");

console.log (maxTempValue + "°" + " Centigrade");

function getMax (accumulator, element){
    return Math.max (accumulator, element);
}


// DEMONSTRATION 4 - USING REDUCE (reduce()) METHOD TO FIND OUT THE MINIMUM VALUE
let minCost = [2, 3, 7, 5, 1, 4, 8, 6, 11, 13, 0.5];

let leastCost = minCost.reduce(getCost);

console.log (leastCost);

function getCost (accumulator, element){
    return Math.min (accumulator, element);
}

 
//DEMONSTRATION 5 - USING REDUCE (reduce()) METHOD TO FIND OUT THE HIGHEST ELECTION SCORE - CLASS WORK 1
let electionScores = [100, 121, 200, 612, 300, 244, 233, 150];

let highestElectionScores = electionScores.reduce(getScores);

console.log (highestElectionScores);

function getScores (accumulator, element){
    return Math.max (accumulator, element);
}


// DEMONSTRATION 6 - USING REDUCE (reduce()) METHOD TO FIND THE TOTAL BLAZER COST - CLASS WORK 2
let theBlazerCost = [250, 350, 550, 1500]; 

let sumBlazerCost = theBlazerCost.reduce(theBlazer)

console.log ("$" + sumBlazerCost);

function theBlazer (accumulator, element){
    return accumulator + element
}


// DEMONSTRATION 7 - USING REDUCE (reduce()) METHOD TO GET THE MINIMUM HAIR CREAM COST - CLASS WORK 3
let hairCream = ["blue-250", "white-300", "red-500", "green-800"]; 

let minHairCream = hairCream.reduce(minHair, Infinity);

console.log(minHairCream);

function minHair(accumulator, element){
    // Extract the numeric value from the string
    let value = parseInt(element.split('-')[1]);

    return Math.min(accumulator, value);
}



/* 

1.JavaScript is an event-driven and a synchronous programming language
2. By synchronous, it means that Code 1 must be executed before code 2, regardless of the time it takes to execute code 1. So JavaScript executes codes sequentially
3. This means that if there are 100 lines of code, JavaScript will iterate through each line in a sequential and linear manner, with each new line waiting for the preceeding one to finish executing
4. So when code in line 2 takes 1000 seconds to execute and code in line 3 takes only 2 seconds, code in line 3 must wait for code in line 2 to finish executing
5. This is known as CODE BLOCKING
6. In other words, Synchronous programming leads to CODE BLOCKING. This can cause a program to take a very long time to execute

7. To deal with this matter, the concept of ASYNCHRONOUS PROGRAMMING was developed
8. This concept of ASYNCHRONOUS PROGRAMMING uses a function called CALLBACK FUNCTION to make its asynchronous operation possible
9. Asynchronous programming means that no code is blocked. If the code in line 2 will take 1000 seconds to execute, the callback function will take that code and pass on to another part of the browser to execute, leaving the main browser to proceed to line 3
10. Asynchronous programming and call back functions created a big relief in the programming community
11. However, it led to another problem which had to do with NESTED functions
12. NESTED functions are functions that are nested in preceeding functions. This in itself created new problems with callbacks. This problem is that of complicated nests that can cause a program to loop interminably, leading to what is known as a CALLBACK HELL or a PYRAMMID OF DOOM
To solve the problem of pyramid of doom, JavaScript invented a new method known as PROMISES or Method Chaining

13. Method Chaining (Promises) enabled JavaScript to either RESOLVE or REJECT an API call or request...also enabling JavaScript to display the status of an asynchronous request...
14. Finally, to deal with problems that came with PROMISES and METHOD CHAINING, JaavaScript created a final approach called ASYNC/ AWAIT
15. async / await helps asynchronous programming execute its code effortlessly like SYNCHRONOUS PRograms

*/