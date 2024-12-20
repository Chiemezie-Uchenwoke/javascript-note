const input = document.querySelector('input');
const submitButton = document.querySelector('.inputBox > button');
const sortButton = document.querySelector('section > button');
const orderedList = document.querySelector('ol');

submitButton.addEventListener('click', submit);

function submit() {
   const inputValue = input.value.trim();
   const nameArray = inputValue.split(' ');
   const capNameArray = [];
 
   for (const name of nameArray) {
      const formalNameCase = name[0].toUpperCase() +
      name.slice(1).toLowerCase();
      capNameArray.push(formalNameCase);
   }
   
   const fullName = capNameArray.join(' ');

   const listItems= document.createElement('li');
   orderedList.append(listItems);

   listItems.innerHTML = fullName;

   input.value = "";
   input.focus();
}

sortButton.addEventListener('click', sort);

function sort() {
   const listItemsNode = document.querySelectorAll('ol > li');
   const listArray = [];
   
   for (const items of listItemsNode) {
      listArray.push(items.innerHTML);
      listArray.sort();
   }
   
   let indexNum = 0; 
   for (const items of listItemsNode) {
      items.innerHTML = listArray[indexNum];
      indexNum ++;
   }
}