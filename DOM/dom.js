/*  DOCUMENT OBJECT MODEL - DOM

 DOM means Document Object Model. It is a programming interface in JavaScript for web documents.
 
Anytime that a web page loads and opens, the browser generates a DOM, which is an API connecting the web pages loaded to the programming language (JavaScript) used to give interactivity to the web page. Through that Document Object Model (DOM) API, the programming language used for the web page can call up any web page element or tag and make changes and or additions to them...directly from its code window

DOM works with any programming language that can create interactivity with HTML and CSS
These include
JavaScript
C#
Java
Python
Ruby
Etc
DOM is platform agnostic. It is also language-neutral

 It represents the structure of a web page in a way that programming languages can understand and
 manipulate. 

 Here are the things to note about DOM: 
     - It is platform-agnostic (ie platform neutral)
     - It is also language agnostic (ie language neutral)
     - It allows programs and scripts to dynamically (ie in real time) access and update content 
       structure and document style

It lies at the core of what makes JavaScript a dynamic programming language.


HISTORY OF DOM:
DOM was developed and is still currently owned by W3C. Prior to its development, different scripting 
languages had different ways to access HTML documents. They also had different ways that they used to 
manipulate HTML elements. These differences with their limited methods and individual interfaces is 
today known as DOM Level 0.

In 1998, W3C completed its draft of the first standard DOM specification. This standard was recommended
for all browsers. It became known as DOM Level 1. DOM Level 1 was comprehensive.

In the year 2000, W3C released DOM level 2. Here, new methods like getElementById() was introduced. 
In 2004, DOM Level 3 was released and it added support for things like keyboard event handling. 
Late in 2015, DOM Level 4 was introduced. It is currently the published standard.


DOM LEVELS:
Based on the history above, these are currently the different levels in DOM:
     Level O
     Level 1
     Level 2
     Level 3
     Level 4

Level 0 - This provides a very low level of shared interfaces

Level 1 - This can be described in two (2) parts - CORE and HTML
          CORE provides low-level interfaces that can be used to represent any structured document.
          HTML provides high-level interfaces that can be used to represent HTML documents.

Level 2 - This is made up of six (6) different types of specifications. 
          These are: CORE 2, VIEWS, EVENTS, STYLE, TRAVERSAL and RANGE.

          CORE 2 - This extends the functionality of CORE, specified by DOM 1
                
          VIEWS - This allows programs to dynamically access and manipulate the contents of a document.

          EVENTS - Events are scripts that are executed by the browser when the user reacts to a webpage.

          STYLE - Style allows programs to dynamically access and manipulate the content of style sheet.

          TRAVERSAL - Traversal allows programs to dynamically traverse the documents.

          RANGE - This allows programs to dynamically identify a range of content in the document.
               
Level 3 - This consists of five (5) different specifications including;
          CORE 3, LOAD and SAVE, VALIDATION, EVENTS and XPATH

          CORE 3 extends the functionality of CORE as specified by DOM Level 2

          LOAD and SAVE allows the program to dynamically load the content of XML documents into 
          the DOM documents and save the DOM documents into an XML document by serialisation.

          VALIDATION allows the program to dynamically update the content and structure of the 
          document while ensuring that the document remains valid

          EVENTS extends the functionality of events as specified by DOM Level 2

          XPATH is the path language that can be used to access the DOM tree


DOCUMENT OBJECT MODEL (DOM) AS A TREE STRUCTURE
DOM is built like a tree structure in which every part of the HTML document is a node.  

An example of how DOM operates as a tree structure, see the GIF file called 'DOM Tree Structure' in
the explorer window

Demo of a typical DOM Tree structure:

<div class="parent1"> (PARENT)
    <ul class="fruits"> (CHILD 1)
        <li>apple</li> (GRAND-CHILD 1A)
        <li>orange</li> (GRAND-CHILD 1B)
        <li>tangerine</li> (GRAND-CHILD 1C)
        <li>plum</li> (GRAND-CHILD 1D)
        <li>mango</li> (GRAND-CHILD 1E)
    </ul>

    <ul class="cities"> (CHILD 2)
        <li>Lagos</li> (GRAND-CHILD 2A)
        <li>Abuja</li> (GRAND-CHILD 2B)
        <li>Atlanta</li> (GRAND-CHILD 2C)
        <li>Toronto</li> (GRAND-CHILD 2D)
        <li>Calgary</li> (GRAND-CHILD 2E)
    </ul>

    <ul class="foods"> (CHILD 3)
        <li>Edikaikong</li> (GRAND-CHILD 3A)
        <li>White soup</li> (GRAND-CHILD 3B)
        <li>Egusi soup</li> (GRAND-CHILD 3C)
        <li>Afang soup</li> (GRAND-CHILD 3D)
        <li>Bitter-leaf soup</li> (GRAND-CHILD 3E)
    </ul>
</div>

NOTE:
Parent above has three children
    - child 1
    - child 2
    - child 3

Parent has 15 grand children
    - grand children 1A, 1B, 1C, 1D, 1E
    - grand children 2A, 2B, 2C, 2D, 2E
    - grand children 3A, 3B, 3C, 3D, 3E

Child 1 is both a child of parent 1 and a parent of 5 children. These are:
    grand children 1A, 1B, 1C, 1D, 1E

Child 2 is both a child of parent 1 and a parent of 5 children. These are:
    grand children 2A, 2B, 2C, 2D, 2E

Child 3 is both a child of parent 1 and a parent of 5 children. These are:
    grand children 3A, 3B, 3C, 3D, 3E

Child 1 is a firstChild of Parent1
Child 3 is the lastChild of Parent1 

Child 1, Child 2 and Child 3 are siblings
Child 2 is the nextSibling to child1
Child 3 is the nextSibling to child2

Child 1 is a previousSibling to child 2
Child 2 is a previousSibling to child 3

GrandChild 2A is the nextElementSibling of GrandChild 1A.
GrandChild 3A is the nextElementSibling of GrandChild 2A.

GrandChild 1A is the previousElementSibling of GrandChild 2A.
GrandChild 2A is the previousElementSibling of GrandChild 3A.

Note the following in the tree structure diagram:
      1 - Elements, Attributes and Texts are represented as Nodes
      2 - This allows the programmer to dynamically change the structure and content of his web page
      3 - The document is the root
      4 - HTML formatting tags (HTML Tag, Head Tag and Body Tag) are branches
      5 - Attributes, Elements and Texts are the leaves

Note: - Anything expressed in a tag is known as an element.
      - An attribute is a characteristic of an element. E.g width, height, color, etc
      - Texts are elements expressed in string data type.


WHY DOM IS NEEDED:
     1 - For Dynamic Realtime Updates without the need to reload our web page. 
         This is needed in everything from Form Validation to when a button is clicked, etc.

     2 - User Interaction. This makes the webpage interactive, for example Form Submission, Response 
         to Form Clicks, etc.

     3 - Cross-Platform Compatibility. DOM, starting from DOM Level 1 enables scripts, regardless of 
         browser type, to interact seamlessly with web documents, ensuring browser compatibility.

     4 - Flexibility. DOM enables developers to add, modify and/or remove elements and styles in real time.


HOW DOM WORKS:
     1 - DOM connects your webpage (HTML and CSS) to JavaScript
     2 - With this connection, you access elements (h1, p, ul, span, etc)
     3 - With this connection, you can also modify content. For example, change texts in a tag realtime
     4 - With this connection, you can also react to events. For example, button click, mouse hover, etc
     5 - With this connection, you can also create an remove elements realtime

For DOM to operate effectively, it needs access to a HTML webpage along with its CSS styling sheet.
This access is given to JavaScript by the browser. Once a webpage loads, the browser generates a DOM
interface and hands-over that interface to the scripting language being used to program that webpage.
This scripting language could be; Java, JavaScript, Python, PHP, C#, etc.

There are five(5) methods that JavaScript uses to gain access into an HTML webpage. 
These methods are called ELEMENT SELECTORS. The five(5) of them are as follows:

     1 - getElementById(); - This method returns an element by its unique identifier, which is the element's Id

     2 - getElementByTagName(); - This method returns a HTML collection. We use the word, 'collection' 
         carefully because there could be several elements of the same tag. E.g h1, p, label, etc.

     3 - getElementByClassName(); - This method also returns a HTML collection. We use the word, 'collection' 
         carefully because there could be several elements of the same class name.

     4 - querySelector(); - This method returns the first element in an array or list of elements that share
         the same selector. This particular method targets CSS files whose contents are separated by selectors
         E.g * (star/asterisk for universal selector), .(dot for class), #(id), etc. 

         With querySelector() however, JavaScript returns the first element in the list.
         If there is no element with that selector, JavaScript returns a null value.

     5 - querySelectorAll(); - This method returns a node list of every item bearing that selector in CSS.
         It does not select only the first item, it selects all.

Once JavaScript is able to access both HTML and CSS webpages, it can explore or navigate through the HTML
and/or CSS content. It can also go into HTML and CSS webpages and make insertions and changes from its 
JavaScript code window. It can do so either directly or using events (mouse and/or keyboard).

Let us start by looking at the kind of navigation that JavaScript can do in HTML and CSS using DOM.

DOM NAVIGATION

DOM PROPERTIES:
     1 - It is node-based. Everything is represented as a node.
     2 - It is hierarchichal. It is structured like a parent-child relationship. It has a tree structure.
     3 - It is live. The changes on its webpages are realtime, dynamic and live.
     4 - It is platform-independent/ platform-agnostic. It works across platforms, browsers and 
         programming languages.


THE SCOPE OF DOM:
Document Object Model (DOM) is thus an interface linking HTML/CSS with the programming language being used
for the web. In this case, it is JavaScript. Without DOM, it would be difficult for JavaScript to access
HTML and make its contents dynamic. Let us paint a picture describing the relationship between HTML and CSS
(the webpage) and JavaScript.

JavaScript will not be able to communicate with a webpage if there is no highway linking the two. 
That highway is the tag placed at the bottom of each webpage. It is called the script tag. 
See Example below:

              <script src="index.js"></script>

Note from the tag above that there is a specific JavaScript page/file that the browser connects to this
webpage. Let us call this the first level of connection. It is like a highway linking two(2) cities -
HTML/CSS (city1) and JavaScript (city2)

The second level of connection is the one done by the Document Object Model (DOM). DOM is an interface
that automatically connects JavaScript to every webpage that has the script tag at its base.

Because DOM is browser agnostic and platform independent, it can work with any programming language that
is built for web applications development. Currently, JavaScript is the most dominant.

Once a webpage is loaded, the browser instantly creates a DOM model on the webpage. 
This model is constructed as a tree of objects and at the height of that tree is the Document Page, 
represented by the HTML tag. The word, "Document" in DOM refers specifically to the fact that JavaScript
has full access and authority to do what it wants on that webpage and make it a dynamic tool.

With this power, JavaScript can do many things to HTML:
     1 - It can change all HTML elements on that page
     2 - It can change all the attributes in each element
     3 - It can change all the CSS styles in that page
     4 - It can remove all the existing HTML elements and attributes
     5 - It can add new HTML elements and attributes
     6 - It can reject and/or react to all existing HTML elements in that page
     7 - It can create new HTML elements in that page

DOM is a key interface, linking HTML to JavaScript. It defines the properties of HTML and methods to be
used to access HTML elements. It also defines the events for each HTML elements. 

By Events we mean clicks and keyboard activities. 

Note that Methods refer to actions performed on HTML 

Properties refer to the values you can change or reset.

Through the script tag and DOM, a JavaScript programmer has the power and authorisation to enter into 
HTML/CSS from his JavaScript coding page and make any changes he wants.

Now that we have understood objects/webpages/documents and we have also understood elements, methods, 
events and properties, let us now see how JavaScript performs changes and/or makes additions to a webpage. 

JavaScript performs changes to documents using three(3) properties:
     1 - getElementById(id). This is the most common way used by JavaScript to access an HTML element.
     2 - getElementByClassName(class). This is used to uniquely access an HTML element using the class name.
     3 - getElementByTagName(tag). This us used uniquely to access any HTML element using the tag name.
     
We will come back to these three (3) methods later.


DOM STANDARDS:
There are three(3) DOM STANDARDS:
     1 - CORE DOM
     2 - XML DOM
     3 - HTML DOM 

HTML DOM is a standard object model and programming interface for HTML. It defines the following:
     - The HTML elements as objects
     - The properties of all HTML elements
     - The methods to access all HTML elements
     - The events of all HTML elements

The HTML DOM is therefore, a standard for how to get, change, add, and delete HTML elements.

DOM HTML METHODS
The following are the methods deployed by DOM to execute codes within JavaScript:
    1 - The createElement() DOM method - This creates an element of the type specified as its argument

    2 - The createTextNode() DOM method - This creates a text node with the string specified as its argument

    3 - The appendChild() DOM method - This adds a node to the end of the list of children of a parent node.
        If the specified child is an existing node in the document, appendChild() method moves it from its
        current position on the DOM tree to its new position.

    4 - The getElementById() DOM method - This method selects and returns the element whose ID is specified
        within it as an argument. If no such element exists, the method returns null.

    5 - The getElementByClassName() DOM method - This method selects all elements with the specified class
        name and returns them as an HTMLCollection in the order that they appear in the DOM tree. 
        The programmer then accesses individual elements in the HTMLCollection by their index number.

    6 - The getElementByTagName() DOM method - This method returns an HTML collection of all the elements
        with the tag name specified as its argument, in the order that they appear in the DOM tree.

    7 - The querySelector() DOM method - This method accepts any CSS string selector as an argument.
        It uses the specified selector to select the first within the document that matches that specified
        selector.

    8 - The querySelectorAll() DOM method - This method accepts any CSS string selector as its argument.
        It uses the specified CSS string selector to select all elements that match that specified selector.
        It then puts them in the nodeList and returns the nodeList.

    9 - The setAttribute() DOM method - This method adds a new attribute name to an element. If an attribute
        with that name is already present in the element, its value will change to that of the value set in
        the argument. This method accepts two (2) arguments:
                 1 - The name of the attribute you want to create
                 2 - The value to set on the attribute, which is always a string

    10 - The removeAttribute() DOM method - This method removes a specified attribute. It takes in the name 
         of the attribute to be removed as its argument.

    11 - The contains() DOM method - This returns true if a node is a descendant of a node.
         It returns false if it is not.

    12 - The item() DOM method - This returns the item specified at the index specified as its argument when
         used on a collection.

    13 - The hasChildNode() DOM method - This method returns true if the element that it is called on has
         child nodes within it. It retruns false otherwise.
       
FOOTNOTE:
    HTMLCollection: This is an array-like collection or list of HTML elements. Each item can be accessed
    using its index number. Index numbering in HTMLCollection starts from zero (0). To determine the number
    of element in the collection, you can use the length property.

    CSS selector: Examples of CSS selector include:
        - Element selector for tags that do not have any class or ID - p{}, h1{}, img{}, etc
        - ID selector - #p{}, #firstname{}, etc
        - Class selector - .p{}, .img{}, .h1{}, etc
        - Pseudo classes - button:hover{}, color:red{}, etc


MOST COMMON METHODS OF DOM:
     1 - getElementById(id) - selects an element by its ID
     2 - getElementByClassName(class) - selects all elements with a given class
     3 - querySelector(selector) - selects the first matching elements
     4 - createElement(tag) - creates a new HTML element
     5 - appendChild(node) - this adds a child node to an element
     6 - remove() - removes an element from a DOM. You will insert the element you want to remove inside
                    the parenthesis
     7 - addEventListener(event.fn) - this attaches an event handler to an event


Let us create a sample syntax for one of the methods used by JavaScript to access HTML elements.

"getElementById(id)"
Step 1 - Create an HTML tag
Step 2 - Give the tag a unique ID
Step 3 - At the bottom of that HTML page, create a script tag and use src attribute to link it to
         the relevant JavaScript page
Step 4 - Go to the JavaScript page, create a variable and give it a name
Step 5 - Use the document.getElementById(id) method to reference the tag/element created in HTML
Step 6 - Call the variable and display the result    */


