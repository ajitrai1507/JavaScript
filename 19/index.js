// let obj = {};
// // console.log(obj);

// obj.name = "Ajit",
// obj.age = 23
// // console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

let obj = {};

Object.defineProperty(obj, 'name', {
    value: "Ajit",
    writable: true,
    enumerable: true,
    configurable: true
})

// obj.name = 'Sohit'
// console.log(obj)

Object.defineProperty(obj, 'age', {
    value: 22,
    writable: false,
    enumerable: true,
    configurable: true
});

obj.age = 56;
console.log(obj)