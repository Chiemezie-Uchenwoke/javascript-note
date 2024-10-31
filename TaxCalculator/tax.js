/* 
Build a Tax Calculator - The tax is 7%. Users will input their gross income and then we deduct their pension from the gross income. Allowance of 7% will be deducted. The payE is 7%. We then tell them their net income. 
*/
// const grossIncome = Number(prompt("Input your gross income"));
const userInput = prompt("Input your gross income");
const grossIncome = Number(userInput);
console.log(grossIncome);
console.log(typeof grossIncome);

const pension = (8/100) * grossIncome;
console.log(pension);

const allowance = (7/100) * grossIncome;
console.log(allowance);

const taxableIncome = grossIncome - pension - allowance;
console.log(taxableIncome);

const payE = (7/100) * taxableIncome;
console.log(payE);

const netIncome = grossIncome - pension - payE;
console.log(netIncome);

alert("Your net income is " + netIncome + ", your pension is " + pension + ", your payE is " + payE);