/* 1ST ELEMENT SELECTOR - getElementById() METHOD - 1st Example */

let cohort2 = document.getElementById("ndubuisi");
cohort2.innerHTML = "My name is Turing Tech. Tell me your name";
cohort2.style.color = "green";
cohort2.style.fontSize = "60px";
cohort2.style.backgroundColor = "purple";
cohort2.style.border = "3px solid black";
cohort2.style.borderRadius = "7px";

let myCohort2 = document.getElementsByClassName("isaiah")[0];
myCohort2.innerHTML = "Can we meet in Martha's house";
myCohort2.style.color = "red";
myCohort2.style.fontSize = "48px";
myCohort2.style.backgroundColor = "green";
myCohort2.style.border = "3px solid black";
myCohort2.style.borderRadius = "7px";

let theCohort2 = document.getElementsByTagName("h1")[2];
theCohort2.innerHTML = "My name is Kate";
theCohort2.style.color = "brown";
theCohort2.style.fontSize = "60px";
theCohort2.style.backgroundColor = "gold";
theCohort2.style.border = "3px solid black";
theCohort2.style.borderRadius = "7px";

let myVar = document.getElementById("cohort");
myVar.innerHTML = "Class is over";
myVar.style.color = "yellow";
myVar.style.fontSize = "50px";
myVar.style.backgroundColor = "blue";
myVar.style.border = "3px solid black";
myVar.style.borderRadius = "7px";

