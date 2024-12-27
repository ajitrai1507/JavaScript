const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "If you’re going through hell, keep going. - Winston Churchill",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Courage is resistance to fear, mastery of fear—not absence of fear. - Mark Twain",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe"
];

const btn = document.querySelector("button");

btn.addEventListener('click'  , ()=>{
    
    const para = document.querySelector("#para");
    
    const index = Math.floor(Math.random()*quotes.length);
    
    para.innerHTML = quotes[index];
})


// function fiveSec(){

//     const para = document.querySelector("#para");
    
//     const index = Math.floor(Math.random()*quotes.length);
    
//     para.innerHTML = quotes[index];
// }

// setInterval( (fiveSec), 5000)
