const wrapper = document.getElementById("wrapper");
const userInput = document.getElementById("userinput");
const submitButton = document.getElementById("submit");
const orderedList = document.getElementById("list");

submitButton.addEventListener("click", submitInput);
const myArray = [];


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

    myArray.push(joinedNames);
     
    // Create ordered list
    const listElement = document.createElement("li");
    listElement.innerText = joinedNames;

    // Add list element to the ordered list
    orderedList.appendChild(listElement); 

    // Sort list in ascending order
    const allListElements = document.querySelectorAll(".list > li");
    const arrayList = Array.from(allListElements);

    arrayList.sort((a, b) => {
        return a.textContent.localeCompare(b.textContent)
    });

    // orderedList.innerHTML = "";

    arrayList.forEach((name) => orderedList.appendChild(name));

    userInput.value = "";
 
}

// Restart the list
const restartButton = document.getElementById("restart");

restartButton.addEventListener("click", () => {
    orderedList.innerHTML = ""
});