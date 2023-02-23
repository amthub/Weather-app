const btn = document.querySelector(".glass")
const contenterror = document.querySelector(".content-error")
const input = document.querySelector(".input")
const windspeed = document.querySelector('.wind-speed')
const humid = document.querySelector(".humid")
const temp = document.querySelector(".temp")
const weatherimage = document.querySelector('.weather-image');
const description = document.querySelector(".description");
const content =document.querySelector(".content")

btn.addEventListener('click', () => {
    const APIkey = '54946febe04545df1df3d24a94b39ff4';
    const city = input.value
    if(input.value == '')
      return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
    .then(response => response.json())
    .then(json => {
        if(json.cod === '404'){
            contenterror.style.display = 'block'
            content.style.display = 'none'
            return
        }
        contenterror.style.display = "none"
        content.style.display = "block"
        humid.innerText = json.main.humidity + " %"
        console.log(json.main.humidity);
        console.log(json.weather[0].main)
    switch(json.weather[0].main){
        case 'Clear':
            weatherimage.src = "clear.png"
            break;
                
        case 'Rain':
            weatherimage.src = 'rain.png'
            break;

        case 'Snow':
            weatherimage.src = 'snow.png'
            break;

        case 'Clouds' :
            weatherimage.src="cloud.png"
            break;

        case 'Haze':
            weatherimage.src = 'mist.png'
            break;
        case 'Mist':
            weatherimage.src = 'mist.png'
            break;

        default :
            weatherimage.src = ""
    }
    description.innerText = json.weather[0].description
    temp.innerText = parseInt(json.main.temp) - 272 + " °C"
    windspeed.innerText = parseInt(json.wind.speed) + " Km/h"
    console.log(json.weather[0].description)
    console.log(parseInt(json.wind.speed))
    console.log(weatherimage.src)
    // contenterror.style.display = "block"
    })
})