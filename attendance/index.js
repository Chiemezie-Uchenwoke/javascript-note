const wrapper = document.getElementById("wrapper");
const userInput = document.getElementById("userinput");
const submitButton = document.getElementById("submit");
const orderedList = document.getElementById("list");

submitButton.addEventListener("click", submitInput);
let myArray = [];


function submitInput(){
    // clear whitespace
    let userInputValue = userInput.value.trim();

    // split the names entered by the user
    const splitName = userInputValue.split(" ");
    console.log(splitName);

    const capitalizedNames = [];

    // pair first letter with rest of letters for each name
    splitName.forEach((name) => {
        const fullName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        console.log(fullName);
        capitalizedNames.push(fullName);
    });

    

    // Joined names
    const joinedNames = capitalizedNames.join(" ");

    // push joined names to myArray
    myArray.push(joinedNames);
    
    // Sort myArray
    myArray.sort();

    // clear ordered list 
    orderedList.innerHTML = "";

    // loop through my array and append each to the ordered list
    myArray.forEach((item) => {
        // Create ordered list
        const listElement = document.createElement("li");
        listElement.innerText = item;

        orderedList.appendChild(listElement);
    });

    // clear the input field
    userInput.value = "";
    
}

// Restart the list
const restartButton = document.getElementById("restart");

restartButton.addEventListener("click", () => {
    orderedList.innerHTML = ""
    // myArray.splice(0);
    myArray = [];
});