let myVar1 = document.getElementsByClassName("cohort1")[0];
myVar1.innerHTML = "We have completed our assignment";
myVar1.style.color = "white";
myVar1.style.fontSize = "48px";
myVar1.style.backgroundColor = "green";
myVar1.style.border = "3px solid black";
myVar1.style.borderRadius = "7px";

let myVar2 = document.getElementsByTagName("label")[2];
myVar2.innerHTML = "This is the new label";
myVar2.style.color = "brown";
myVar2.style.fontSize = "60px";
myVar2.style.backgroundColor = "gold";
myVar2.style.border = "3px solid black";
myVar2.style.borderRadius = "7px";

let classwork = document.getElementById("classwork");
classwork.innerHTML = "Good morning Mr Chiemezie";
classwork.style.color = "black";
classwork.style.fontSize = "50px";
classwork.style.backgroundColor = "skyblue";
classwork.style.border = "3px solid black";
classwork.style.borderRadius = "7px";

let cohort2Classwork = document.getElementsByClassName("cohort2-classwork")[0];
cohort2Classwork.innerHTML = "We are still on our assignment";
cohort2Classwork.style.color = "white";
cohort2Classwork.style.fontSize = "48px";
cohort2Classwork.style.backgroundColor = "red";
cohort2Classwork.style.border = "3px solid black";
cohort2Classwork.style.borderRadius = "7px";

