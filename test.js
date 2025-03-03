// DEMONSTRATION 1 - USING AN ARROW FUNCTION
const iNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const iEvenNumbers = iNumbers.filter(n => n % 2 === 0);
console.log (iEvenNumbers);

let allNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let allEven = allNumbers.filter((n) => n % 2 === 0);
let allOdd = allNumbers.filter((n) => n % 2 != 0);
console.log(allEven);
console.log(allOdd);

// DEMONSTRATION 2 - USING A NORMAL CALLBACK FUNCTION
let tNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tAllEven = tNumbers.filter(tEven);

console.log (tAllEven);

function tEven (element){
    return element % 2 === 0
} 

const nums = [35, 48, 37, 53, 62];
const evenNums = nums.filter(getEven);
function getEven(element){
  return element % 2 === 0
}
console.log(evenNums);

const oddNums = nums.filter(getOdd);
function getOdd(element){
  return element % 2 != 0
}
console.log(oddNums);

const num3 = [77, 78, 83, 45, 105, 68, 88];
const evenNum1 = num3.filter(getEven1);
function getEven1(element){
  return element % 2 === 0;
}
console.log(evenNum1);

const ourFruits = ["apple", "mangoe", "orange", "pineapple", "pear", "tangerine"];
const filterFruits = ourFruits.filter((fruit) => fruit.length > 6);
console.log(filterFruits);

const filterFruits2 = ourFruits.filter((fruit) => fruit.length <= 6);
console.log(filterFruits2);

const ourFruits3 = ["Apple", "mangoe", "Orange", "pineapple", "Pear", "Tangerine"];
const result = ourFruits3.filter((fruit) => fruit.charAt(0) === fruit.charAt(0).toUpperCase());
console.log(result);
const result2 = ourFruits3.map((fruit) => fruit.toUpperCase());
console.log(result2);

// Example: 1 subject each
const waecResults = [
  {
    department: "science",
    subject: "biology"
  },
  {
    department: "art",
    subject: "literature"
  }
];
const waecSubject = waecResults.filter((result) => {
  return result.department === "science";
});
console.log(waecSubject);

const waecSubject1 = waecResults.filter((result) => {
  return result.department === "art";
});
console.log(waecSubject1);

// Example: 5 subjects each
const waecResults3 = [
  {
    department: "science",
    subject: ["biology", "chemistry", "physics", "mathematics", "geography"]
  },
  {
    department: "art",
    subject: ["literature", "government", "history", "commerce", "economics"]
  }
];
const allScienceSubjects = waecResults3.filter((sub) => {
  if (sub.department === "science"){
    return sub.subject;
  }
});
console.log(allScienceSubjects);

const allArtSubjects = waecResults3.filter((sub) => {
  return sub.department === "art";
});
console.log(allArtSubjects);

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
