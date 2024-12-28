const form = document.querySelector("form");

// form.addEventListener('click', (e)=>{
    
//     console.log(e.target.value);
// })

// form.addEventListener("input", (e)=>{

//     console.log(e.target.value);
// })

// form.addEventListener("change", (e)=>{
//     console.log(e.target.value);
// })


// form.addEventListener("submit", (e)=>{
//     console.log("Form submitted")
// })

// form.addEventListener("reset", (e)=>{
//     console.log("Form reset")
// })


form.addEventListener('submit', (event)=>{

    event.preventDefault();

    // const firstName = document.getElementById('username');
    // console.log(firstName.value);

    // const secondName = document.getElementById("lastname");
    // console.log(secondName.value);

    // const age = document.getElementById("age");
    // console.log(age.value);

    // const result = document.getElementById("result");

    // result.textContent = `First Name: ${firstName.value} 
    //                       Last Name: ${secondName.value}
    //                        Age: ${age.value} `


    const data = new FormData(form);

    for([key, value] of data.entries()){
        console.log(key, value)
    }
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));
    
})