let theEnd = document.getElementsByTagName("h1")[3];
theEnd.innerHTML = "We have completed our assignment";
theEnd.style.color = "yellow";
theEnd.style.fontSize = "60px";
theEnd.style.backgroundColor = "purple";
theEnd.style.border = "3px solid black";
theEnd.style.borderRadius = "7px";
theEnd.style.textAlign = "center";
theEnd.style.padding = "2rem 1rem";




/* function updateText(){
    let myCohort2 = document.getElementById("isaiah");
    myCohort2.innerHTML = "Can we meet in Martha's house";
    myCohort2.style.color = "red";
    myCohort2.style.fontSize = "48px";
    myCohort2.style.backgroundColor = "green";
} */
// updateText();

/* function changeText(){
    var ourWork = document.getElementsByClassName("myTeam");
    ourWork[0].style.color = "green";
    ourWork[0].style.fontSize = "xx-large";
    ourWork[1].style.color = "red";
    ourWork[1].style.fontSize = "xx-large";  
    ourWork[0].innerHTML = "Our team won the <b><i>Best Team</i></b> award of the year, 2025";
    ourWork[1].textContent = "You do not fit into the Team Culture";
} */



const variable1 = document.getElementById("test1");
variable1.innerHTML= "Examination 1";
variable1.style.backgroundColor = "red";
variable1.style.color = "white";
variable1.style.fontSize = "45px";
 
let variable2 = document.getElementById("test2");
variable2.innerHTML= "Examination 2";
variable2.style.backgroundColor = "skyblue";
variable2.style.color = "blue";
variable2.style.fontSize = "50px";
variable2.style.padding = "0.8rem 0.7rem";
variable2.style.borderRadius = "10px";

var variable3 = document.getElementById("test3")
variable3.innerHTML= "Examination 3";
variable3.style.backgroundColor = "green";
variable3.style.color = "white";
variable3.style.fontSize = "55px";

let Nigeria = document.getElementById("country");
Nigeria.innerHTML = "Ghana has great jollof recipe";
Nigeria.style.fontSize = "60px";
Nigeria.style.backgroundColor = "grey";
Nigeria.style.color = "gold";
Nigeria.style.textTransform = "capitalize"
Nigeria.style.fontWeight = "bold";
Nigeria.style.borderRadius = "10px";
Nigeria.style.border = "2px solid black";
Nigeria.style.boxShadow = "0px 0px 3px 5px rgba(0, 0, 0, 0.2)";
Nigeria.style.padding = "0.8rem 0.8rem";
setTimeout (()=>{
    Nigeria.innerHTML= "Nigeria has the best jollof";
}, 5000)


// 2ND ELEMENT SELECTOR - getElementsByTagName() METHOD - Example 1
//const cities0 = document.getElementsByTagName("h5")[0];
// const cities1 = document.getElementsByTagName("h5")[1];
// const cities2 = document.getElementsByTagName("h5")[2];
// const cities3 = document.getElementsByTagName("h5")[3];
// const cities4 = document.getElementsByTagName("h5")[4];

// cities0.style.fontSize = "50px";
// cities1.style.fontSize = "50px";
// cities2.style.fontSize = "50px";
// cities3.style.fontSize = "50px";
// cities4.style.fontSize = "50px";

// cities0.innerHTML = "Accra is really fine";
// cities1.innerHTML = "Abuja is beautiful";
// cities2.innerHTML = "Australia is a far country";
// cities3.innerHTML = "New Zealand is even further";
// cities4.innerHTML = "Alaska is freezing";

const cities0 = document.getElementsByTagName("h5");

