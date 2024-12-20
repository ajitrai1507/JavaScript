//Creating Element in DOM
// const ul = document.querySelector("#root");
// const ts = document.createElement('li');

// ts.innerHTML = "TypeScript";

// ul.appendChild(ts);

// function attach(content){

//     const element = document.createElement('li');
//     element.innerHTML = content;

//     const root = document.querySelector("#root");
//     root.appendChild(element);
// }

// attach("TS");
// attach("React");

//Creating TextNode

// const textnode = document.createTextNode("Hello Coder Army");

// const parent = document.querySelector("#root");

// parent.appendChild(textnode)

//Creating Attribute Node

// const element = document.createAttribute("id");
// element.value = "first";

// const li = document.querySelector('li');
// li.setAttributeNode(element)

//Accessing Attribute

// const element = document.querySelector("#root");
// element.getAttribute("id");
// console.log(element)

// element.setAttribute("custom", "20");
// element.setAttribute("id", "roots");
// element.removeAttribute("custom")


//************************************ Add Nodes to the DOM *********************************//

const element = document.querySelector("#root");
const newElement = document.createElement("li");
newElement.innerHTML = "Coffee";

// element.appendChild(newElement)
element.prepend(newElement)