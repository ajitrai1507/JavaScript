document.body.addEventListener("click", (e)=>{

    const div = document.createElement("div");
    div.className = "circle";
    
    const x = e.clientX;
    const y = e.clientY;

    div.style.left = `${x-25}px`
    div.style.top = `${y-25}px`

    const color = ["red", "green", "blue", "yellow", "pink", "orange", "purple", "white", "cornfloweblue", "wheat"]
    const text = ["Hii", "Hello", "Ajit", "Monu", "NIkhil", "Abhishek", "Honey", "Amit", "Bobby", "Aman","Spiderman"];
    div.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    div.innerHTML = text[Math.floor(Math.random()*text.length)];
    const body = document.querySelector("body");

    body.appendChild(div);

    setTimeout( ()=>{
        div.remove()
    },5000)
})