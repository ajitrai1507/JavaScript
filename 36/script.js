const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', ()=>{
    const place = document.getElementById('location').value
    
    const  weatherData = fetch(`http://api.weatherapi.com/v1/current.json?key=e02e09ebb811460b8dc153629250201&q=${place}&aqi=yes`);
    function showData(data){
        const city = document.getElementById('weatherInfo');
        const icon = document.getElementById('weatherIcon')
        
        
        city.innerHTML = `Today Temp ${data.current.temp_c}`
        icon.innerHTML = data.current.condition.text;
        
    }



    weatherData
    .then(responce =>responce.json())
    .then(data=> showData(data))
    .catch(error=> console.error("Error fetching weather data:", error));
})

