var APPID = "6ca252ea6341ff6c528f20c3016a2652";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
var description;
var sunrise;
var sunset;
var longitude;
var latitude;


function locationSearch() {

// Current Weather Forecast

    var location = document.getElementById("cityname").value;
    var mainWeatherUrl = "http://api.openweathermap.org/data/2.5/weather" + "?q=" + location + "&appid=" + APPID;
    sendRequest(mainWeatherUrl);
}

function sendRequest(mainWeatherUrl) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.sunrise = data.sys.sunrise;
      weather.sunset = data.sys.sunset;
      weather.description = data.weather[0].description;
      weather.latitude = data.coord.lat;
      weather.longitude = data.coord.lon;
      weather.icon = data.weather[0].id;
      weather.humidity = data.main.humidity;
      weather.wind = data.wind.speed;
      weather.direction = degreesToDirection(data.wind.deg);
      weather.loc = data.name;
      weather.temp = K2C(data.main.temp);
      update(weather);
    }
  };
  xmlhttp.open("GET", mainWeatherUrl, true);
  xmlhttp.send();
}

function update(weather) {
sunrise.innerHTML = weather.sunrise;
sunset.innerHTML = weather.sunset;
latitude.innerHTML = weather.latitude;
longitude.innerHTML = weather.longitude;
wind.innerHTML = weather.wind;
description.innerHTML = weather.description;
direction.innerHTML = weather.direction;
humidity.innerHTML = weather.humidity;
loc.innerHTML = weather.loc;
temp.innerHTML = weather.temp;
icon.src = "img/codes/" + weather.icon + ".png";

};


// UNIX UTC Timestamp



// End Current Weather Forecast


// 5 Day Weather Forecast




// End 5 Day Forecast

function degreesToDirection(degrees) {
  var range = 360/8;
  var low = 360- range/2;
  var high = (low + range) % 360;
  var angles = [ "N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  for(i in angles) {
      if( degrees >= low && degrees < high )
        return angles[i];

    low = (low + range) % 360;
    high = (high + range) % 360;
  }
  return "N";
}

function K2C (k) {
  return Math.round (k - 273.15);
}

function K2F (k) {
  return Math.round(k*(9/5)-459.67);
}



window.onload = function () {
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");

}  // End Window.onload function
