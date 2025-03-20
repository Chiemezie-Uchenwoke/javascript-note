// getElementsByTagName
const cohort1 = document.getElementsByTagName("h1")[2];
cohort1.innerHTML = "This is a combined class";

// getElementsByClassName - Example 1
let cohort3 = document.getElementsByClassName("cohort")[0];
cohort3.innerHTML = "This is Turing Tech";
cohort3.style.fontSize = "48px";
cohort3.style.backgroundColor = "brown";
cohort3.style.textTransform = "capitalize";
cohort3.style.color = "white";
cohort3.style.textAlign = "center";
cohort3.style.border = "2px solid black";
cohort3.style.borderRadius = "7px";


// getElementsByClassName - Example 2
const cohort2 = document.getElementsByClassName("cohort")[1];
cohort2.innerHTML = "Welcome to Turing Tech";
cohort2.style.fontSize = "45px";
cohort2.style.backgroundColor = "blue";
cohort2.style.color = "gold";
cohort2.style.border = "2px solid black";
cohort2.style.borderRadius = "7px";

// Query selector - using a class
const myContainer = document.querySelector(".container");
console.log(myContainer.innerHTML);

console.log(myContainer.innerHTML="God Bless Cohort 2");

console.log(myContainer.innerHTML="God Bless Our Merged class");

myContainer.innerHTML = "Are you enjoying the merged class?";
myContainer.style.fontSize = "50px";
myContainer.style.backgroundColor = "red";
myContainer.style.color = "white";
myContainer.style.border = "2px solid black";
myContainer.style.borderRadius = "7px";


// Query selector - using an Id - Example 1
const myContainer1 = document.querySelector("#container");
console.log(myContainer1.innerHTML);

console.log(myContainer1.innerHTML="God Bless Cohort 2");

console.log(myContainer1.innerHTML="God Bless Our Merged class");

myContainer1.innerHTML = "Is everybody in class?";
myContainer1.style.fontSize = "50px";
myContainer1.style.backgroundColor = "skyblue";
myContainer1.style.color = "red";
myContainer1.style.border = "2px solid black";
myContainer1.style.borderRadius = "7px";

// Query selector - using an Id - Example 2
const myContainer2 = document.querySelector("#container2");
console.log(myContainer2.innerHTML);

console.log(myContainer2.innerHTML="God Bless Cohort 2");

console.log(myContainer2.innerHTML="God Bless Our Merged class");

myContainer2.innerHTML = "We are about to close";
myContainer2.style.fontSize = "50px";
myContainer2.style.backgroundColor = "green";
myContainer2.style.color = "white";
myContainer2.style.border = "2px solid black";
myContainer2.style.borderRadius = "7px";

const story = document.querySelector(".story");

story.style.backgroundColor = "yellow";

const myStory = document.querySelector("div.mystory");

myStory.style.backgroundColor = "red";

const hisStory = document.querySelector("label.hisstory");

hisStory.style.backgroundColor = "green";

const herStory = document.querySelector("h2.herstory");

herStory.style.backgroundColor = "purple";



// querySelectorAll
const fowls = document.querySelectorAll(".fowls");
fowls[0].style.backgroundColor = "green";
fowls[1].style.backgroundColor = "red";
fowls[2].style.backgroundColor = "yellow";
fowls[3].style.backgroundColor = "blue";

const allCattle = document.querySelectorAll(".cattle");
for(let i = 0; i < allCattle.length; i++){
    allCattle[i].style.backgroundColor = "gold";
}

const allCattle1 = document.querySelectorAll(".cattle1");
for(let i = 0; i < allCattle1.length; i++){
    allCattle1[i].style.backgroundColor = "green";
}

const allCattle2 = document.querySelectorAll(".cattle2");
for(let i = 0; i < allCattle2.length; i++){
    allCattle2[i].style.backgroundColor = "skyblue";
}

// canadian-cities
const canadianCities = document.querySelectorAll("ul > li.canadian-cities");
for(let i = 0; i < canadianCities.length; i++){
    canadianCities[i].style.backgroundColor = "red";
    canadianCities[i].style.fontSize = "48px";
    canadianCities[i].style.color = "white";
}

// cities
const cities = document.querySelectorAll("ul > li.cities");
for(let i = 0; i < cities.length; i++){
    cities[i].style.backgroundColor = "blue";
    cities[i].style.fontSize = "48px";
    cities[i].style.color = "white";
}

const cities1 = document.querySelectorAll("ul > li.cities1");
for(let i = 0; i < cities1.length; i++){
    cities1[i].style.backgroundColor = "brown";
    cities1[i].style.fontSize = "48px";
    cities1[i].style.color = "white";
}

const cities2 = document.querySelectorAll("ul > li.cities2");
for(let i = 0; i < cities2.length; i++){
    cities2[i].style.backgroundColor = "green";
    cities2[i].style.fontSize = "48px";
    cities2[i].style.color = "white";
}

const cities3 = document.querySelectorAll("ul > li.cities3");
for(let i = 0; i < cities3.length; i++){
    cities3[i].style.backgroundColor = "purple";
    cities3[i].style.fontSize = "48px";
    cities3[i].style.color = "white";
}

const cities4 = document.querySelectorAll("ul > li.cities4");
for(let i = 0; i < cities4.length; i++){
    cities4[i].style.backgroundColor = "orange";
    cities4[i].style.fontSize = "48px";
    cities4[i].style.color = "white";
}

const cities5 = document.querySelectorAll("ul > li.cities5");
for(let i = 0; i < cities5.length; i++){
    cities5[i].style.backgroundColor = "black";
    cities5[i].style.fontSize = "48px";
    cities5[i].style.color = "white";
}

const cities6 = document.querySelectorAll("ul > li.cities6");
for(let i = 0; i < cities6.length; i++){
    cities6[i].style.backgroundColor = "indigo";
    cities6[i].style.fontSize = "48px";
    cities6[i].style.color = "white";
}

const cities7 = document.querySelectorAll("ul > li.cities7");
for(let i = 0; i < cities7.length; i++){
    cities7[i].style.backgroundColor = "violet";
    cities7[i].style.fontSize = "48px";
    cities7[i].style.color = "white";
}

const cities8 = document.querySelectorAll("ul > li.cities8");
for(let i = 0; i < cities8.length; i++){
    cities8[i].style.backgroundColor = "aquamarine";
    cities8[i].style.fontSize = "48px";
    cities8[i].style.color = "black";
}

const cities9 = document.querySelectorAll("ul > li.cities9");
for(let i = 0; i < cities9.length; i++){
    cities9[i].style.backgroundColor = "blueviolet";
    cities9[i].style.fontSize = "48px";
    cities9[i].style.color = "white";
}

const cities10 = document.querySelectorAll("ul > li.cities10");
for(let i = 0; i < cities10.length; i++){
    cities10[i].style.backgroundColor = "coral";
    cities10[i].style.fontSize = "48px";
    cities10[i].style.color = "white";
}

// QuerySelectorAll for multiple nesting
const mobilePhones = document.querySelectorAll("#mobile-phones > li ul > li");
for(let i = 0; i < mobilePhones.length; i++){
    mobilePhones[i].style.fontSize = "3rem";
    mobilePhones[i].style.backgroundColor = "red";
    mobilePhones[i].style.color = "white";
    mobilePhones[i].style.marginTop = "0.2rem";
}
