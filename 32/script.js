const questionBank = [
    { question: "Who has the most centuries in international cricket?",options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Joe Root"],answer: "Sachin Tendulkar" },
    { question: "Which country has won the most ICC Cricket World Cups?", options: ["India", "Australia", "West Indies", "England"], answer: "Australia" },
    { question: "Who is known as the 'God of Cricket'?", options: ["Ricky Ponting", "AB de Villiers", "Sachin Tendulkar", "Virat Kohli"],answer: "Sachin Tendulkar"},
    { question: "What is the highest individual score in ODI cricket?",options: ["264", "237", "200", "250"],answer: "264"},
    { question: "Which bowler has taken the most wickets in Test cricket?", options: ["Shane Warne", "Muttiah Muralitharan", "James Anderson", "Anil Kumble"],answer: "Muttiah Muralitharan" },
    { question: "Which team won the inaugural T20 World Cup in 2007?", options: ["India", "Australia", "South Africa", "Pakistan"], answer: "India"},
    { question: "Who holds the record for the fastest century in ODI cricket?",options: ["Chris Gayle", "AB de Villiers", "Shahid Afridi", "Virat Kohli"], answer: "AB de Villiers"},
    { question: "Which cricketer is known as 'Mr. 360'?",options: ["Chris Gayle", "MS Dhoni", "AB de Villiers", "Glenn Maxwell"],answer: "AB de Villiers"},
    { question: "Who was the first batsman to score a double century in ODI cricket?",options: ["Rohit Sharma", "Sachin Tendulkar", "Virender Sehwag", "Chris Gayle"],answer: "Sachin Tendulkar"},
    { question: "Which country hosted the first-ever Cricket World Cup?",options: ["Australia", "India", "England", "West Indies"],answer: "England"},
    { question: "Who holds the record for the most runs in a single IPL season?",options: ["David Warner", "Chris Gayle", "Virat Kohli", "KL Rahul"],answer: "Virat Kohli"},
    { question: "Which cricketer is nicknamed 'Captain Cool'?",options: ["Steve Smith", "MS Dhoni", "Ricky Ponting", "Eoin Morgan"],answer: "MS Dhoni"},
    { question: "What is the maximum number of players allowed in a cricket team squad?",options: ["11", "15", "20", "25"],answer: "15"},
    { question: "Which bowler has the record for the best bowling figures in ODI cricket?",options: ["Chaminda Vaas", "Muttiah Muralitharan", "Anil Kumble", "Glenn McGrath"],answer: "Chaminda Vaas"},
    { question: "Who is the youngest player to score a century in international cricket?",options: ["Virat Kohli", "Shahid Afridi", "Rohit Sharma", "Sachin Tendulkar"],answer: "Shahid Afridi"},
    { question: "Which cricket stadium is known as 'The Home of Cricket'?",options: ["Lord's", "MCG", "Eden Gardens", "SCG"],answer: "Lord's"},
    { question: "Which cricketer has scored the most runs in Test cricket?",options: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Alastair Cook"],answer: "Sachin Tendulkar"},
    { question: "Who is the only bowler to take 10 wickets in a Test innings twice?",options: ["Anil Kumble", "Muttiah Muralitharan", "Jim Laker", "James Anderson"],answer: "Jim Laker"},
    { question: "Which country won the ICC Cricket World Cup in 2019?",options: ["New Zealand", "India", "England", "Australia"],answer: "England"},
    { question: "Who holds the record for the fastest fifty in T20 cricket?",options: ["KL Rahul", "Chris Gayle", "Yuvraj Singh", "David Miller"],answer: "Yuvraj Singh"}
];


function randomQuestion(){

    const data = new Set();
    
    while(data.size!=5){
        const index = Math.floor(Math.random()*20);
        data.add(questionBank[index]);
    }

    return [...data];
}
const form = document.querySelector('#quizForm');

const problem = randomQuestion();

problem.forEach( (obj, index)=>{
    const div = document.createElement('div')
    div.className="question";
    const para = document.createElement('p')
    para.innerHTML = `${index+1}. ${obj.question}`;
    div.appendChild(para);


    obj.options.forEach( (data)=>{

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index+1}`
        input.value = data;
        label.appendChild(input);
        label.appendChild(document.createTextNode(data))
        div.appendChild(label);
        div.appendChild(document.createElement('br'));

    })

    form.appendChild(div)
})

const button = document.createElement('button');
button.type = "submit"
button.className = "submit-btn"
button.innerHTML = "Submit"

form.appendChild(button)