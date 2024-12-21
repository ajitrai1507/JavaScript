//Object in JS Part 2

//Shallow copy

// let obj = {
//     a:1,
//     b:2
// }

// let obj1 = obj;
// obj1.a = 5;
// console.log(obj1 , obj);

//Deep copy

// let obj1 = structuredClone(obj);
// obj1.a =5;
// console.log(obj1 , obj);

//Nested Object

// const user = {
//     name: "Ajit Rai",
//     balance : 420,
//     address: {
//         pincode: 110043,
//         city : "New Delhi"
//     }
// }
// // console.log(user.address.pincode);

// const user2 = Object.assign({}, user);
// user2.name = "Ajit Tai";
// console.log(user2, user);


//Object Destructuring

// let obj = {
//     name: "Rohit",
//     money: 420,
//     balance: 30,
//     age: 20
// }

// const {name, balance} = obj;
// console.log(name, balance);
// const {name: fullName , money: paisa, age:umar} = obj;
// console.log(fullName, paisa);

// let user = {
//     name: "Ajit Rai",
//     age: 23,
//     arr: [90,60,65,55],
//     address: {
//         pincode: 124578,
//         city: "Najafgarh"
//     }
// }

// let {name,address: {pincode, city}} = user
// console.log(name,pincode, city)

// let {arr:[first]}= user
// console.log(first);


let user = {
    name: "Ajit",
    age: 25,
    amount: 820,
    greet : function(){
        console.log("Heyyy")
    }
}

user.greet()
