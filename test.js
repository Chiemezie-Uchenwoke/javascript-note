// DEMONSTRATION 1 - USING REDUCE(reduce()) METHOD TO COMPUTE TOTAL SCORES
/* let jasonGrades = [18, 19, 17, 15, 18];

let totalJasonGrades = jasonGrades.reduce(sum1);

console.log (totalJasonGrades);

function sum1 (accumulator, element){
    return accumulator + element
} */

// DEMONSTRATION 1B - CLASSWORK
/* let madamSarahGrades = [74, 64, 86, 92, 99];
let totalMadamSarahGrades = madamSarahGrades.reduce(addGrades);
console.log(totalMadamSarahGrades);

const cutOffMark = 300;

if (totalMadamSarahGrades < cutOffMark){
  console.log(`Your score is below the cut off mark`);
} else{
  console.log(`Score: ${totalMadamSarahGrades}. You met the minimum admission requirement`);
}

function addGrades(accumulator, element){
  return accumulator + element;
} */

// DEMONSTRATION 1C - CLASSWORK
/* const fruits = ["apple", "mango", "orange"];
const totalLetters = fruits.reduce((accumulator, element) => {
  return accumulator + element.length;
}, 0);
console.log(totalLetters); */

// DEMONSTRATION 1D - CLASSWORK
let fashionItems = [
  {
    name: "gele",
    highDemand: true,
    price: 2000
  },
  {
    name: "sun glasses",
    highDemand: false,
    price: 150
  },
  {
    name: "shoes",
    highDemand: true,
    price: 5000
  },
  {
    name: "handbag",
    highDemand: true,
    price: 8000
  }
];

const highDemandProducts = fashionItems.filter((item) => {
  return item.highDemand === true;
});
console.log(highDemandProducts);

const totalCost = highDemandProducts.reduce((accumulator, element) => {
  const value = Number(element.price);
  return accumulator + value;
}, 0);
console.log(totalCost);



// DEMONSTRATION 2 - A cashier wants to add up total sales for the day using the reduce() method
/* let totalSales = [300, 4000, 5100, 1200, 1500, 6000];

function sales (accumulator, element){
    return accumulator + element
}

let grandTotalSales = totalSales.reduce(sales);

console.log ("$" + grandTotalSales); */

/* function sales (accumulator, element){
    return accumulator + element
} */


// DEMONSTRATION 3 - USING REDUCE (reduce()) METHOD TO FIND OUT THE MAXIMUM VALUE
/* let tempValue = [22, 25, 27, 28, 30, 33, 35];

let maxTempValue = tempValue.reduce(getMax);

console.log (maxTempValue + " degrees" + " Centigrade");

console.log (maxTempValue + "°" + " Centigrade");

function getMax (accumulator, element){
    return Math.max (accumulator, element);
} */


// DEMONSTRATION 4 - USING REDUCE (reduce()) METHOD TO FIND OUT THE MINIMUM VALUE
/* let minCost = [2, 3, 7, 5, 1, 4, 8, 6, 11, 13, 0.5];

let leastCost = minCost.reduce(getCost);

console.log (leastCost);

function getCost (accumulator, element){
    return Math.min (accumulator, element);
}
 */
 
//DEMONSTRATION 5 - USING REDUCE (reduce()) METHOD TO FIND OUT THE HIGHEST ELECTION SCORE - CLASS WORK 1
/* let electionScores = [100, 121, 200, 612, 300, 244, 233, 150];

let highestElectionScores = electionScores.reduce(getScores);

console.log (highestElectionScores);

function getScores (accumulator, element){
    return Math.max (accumulator, element);
}
 */

// DEMONSTRATION 6 - USING REDUCE (reduce()) METHOD TO FIND THE TOTAL BLAZER COST - CLASS WORK 2
/* let theBlazerCost = [250, 350, 550, 1500]; 

let sumBlazerCost = theBlazerCost.reduce(theBlazer)

console.log ("$" + sumBlazerCost);

function theBlazer (accumulator, element){
    return accumulator + element
}
 */

// DEMONSTRATION 7 - USING REDUCE (reduce()) METHOD TO GET THE MINIMUM HAIR CREAM COST - CLASS WORK 3
/* let hairCream = ["blue-250", "white-300", "red-500", "green-800"]; 

let minHairCream = hairCream.reduce(minHair, Infinity);

console.log(minHairCream);

function minHair(accumulator, element){
    // Extract the numeric value from the string
    let value = parseInt(element.split('-')[1]);

    return Math.min(accumulator, value);
}
 */