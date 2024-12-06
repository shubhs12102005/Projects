const inputBox = document.getElementById('header-input');
const searchBtn = document.getElementById('weatherBtn');
const weather_img = document.querySelector('.weather-image');
const tempreture = document.querySelector('.tempreture');
const description = document.querySelector('.description');
const humidity = document.querySelector('.Humidity');
const wind = document.querySelector('.Wind');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "5786bde1f856bf36cb2613656e59e3a3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);
    if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    } else{
        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
    }

    tempreture.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind.innerHTML = `${weather_data.wind.speed}Km/Hr`;

  

    switch(weather_data.weather[0].main){
        case 'Clouds':
        weather_img.src = "cloud.png";
        break;
        case 'Clear':
        weather_img.src = "clear.png";
        break;
        case 'Rain':
        weather_img.src = "rain.png";
        break;
        case 'Mist':
        weather_img.src = "mist.png";
        break;
        case 'Snow':
        weather_img.src = "snow.png";
        break;
    }
}

searchBtn.addEventListener('click', ()=>{
     checkWeather(inputBox.value);
})