for (let i = 0; i < cities0.length; i++){
    cities0[i].style.backgroundColor = "pink";
    cities0[i].style.fontSize = "60px";
    cities0[i].style.border = "2px solid black";
    cities0[i].style.boxShadow = "0px 0px 3px 5px rgba(0, 0, 0, 0.2)";
    cities0[i].style.borderRadius = "10px";
    cities0[i].style.color = "blue";
    cities0[i].style.padding = "0.8rem 0.8rem";
}

var names0 = document.getElementsByTagName("span");
for (let i = 0; i < names0.length; i++){
    names0[i].style.backgroundColor = "green";
    names0[i].style.fontSize = "60px";
    names0[i].style.border = "2px solid black";
    names0[i].style.boxShadow = "0px 0px 3px 5px rgba(0, 0, 0, 0.2)";
    names0[i].style.borderRadius = "10px";
    names0[i].style.color = "yellow";
    names0[i].style.padding = "0.8rem 0.8rem";
    names0[i].style.fontWeight = "bold";
}

//3RD ELEMENT SELECTOR - getElementByClassName() METHOD - Example 1
// function changeText(){
//     var myName = document.getElementsByClassName("myName");

//     myName[0].innerHTML = "How are you doing?";
//     myName[1].innerHTML = "Have you eaten?";
//     myName[2].innerHTML = "Do you know who I am?";
//     myName[3].innerHTML = "What do you mean?";
// }
// innerHTML is used when you want to change the text


// getElementByClassName() - Example 2
function changeColor(){
    const myLabel = document.getElementsByClassName("myLabel");

    myLabel[0].style.color = "red";
    myLabel[1].style.color = "blue";
    myLabel[2].style.color = "green";
    myLabel[3].style.color = "orange";
    myLabel[4].style.color = "purple";
}
// .style is used when you want to change other properties of the object


// getElementByClassName() - Class Work 1
function changeFont(){
    let ourFont = document.getElementsByClassName("myFont");

    ourFont[0].innerHTML = "calibri";
    ourFont[1].style.fontFamily = "sans-serif"
    ourFont[2].style.fontSize = "50px";
    // ourFont[3].style.backgroundColor = "pink";
    // ourFont[3].style.color = "blue";
    // ourFont[3].style.border = "2px solid black";
    // ourFont[3].style.borderRadius = "10px";
    // ourFont[3].style.padding = "0.8rem 0.8rem";

    ourFont[3].style.cssText = "background-color: pink; font-size: 50px; border: 2px solid black";
}


// getElementsByClassName() - Class Work 2
function changeText(){
    var ourWork = document.getElementsByClassName("myTeam");
    ourWork[0].style.color = "green";
    ourWork[0].style.fontSize = "xx-large";
    ourWork[1].style.color = "red";
    ourWork[1].style.fontSize = "xx-large";  
    ourWork[0].innerHTML = "Our team won the <b><i>Best Team</i></b> award of the year, 2025";
    ourWork[1].textContent = "You do not fit into the Team Culture";
}

// getElementsByClassName() - Class Work 2
function changeFont2(){
    let ourFruits1 = document.getElementById("myFruits1");
    ourFruits1.style.fontSize = "xx-large";
    ourFruits1.style.fontFamily = "sans-serif";
    ourFruits1.style.fontStyle = "italic";
    ourFruits1.style.backgroundColor = "yellow";
    ourFruits1.innerHTML = "I do not like pawpaw";

    let ourFruits2 = document.getElementById("myFruits2");
    ourFruits2.style.fontSize = "50px";
    ourFruits2.style.fontFamily = "sans-serif";
    ourFruits2.style.fontWeight = "bold";
    ourFruits2.style.backgroundColor = "lightgreen";
    ourFruits2.textContent = "My favorite fruit is banana";
}

// getElementsByClassName() - Class Work 2
function changeTag(){
    const hireMe = document.getElementsByTagName("h6");
    hireMe[0].textContent = "I got hired";
    hireMe[1].textContent = "I got paid";
    hireMe[0].style.fontSize = "30px";
    hireMe[1].innerHTML = `<h1 style ="background-color: orange;">I am employed now</h1>`;
}


/* 4TH ELEMENT SELECTOR - querySelector() METHOD 
 
 We have dealt with three(3) elements selectors so far
    1 - document.getElementById() method 
    2 - document.getElementsByTagName() method 
    3 - document.getElementsByClassName() method 

These three(3) methods/elment selectors deal directly with HTML elements. 
They go straight into the HTML webpage and access elements based on their HTML Tags, 
ClassNames and Id. 

The next two(2) sets of DOM elements selectors that we are going to be covering 
specifically targets CSS elements using CSS selectors.

These element selectors are:
    4 - document.querySelector() method
    5 - document.querySelectorAll() method

The document.querySelector() method allows a programmer to select the first element within the web document
that matches the specified CSS selector. It returns the first occurance oof that element. If there is no
instance of what it is looking for or if no match is found, it returns "null".

The document.querySelectorAll() method goes beyond selecting the first element. Instead, it identifies
every element that matches the specified CSS selector and presents it like a NodeList or like an array.

A NodeList is a JavaScript array that gets returned as a result of a call.

To fully understand document.querySelector() method and document.querySelectorAll() method, let us 
attempt a quick review of selectors in CSS. That way, we will know the scope of identifiable features
that we are looking for in an HTML/CSS webpage.

     1 - Element Selector: Example:- p{}, h1{}, img{}, etc
     2 - Id Selector: Example:- #idName
     3 - Class Selector: Example:- .p{ , .h1{}, .img{}, etc
     4 - Universal Selector: Example:- all HTML selectors on a page

Let us try to demonstrate sample code/syntax for document.querySelector() method and 
document.querySelectorAll() method   */


// Example 1 - document.querySelector() method
const myMemo = document.querySelector(".memo");
console.log(myMemo.textContent);

