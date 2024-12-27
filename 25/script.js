const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    //Read the data
    const first_input = document.querySelector("#first");
    const first_num = Number(first_input.value);

    const second_input = document.querySelector("#second")
    const second_num = Number(second_input.value)

    const result = Number(first_num+ second_num);

    if(isNaN(first_num) || isNaN(second_num))
        return;
    //Output the result

    const output = document.querySelector("#result");
    
    output.innerHTML = "Result: "+result;
})