//Memory concepts

let a = 10;
let b = a;

b= 30;
console.log(b);
console.log(a);


//Object example

let obj1 = {
    id: 123,
    name: "Ajit"
}

let obj2 = obj1;
// console.log(obj2);

obj2.name = "Raiji";

console.log(obj2)
console.log(obj1)