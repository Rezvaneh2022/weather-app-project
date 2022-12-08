function displayTemperature(response){
    let temperatureElement=document.querySelector("temperature");
    let cityElement=document.querySelector("#city");
    let humidityNumber=document.querySelector("#humidity");
    let windNumber=document.querySelector("#wind");
    let descriptionElement=document.querySelector("#description");
    temperature.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    humidityNumber.innerHTML=response.data.main.humidity;
    windNumber.innerHTML=Math.round(response.data.wind.speed);
    descriptionElement.innerHTML=response.data.weather[0].description;
    console.log(response);
}



let apiKey="f42e15d174964fa9afd5793ebbeb5f46";
let cityName="New York";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;



axios.get(apiUrl).then(displayTemperature);