let theMemo = document.querySelector(".memo");
console.log(theMemo.textContent="God Bless Turing Tech");
console.log(theMemo.innerHTML="God Bless America");
console.log(theMemo.style.color="red");
console.log(theMemo.style.fontSize="50px");
console.log(theMemo.style.backgroundColor="lime");
console.log(theMemo.style.borderRadius="10px");
console.log(theMemo.innerText="I am a student of Turing Tech");


// Example 2A - document.querySelectorAll() method
var ourMemo = document.querySelectorAll(".memo"); 
console.log(ourMemo);
console.log(ourMemo.innerHTML="You are early today");


// Example 2B - document.querySelectorAll() method using forEach Loop
ourMemo.forEach((ourStaff)=>{
    ourStaff.style.color="blue";
    ourStaff.style.backgroundColor="orange";
    ourStaff.style.borderRadius="10px";
    ourStaff.style.fontSize="40px";
    ourStaff.style.fontWeight="10px";
    ourStaff.innerText="I love Chocolate";
})


// Wednesday 12/02/2025
// Example 2C - document.querySelectorAll() method using forEach Loop
let theCourseMates1 = document.querySelectorAll(".courseMates1");
console.log(theCourseMates1);

let theCourseMates2 = document.querySelectorAll(".courseMates2");
console.log(theCourseMates2);

let theCourseMates3 = document.querySelectorAll(".courseMates3");
console.log(theCourseMates3);

theCourseMates1.forEach((stack)=>{
    stack.style.color = "purple";
    stack.style.backgroundColor = "lightblue";
})

theCourseMates2.forEach((stack2)=>{
    stack2.style.color = "red";
    stack2.style.backgroundColor = "yellow";
})

theCourseMates3.forEach((stack3)=>{
    stack3.style.color = "green";
    stack3.style.backgroundColor = "pink";
})

let theVictor = document.querySelector(".victor");
console.log(theVictor);

theVictor.style.backgroundColor = "pink";
theVictor.style.fontSize = "50px";


//Example 3 - document.querySelector() method
var yourMemo = document.querySelector(".memo");
console.log(yourMemo.textContent);

let classMemo = document.querySelector(".memo");
console.log(classMemo.textContent="God Bless Turing Tech");
console.log(classMemo.innerHTML="God Bless Africa");
console.log(classMemo.style.color="green");
console.log(classMemo.style.fontSize="60px");
console.log(classMemo.style.backgroundColor="skyblue");
console.log(classMemo.style.borderRadius="10px");
console.log(classMemo.innerText="Hello, I am new here!");


/* DOM NAVIGATION
DOM Navigation refers to the process of navigating through the structure of an HTML document using JavaScript.
Bacause DOM is organised in a tree format, it is the process of navigating the tree nodes in HTML using the
relationship between the nodes.

The HTML elements that we are talking about can be navigated through using the following six(6) Properties:
     1 - parentElement
     2 - children
     3 - nextSibling
     4 - previousSibling
     5 - firstElementChild
     6 - lastElementChild
     7 - nextElementSibling
     8 - previousElementSibling

In other words, we can access any HTML element from JavaScript using the following Methods:
     1 - document.getElementById();
     2 - document.getElementByTagName();
     3 - document.getElementByClassName();
     4 - document.querySelector();
     5 - document.querySelectorAll();

Once we have access to the HTML element, we can navigate/iterate our way through each of the elements
using the six(6) properties above. Let us use the HTML file below to demonstrate these properties   

     <ul class="courseMates1">
         <li class="victor">Victor</li>
         <li class="greg">Greg</li>
         <li class="julietviva">Julietviva</li>
         <li class="mannie">Mannie</li>
    </ul>

    "CourseMates1" is the parent Element above.
     Victor, Greg, Julietviva and Mannie are children of "CourseMates1".
     Victor is firstElementChild
     Mannie is the lastElementChild
     Victor, Greg, Julietviva and Mannie are siblings in "CourseMates1".
     Greg is nextSibling to Victor.
     Victor is the previousSibling to Greg.
     Julietviva is the nextSibling to Greg.
     Greg is the previousSibling to Julietviva.
     Mannie is the nextSibling to Julietviva.
     Julietviva is the previousSibling to Mannie.
     But 'Segun' is a nextElementSibling to Victor while 'Victor' is a previousElementSibling to 'Segun'
     In other words, Segun and Victor are not siblings but "cousins"

   
    <ul class="courseMates2">
         <li>Segun</li>
         <li>Akua</li>
         <li>Princess</li>
         <li>Patrick Owusu</li>
    </ul>

    "CourseMates2" is the parent Element above.
     Segun, Akua, Princess and Patrick Owusu are children of "CourseMates2".
     Segun is firstElementChild
     Patrick Owusu is the lastElementChild
     Segun, Akua, Princess and Patrick Owusu are siblings in "CourseMates2".
     Akua is nextSibling to Segun.
     Segun is the previousSibling to Akua.
     Princess is the nextSibling to Akua.
     Akua is the previousSibling to Princess.
     Patrick Owusu is the nextSibling to Princess.
     Princess is the previousSibling to Patrick Owusu.
     But 'Allen' is a nextElementSibling to 'Segun, while 'Segun' is a previousElementSibling to 'Allen'
     In other words, Allen and Segun are not siblings but "cousins"

    
     <ul class="courseMates3">
         <li>Allen</li>
         <li>Nnamdi</li>
         <li>Edward</li>
         <li>Ben</li>
    </ul>

    "CourseMates3" is the parent Element above.
     Allen, Nnamdi, Edward and Ben are children of "CourseMates3".
     Allen is firstElementChild
     Ben is the lastElementChild
     Allen, Nnamdi, Edward and Ben are siblings in "CourseMates3".
     Nnamdi is nextSibling to Allen.
     Allen is the previousSibling to Nnamdi.
     Edward is the nextSibling to Nnamdi.
     Nnamdi is the previousSibling to Edward.
     Ben is the nextSibling to Edward.
     Edward is the previousSibling to Ben.
     But 'Benedicta' is a nextElementSibling to 'Allen, while 'Allen' is a previousElementSibling to 'Benedicta'
     In other words, Benedicta and Allen are not siblings but "cousins"

   
     <ul class="courseMates4">
         <li>Benedicta</li>
         <li>Lily</li>
         <li>Imani</li>
         <li>Chioma UK</li>
    </ul>

    "CourseMates4" is the parent Element above.
     Benedicta, Lily, Imani and Chioma UK are children of "CourseMates4".
     Benedicta is firstElementChild
     Chioma UK is the lastElementChild
     Benedicta, Lily, Imani and Chioma UK are siblings in "CourseMates4". 
     Lily is nextSibling to Benedicta.
     Benedicta is the previousSibling to Lily.
     Imani is the nextSibling to Lily.
     Lily is the previousSibling to Imani.
     Chioma UK is the nextSibling to Imani.
     Imani is the previousSibling to Chioma UK.  */



