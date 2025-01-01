
//Callback function

// function fetchUser(Callback){
//     console.log("Fetching the user detail......")
//     setTimeout( ()=>{
//         console.log("Data fetching successfully");
//         obj = {
//             name: "Ajit",
//             age: 23,
//             location: "Delhi"
//         }
//         Callback(obj);
//     },2000)
// }

// function greet(obj){
//     console.log(`Hello ${obj.name}`);
// }

// function meet(obj){
//     console.log(`Hello ${obj.location} i will meet you in delhi`)
// }

// fetchUser(greet)
// fetchUser(meet)

//Call Back Hell

//Domino's pizza order kar rahe ho

function placeOrder(Callback){
    console.log("Talking with domino's");

    setTimeout( ()=>{
        console.log("Order Placed succesfully");
        Callback()
    },2000)
}


function preparingOrder(Callback){
    console.log("Pizza prepartion started");
    setTimeout( ()=>{
        console.log("Pizza prepartion done")
        Callback();
    },5000)
}

function pickupOrder(Call){
    console.log("Reaching resturant for picking order");
    setTimeout( ()=>{
        console.log("order picked up by delivery boy")
        Call()
    },3000)
}

function deliverOrder(){
    console.log("Delivery boy on the way");
    setTimeout( ()=>{
        console.log("Order delivered succesfully");
    },3000)
}

// placeOrder(preparingOrder)
// preparingOrder();
// pickupOrder();
// deliverOrder();

placeOrder( ()=>{
    preparingOrder( ()=>{
        pickupOrder( ()=>{
            deliverOrder();
        });
    });
});

