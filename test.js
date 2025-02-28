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
