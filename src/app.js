function formatDate(timestamp){
let date = new Date(timestamp);
let hours=date.getHours();
if (hours<10){
    hours=`0${hours}`;
}
let minutes=date.getMinutes();
if (minutes<10){
    minutes=`0${minutes}`;
}
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day= days[date.getDay()];
return `${day} ${hours}:${minutes}` 
}



function displayTemperature(response){
    let temperatureElement=document.querySelector("temperature");
    let cityElement=document.querySelector("#city");
    let humidityNumber=document.querySelector("#humidity");
    let windNumber=document.querySelector("#wind");
    let descriptionElement=document.querySelector("#description");
    let dateElement=document.querySelector("#date");
   let iconElement=document.querySelector("#icon");

    temperature.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    humidityNumber.innerHTML=response.data.main.humidity;
    windNumber.innerHTML=Math.round(response.data.wind.speed);
    descriptionElement.innerHTML=response.data.weather[0].description;
    dateElement.innerHTML= formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
   
}



let apiKey="f42e15d174964fa9afd5793ebbeb5f46";
let cityName="New York";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;



axios.get(apiUrl).then(displayTemperature);