// Example 1A - DOM NAVIGATION - soups - firstElementChild
const soup3 = document.getElementById("soup3");
const firstChild3 = soup3.firstElementChild;
firstChild3.style.fontSize = "50px";

const soup2 = document.getElementById("soup2");
const firstChild2 = soup2.firstElementChild;
firstChild2.style.fontSize = "50px";

const soup1 = document.getElementById("soup1");
const firstChild = soup1.firstElementChild;
firstChild.style.fontSize = "50px";


// Example 1B - DOM NAVIGATION - groceries - lastElementChild
const groceries3 = document.getElementById("groceries3");
const lastChild3 = groceries3.lastElementChild;
lastChild3.style.fontSize = "50px";

const groceries2 = document.getElementById("groceries2");
const lastChild2 = groceries2.lastElementChild;
lastChild2.style.fontSize = "50px";

const groceries1 = document.getElementById("groceries1");
const lastChild = groceries1.lastElementChild;
lastChild.style.fontSize = "50px";


/* NOTES ON firstElementChild AND lastElementChild PROPERTIES
  
   We noted that when we did DOM navigation using firstElementChild and did another DOM navigation using
   lastElementChild and executed both codes (one following the other), both sets of codes executed neatly.

   But when we did DOM navigation using firstElementChild and another DOM navigation using another
   firstElementChild property in tandem, the HTML content will display; but the JavaScript content will
   not work. 

   We tried the same thing for lastElementChild and lastElementChild and got the same failed result.
   The HTML content rendered well in the browser but all the contents we tried changing in JavScript 
   codes did not work.

   See the examples above for the codes that rendered accurately (both HTML and JavaScript) because we 
   used dissimilar DOM properties (firstElementChild and lastElementChild).


We tried combining lastElementChild and lastElementChild and noticed that the HTML elements rendered
properly but the JavaScript components failed. We do not want to display that here because it will cause 
the last two(2) examples (1A and 1B) to render incorrectly. 

The takeway from this (and this is important), is that we had a problem on our hands which we needed to 
address quickly; and that problem was how to make two(2) similar DOM navigation properties 
(firstElementChild and firstElementChild) and (lastElementChild and lastElementChild), working in tandem 
to execute/render successfully.

That problem was solved by one of our classmates who worked independently on it. 
She achieved this using the "if" conditional statement. She used the "if" conditional statement to add
an extra layer of safety and enable the browser/JavaScript to sort through the conflicting codes and
make an efficient decision.

Instead of assigning the variable to the firstElementChild directly (as in the example below):

           const soup3 = document.getElementById("soup3");
           const firstChild3 = soup3.firstElementChild;
           firstChild3.style.fontSize = "50px";

she let the "if"/conditional statement iterate through the code and make that decision 
(See a sample of the "if" statement below).

          const supplies3 = document.getElementById("supplies3");
          if (supplies3 && supplies3.lastElementChild) {   
          supplies3.lastElementChild.style.fontSize = "50px";
          }

Let us fully review what she did in the examples below */


// Example 2 - DOM NAVIGATION USING THE "IF" STATEMENT - supplies
const supplies3 = document.getElementById("supplies3");
if (supplies3 && supplies3.lastElementChild) {   //adds an extra layer of safety compared to directly assigning
supplies3.lastElementChild.style.fontSize = "50px";
}

const supplies2 = document.getElementById("supplies2");
if (supplies2 && supplies2.lastElementChild) {   //adds an extra layer of safety compared to directly assigning
supplies2.lastElementChild.style.fontSize = "50px";
}

const supplies1 = document.getElementById("supplies1");
if (supplies1 && supplies1.lastElementChild) {   //adds an extra layer of safety compared to directly assigning
supplies1.lastElementChild.style.fontSize = "50px";
}


// Example 3 - DOM NAVIGATION USING THE "IF" STATEMENT - courses
const courses3 = document.getElementById("courses3");
if (courses3 && courses3.firstElementChild) {   //adds an extra layer of safety compared to directly assigning
courses3.firstElementChild.style.fontSize = "50px";
}

const courses2 = document.getElementById("courses2");
if (courses2 && courses2.firstElementChild) {  //adds an extra layer of safety compared to directly assigning
courses2.firstElementChild.style.fontSize = "50px";
}

const courses1 = document.getElementById("courses1");
if (courses1 && courses1.firstElementChild) {  //adds an extra layer of safety compared to directly assigning
courses1.firstElementChild.style.fontSize = "50px";
}


