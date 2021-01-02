 //JavaScript & JQuery

 $(document).ready(function () {
  $('#searchBtn').click(function () {
     console.log("hello")
      var city = $('.form-control').val();
       //API key
    var APIKey = "4c023acf398932e1b43cd03002ad8542";
  
    //URL to get current weather
    var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + cityName + "&appid=" + APIKey;
    //URL to get forecast
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + cityName + "&appid=" + APIKey;
       $.ajax({

          url: weatherQueryURL,

          method: "GET"
    if (cityLocal !== null) {
      var cityLocalArray = JSON.parse(cityLocal);
      for (i = 0; i < cityLocalArray.length; i++) {
      console.log(cityLocalArray[i]);
      var searchHistory = $("<h6></h6>").text(cityLocalArray[i]).addClass("city-list");
      $("#list-group").append(searchHistory);
    }

    }
  };

    //Add click event listener
    //
    var cityName = $('#city-name');
                var weatherPic = data.weather[0].icon;
                cityName.html(data.name + "" + now);
                var currentPic = $("#current-pic");
                currentPic.attr("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png")
              //Temperature
                var temperatureEl = $('#temperature');
                temperatureEl.html("Temperature: " + data.main.temp + " " + "Farenheit");
              //Humidity
                var humidity = $("#humidity");
                humidity.html("Humidity: " + data.main.humidity);
              //Wind Speed
                var windSpeed = $("#wind-speed");
                windSpeed.html("Windspeed: " + data.wind.speed);


                $.ajax({

                    url: forecastQueryURL,
        
                    method: "GET"
                }).then(function (forecastData) {
                    console.log(forecastData)
                })
             else {
                $(".error").html("field empty");
            }

        )

    })



});
