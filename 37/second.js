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
    console.log("Hello i greet you")
    const data1 = await test1();
    console.log(data1)

    const data2 = await test2();
    console.log(data2)
}

greet()
console.log("Hello coder army")
console.log("Kaise ho sab aap log")