// let user = {
//     name: "Ajit",
//     age: 22,
//     gender: "male",
//     city: "Delhi"
// }

// console.log(user);

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

//For of loop

// let arr = [10,20,30,40,50,60];

// for(let val of arr){
//     console.log(val)
// }

// let str = "Ajit";
// for(let ch of str){
//     console.log(ch)
// }

// const user = {
//     name: "Chavvi",
//     age: 22,
//     gender: "Female"
// }

// for(let chavvi of user){
//     console.log(chavvi)
// }

// let arr = [10,20,3,30,40,50,60,78,89,45];


// arr.forEach( (val)=>{
//     console.log(val);
// })

// let user = {
//     name: "Ajit Rai",
//     age: 23,
//     city: "Delhi",
//     gender: "Male",
//     occupation: "Student"
// }


// user.forEach( (val)=>{
//     console.log(val);
// })

// let arr = ["Ajit", 420, "CS", "Developer"];

// arr.forEach( (val)=> console.log(val))

//Filter

// let age = [2,5,8,18,19,25,66,77,26];

// let result = age.filter( (num)=>{
//     return  num > 18;
// })

// console.log(result)

const students = [
    {name: "Rohan", age: 22, marks:70},
    {name: "Mohan", age: 23, marks:72},
    {name: "Tohan", age: 25, marks:73},
    {name: "Sohan", age: 24, marks:74},
    {name: "Nohan", age: 27, marks:75}

]

// const marks = students.filter( (obj)=>{
//     return obj.marks>72;

// })

// const result = students.filter( ({marks})=> marks> 72);
// console.log(result)

// console.log(marks)

const arr = [1,2,3,4,5];
const result = arr.map( (val)=>{
    return val*val;
})

console.log(result);
console.log(arr)