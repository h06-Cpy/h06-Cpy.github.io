const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const API_KEY="4877f049658b2400d15d9a36bb07e314";
function Ok(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name + "\n";
      weather.innerText = `Weather: ${data.weather[0].main} / Temp(Celsius): ${data.main.temp}`;
    });
}
function Err(){
    alert("I can't find you sorry...");
}

navigator.geolocation.getCurrentPosition(Ok, Err);