// Example 4 - DOM NAVIGATION USING THE "IF" STATEMENT - items
const items3 = document.getElementById("items3");
if (items3 && items3.lastElementChild) {    //adds an extra layer of safety compared to directly assigning
items3.lastElementChild.style.fontSize = "50px";
}

const items2 = document.getElementById("items2");
if (items2 && items2.lastElementChild) {   //adds an extra layer of safety compared to directly assigning
items2.lastElementChild.style.fontSize = "50px";
}

const items1 = document.getElementById("items1");
if (items1 && items1.lastElementChild) {   //adds an extra layer of safety compared to directly assigning
items1.lastElementChild.style.fontSize = "50px";
}

/* From the four(4) examples above, let us analyse how the "if" statements used, work through the each
line of code to make efficient decisions.
  
    1 - Our objective is to resize the font size to 50px. This adjustment targets the firstElementChild
        and the lastElementChild
   
    2 - We have used the normal assignment method and it worked, but when we used similar properties in
        tandem (one following the other), they do not work

    3 - The "if" conditional statement does two(2) things:
             i)  First, it confirms that the parent element exists
             ii) Second, it ensures that the parent element has at least a firstChild and/or a lastChild

    4 - These confirmations helps prevent the errors that were encountered before, when we assigned 
        values directly, without a decision statement. In other words, it is only after the browser/
        JavaScript has verified that both conditions exist, that it executes our instructions to change
        the font size to 50px

Other reasons why we used conditional statements - to Prevent Errors:
    If an element is missing or has no children, it will affect the script execution.

Best Practice: 
   Ensures safe interactions with webpage elements and maintains proper rendering in browsers like Chrome. */




/* DOM NAVIGATION - nextSibling 
   nextSibling is different from nextElementSibling. 

   nextSibling returns the immediate next node at the same tree level. For example:

       <ul class ="dataStructure">
           <li>Array</li>
           <li>Stack</li>
           <li>List</li>
       </ul>

       <ul class = "algorithm">
           <li>Search</li>
           <li>Sort</li>
           <li>Divide and Conquer</li>
       </ul>

        <ul class = "dataType">
           <li>String</li>
           <li>Number</li>
           <li>Boolean</li>
       </ul>

   In the examples above, the nextSibling to 'Array' is 'Stack'. The previousSibling to 'Stack' is 'Array'.
   Both of them are next to each other in the same tree. They share the same parent, which is 'dataStructure'.

   The nextElementSibling to 'Array' in the example above is 'Search'. Note that they do not share the same
   tree but both 'Array' and 'Search' are the first elements in their respective trees.

   Note that the nextElementSibling to 'Array' is not 'String'. It is 'Search'.
   But the nextElementSibling to 'Search' is 'String' while the previousElementSibling to 'String' is 'Search'.
   And the previousElementSibling to 'Search' is 'Array'.
         

FEATURES OF nextSibling PROPERTY
   1 - It is a read-only property
   2 - It navigates through sibling nodes within the same tree. Examples:
         (i)   In the 'dataStructure' tree, the sibling nodes are; Array, Stack and List.
               The next sibling to 'Array' is 'Stack' and the next sibling to 'Stack' is 'List'.

         (ii)  In the 'algorithm' tree, the sibling nodes are; Search, Sort, Divide and Conquer.
               The next sibling to 'Search' is 'Sort' and the next sibling to "Sort' is 'Divide and Conquer'.

        (iii)  In the 'dataType' tree, the sibling nodes are; String, Number and Boolean.
               The next sibling to 'String' is 'Number' and the next sibling to 'Number' is 'Boolean'.   */

function patrick(){
    console.log("Test!")
    let myName = document.getElementById("name1").nextSibling.innerHTML;
                 document.getElementById("name3").style.color = "blue";
                 document.getElementById("name3").style.background = "pink";
            //   document.getElementById("name3").innerHTML = "My name is Akua";
}
            
            
function chiemezie(){
    console.log("Test!")
    let myName = document.getElementById("demo4").nextSibling.innerHTML;
                 document.getElementById("demo6").style.color = "red";
                 document.getElementById("demo6").style.background = "pink";
                 document.getElementById("demo6").style.fontSize = "50px";
                 document.getElementById("demo3").innerHTML = "Meet me in Times Square";
}
            
            
function akua(){
    let yourName = document.getElementById("challenge2").previousSibling.innerHTML;
    console.log(yourName);
                document.getElementById("challenge3").style.color = "red";
                document.getElementById("challenge3").style.background = "pink";
                document.getElementById("challenge3").style.fontSize = "50px";
                document.getElementById("challenge3").innerHTML = "Meet me in Times Square";
}
            
            
function ama(){
    console.log("Test");
    let theirName = document.getElementById("source1").nextSibling.innerHTML;
                    document.getElementById("source3").style.color = "red";
                    document.getElementById("source3").style.background = "pink";
                    document.getElementById("source3").style.fontSize = "50px";
                    document.getElementById("source3").innerHTML = "Submit your source";
}


// Parent
function Turing(){
    let parentName = document.getElementById("parent").parentElement.nodeName
                     document.getElementById("pTag").innerHTML=parentName
                     document.getElementById("parent").parentElement.parentNode.style.
                                                       color= "red";
                     document.getElementById("parent").parentElement.parentNode.style.
                                                       backgroundColor= "lightgrey";
                     document.getElementById("parent").parentElement.parentNode.style.
                                                       fontSize="20px";
                     document.getElementById("parent").parentElement.parentNode.style.
                                                       fontWeight = "bold"
}

function myTuring (){
    const grandChildName = document.getElementById("grandChild2a").nextSibling.innerHTML
                           document.getElementById("grandChild2b").innerHTML= "Let the games begin"


}

