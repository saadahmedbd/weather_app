const apiKey ="5b3e42ab80e76b8c8a281688c537ae4b"; // api
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; // api url units, city

const searchBox =document.querySelector('.search-input'); // search box html generatror
const searchBtn =document.querySelector('.search-button'); // btn htm generator

const weatherIcon =document.querySelector('.weather-img'); // weather icon
async function checkWeather (city){  // asunc function
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); // response api url and apikey and cityname

    if(response.status === 404){ // if city is in valid then css show erroe and weater menu will not show
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display='none';
    }
    else{
        let data = await response.json(); // fetch data in json format
        
    
        document.querySelector('.temprature') // genearte temprature , humidity , wind speed city name
            .innerHTML=Math.round(data.main.temp) +'°C';
        document.querySelector('.city')
            .innerHTML=data.name;
        document.querySelector('.humidity-p')
            .innerHTML=data.main.humidity + '%';
        document.querySelector(".wind-p")
            .innerHTML=data.wind.speed + "km/h";
        
        if(data.weather[0].main == 'Clouds'){ // genearte weather image
            weatherIcon.src="image/vecteezy_cloud-png-with-ai-generated_26757862.png";
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src ="image/vecteezy_3d-icon-cloudy-thunderstrom-heavy-rain-weather-forecast_24683626.png";
    
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src="image/vecteezy_weather-sky-cloud-3d-render-icon_34923169.png";
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src='image/pngwing.com.png';
        }
        
        document.querySelector('.weather-menu').style.display='block'; 
        document.querySelector('.error').style.display='none';
    }
   
}
searchBtn.addEventListener('click', () =>{ // when we click the button then check weather function give me value
    checkWeather(searchBox.value);
});