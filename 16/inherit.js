//Prototye in JS
let user1 = {
    name: "Ajit",
    age: 20
}

let user2 = {
    money: 50,
    amount: 30
}

user2.__proto__ = user1

// console.log(user2.amount)
console.log(user2.name);