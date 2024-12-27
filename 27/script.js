// const red = document.querySelector("#red");
// const blue = document.querySelector("#blue");
// const orange = document.querySelector("#orange");
// const green = document.querySelector("#green");
// const purple = document.querySelector("#purple");
// const body = document.querySelector("body");

// red.addEventListener("click", ()=>{
    
//     body.style.backgroundColor = "red"
// })
// blue.addEventListener("click", ()=>{
    
//     body.style.backgroundColor = "blue"
// })
// orange.addEventListener("click", ()=>{
    
//     body.style.backgroundColor = "orange"
// })
// green.addEventListener("click", ()=>{
    
//     body.style.backgroundColor = "green"
// })
// purple.addEventListener("click", ()=>{
    
//     body.style.backgroundColor = "purple"
// })


//Optimize way

// const buttons = document.querySelectorAll('button');

// const body = document.body;

// buttons.forEach( (button)=>{
    
//     button.addEventListener('click', (e)=>{

//         // console.log(button.id)
//         body.style.backgroundColor = button.id;
//     })
// })

//Second Optimize way

const root = document.querySelector("#root");
const body = document.querySelector("body");

root.addEventListener('click', (event)=>{

    if(event.target.tagName === 'H1')
        return;

    body.style.backgroundColor = event.target.id;
})