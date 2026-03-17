async function getWeather(){

let city = document.getElementById("city").value

if(city === ""){
document.getElementById("weatherResult").innerHTML="Please enter city name ⚠"
return
}

let apiKey = "2bb0fc6d7d943b32722900b9d17b5c3e"
async function getWeather(){

let city = document.getElementById("city").value.trim()

if(city === ""){
document.getElementById("weatherResult").innerHTML="Please enter city name ⚠"
return
}

let apiKey = "2bb0fc6d7d943b32722900b9d17b5c3e"

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

try{

let response = await fetch(url)
let data = await response.json()

if(data.cod != 200){
document.getElementById("weatherResult").innerHTML="City not found ❌"
return
}

let weather = `
<h3>${data.name}</h3>
<p>🌡 Temperature: ${data.main.temp} °C</p>
<p>☁ Weather: ${data.weather[0].main}</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
<p>🌬 Wind: ${data.wind.speed} km/h</p>
`

document.getElementById("weatherResult").innerHTML = weather

}
catch(error){
document.getElementById("weatherResult").innerHTML="Error fetching data ⚠"
}

}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

let response = await fetch(url)

let data = await response.json()

if(data.cod == "404"){
document.getElementById("weatherResult").innerHTML="City not found ❌"
return
}

let weather = `
<h3>${data.name}</h3>
<p>🌡 Temperature: ${data.main.temp} °C</p>
<p>☁ Weather: ${data.weather[0].main}</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
<p>🌬 Wind: ${data.wind.speed} km/h</p>
`

document.getElementById("weatherResult").innerHTML = weather

document.getElementById("city").addEventListener("keypress", function(event){
if(event.key === "Enter"){
getWeather()
}
})
}