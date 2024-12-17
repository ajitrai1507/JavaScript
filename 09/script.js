function timing(){

    const timer = document.querySelector('#root');
    const now = new Date();
    const current = now.toLocaleTimeString();
    timer.innerHTML = current;
    
    timer.style.fontSize = "100px";
}

setInterval(timing,1000)

// timing();