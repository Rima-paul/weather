const apikey = "7f412435a0b634ca5e4c8a066f3dd70b";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
      const response = await fetch(apiurl + city + `&appid=${apikey}`);

      if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity; +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed; +"km/h";
        document.querySelector(".pressure").innerHTML = data.main.pressure; +"mbar";
        document.querySelector(".real-feel").innerHTML = data.main.feels_like; +"°C";

        if (data.weather[0].main == "Clouds") {
          weatherIcon.src = "cloudy.png";
        }
        else if (data.weather[0].main == "Clear") {
          weatherIcon.src = "sun.png";
        }
        else if (data.weather[0].main == "Drizzle") {
          weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "Rain") {
          weatherIcon.src = "rainny.png";
        }
        else if (data.weather[0].main == "Mist") {
          weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main == "Snowy") {
          weatherIcon.src = "snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
      }


      
    }
    searchBtn.addEventListener("click",()=>{
      checkWeather(searchBox.value);
    })
   