//Async task

const  Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=e02e09ebb811460b8dc153629250201&q=London&aqi=yes`)

Promises.then((responce)=>{
    
    const pro2 = responce.json();
    pro2.then((data)=>{
        console.log(data)
    })
})


// Promises.then((responce)=>{
//     console.log(responce)
// }).catch((error)=>{
//     console.log(error)
// })