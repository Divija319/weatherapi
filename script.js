const inputbox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-image');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');
const location_not_found =document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
async function checkWeather(city){
    const api_key = "13579e2e335a75f1975ef0f5356e4b70";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const response = await fetch(`${url}`);
    const weather_data = await response.json();
    if (weather_data.cod == `404`) {
        location_not_found.style.display = "flex";   // ✅ fix
        weather_body.style.display = "none";         // ✅ fix
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";       // ✅ fix
    weather_body.style.display = "flex";             // ✅ fix
    
    
    temprature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} km/hr`;
    description.innerHTML =`${weather_data.weather[0].description}`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src ="/assests/cloud.png";
            break;
            case 'Clear':
                weather_img.src ="/assests/clear.png";
                break;
                case 'Rain':
                    weather_img.src ="/assests/rain.png";
                    break;
                    case 'Snow':
            weather_img.src ="/assests/snow.png";
            break;
            case 'Mist':
            weather_img.src ="/assests/mist.png";
            break;

    }
   console.log(weather_data);
}
searchBtn.addEventListener('click',() =>{checkWeather(inputbox.value);});