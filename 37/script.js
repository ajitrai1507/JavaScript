function  test1(){

    const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello everyone");
        },5000)
    })
    return p1;
}

function test2(){

    const p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello ajit");
        },5000)
    })
    return p2;
}
async function greet() {
    const data1 = await test1();
    console.log(data1)

    const data2 = await test2();
    console.log(data2)
}

greet()

// p1.then((responce)=> console.log(responce))
// p2.then((responce)=> console.log(responce))
// console.log(p1);
// p1.then((response)=>console.log(response));

// async function meet(){

//     return "Hello coder";
// }

// meet().then((responce)=> console.log(responce))