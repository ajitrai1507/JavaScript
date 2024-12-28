// const originalAns = ["Sachin Tendulkar", "West Indies", "Sachin Tendulkar", "264", "Muttiah Murlitharam"]
const originalAns = {
    q1:"Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Murlitharam"
}
const form = document.querySelector('form');

const output = document.querySelector("#out");

form.addEventListener('submit', (event)=>{

    event.preventDefault();

    const data = new FormData(form);

    // const answer = Array.from(data.values());

    // let result = 0;

    // for(let i=0; i<answer.length; i++){
    //     if(answer[i]=== originalAns[i])
    //         result++;

    // }

    let result = 0;

    for(let [key, value] of data.entries()){

        if(value === originalAns[key])
            result++;

    }

    output.innerHTML = `Your Score is Out of 5 is ${result}`;

    // document.getElementById('container').append(output);
})