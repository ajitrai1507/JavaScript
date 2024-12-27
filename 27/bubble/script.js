const grandParent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");


//Event Bubbling and Event Capturing

child.addEventListener("click", ()=>{
    console.log("Child Clicked");
},false)

parent.addEventListener("click", ()=>{
    console.log("Parent Clicked");
},false)

grandParent.addEventListener("click", ()=>{
    console.log("Grand Parent Clicked");
},false)