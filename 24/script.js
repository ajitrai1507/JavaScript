// Mouse Event

// 1: click

const btn = document.querySelector("button");

// btn.addEventListener("click", ()=>{
//     console.log("The mouse is click")
// })

// 2: dblclick

// btn.addEventListener("dblclick", ()=>[
//     console.log("dbl click event occur")
// ])

// 3: mouseover

// btn.addEventListener("mouseover", ()=>{
//     console.log("Mouse over is occur")
// })

// 4: mousemove

// btn.addEventListener("mousemove", ()=>{
//     console.log("Mouse move operation occur")
// })

// KeyboardEvent

// 1: keypress

// document.addEventListener("keypress", ()=>{
//     console.log("The button was pressed");
// })

// 2: keydown

// document.addEventListener("keydown", ()=>{
//     console.log("Key down button was pressed");
// })

// 3: keyup

// document.addEventListener("keyup", ()=>{
//     console.log("Keyup was pressed");
// })

// document.addEventListener("keypress", (event)=>{
//     console.log(event.key);
// })

// document.addEventListener("click", (e)=>{
//     console.log(e.clientX, e.clientY)
// })

btn.addEventListener("click", (e)=>{
    // console.log(e.target);
    console.log(e.type)
})