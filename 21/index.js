// const arr = [10,20,30,40,50,60,70];

// const result = arr.reduce( (acc, curr)=>{
//     acc = acc+curr;
//     return acc;
// }, 0);

// console.log(result)

let arr = ["Apple", "Banana", "Mango", "Grapes","Apple","Apple", "Grapes", "Mango", "Banana", "Mango"];

let result = arr.reduce( (acc, curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;

        return acc;
}, {})


console.log(result)