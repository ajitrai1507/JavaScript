//THIS keyword

// console.log(window);
// console.log(this)

// let a = 10;
// const b = 20;
// // var c = "Ajit"
// console.log(this);

// function greet(){
//     console.log("Hello coder army");
// }

// "use strict"
// function greet(){
//     console.log(this);
// }

// greet()

//Inside a method (Object context)

// let user = {
//     name: "Ajit",
//     age: 23,
//     city: "Delhi",
//     LoggedIn: true,
//     greet: function(){
//         // console.log(this);
//         console.log(this.name)
//     }
// }

// user.greet()

// let obj = {
//     name: "Ajit",
//     age: 20,
//     greet: ()=>{
//         console.log(this)
//     }
// }

// obj.greet()

// let greet = ()=>{
//     console.log(this);
// }

// greet()

let meet = function(){
    console.log(this);
}

meet();