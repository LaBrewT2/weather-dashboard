 //JavaScript & JQuery

 $(document).ready(function () {
  $('#searchBtn').click(function () {
     console.log("hello")
      var city = $('.form-control').val();
      var APIkey = "b5264e43577c6a0349a29e846da1212c";
      var weatherQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APIkey;
      var forecastQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&APPID=" + APIkey;
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
    var cityName = $('#city-name');
                var weatherPic = data.weather[0].icon;
                cityName.html(data.name + "" + now);
                var currentPic = $("#current-pic");
                currentPic.attr("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png")

                var temperatureEl = $('#temperature');
                temperatureEl.html("Temperature: " + data.main.temp + " " + "Farenheit");

                var humidity = $("#humidity");
                humidity.html("Humidity: " + data.main.humidity);

                var windSpeed = $("#wind-speed");
                windSpeed.html("Windspeed: " + data.wind.speed);

                

         


                $.ajax({

                    url: forecastQueryURL,
        
                    method: "GET"
                }).then(function (forecastData) {
                    console.log(forecastData)
                })
            } else {
                $(".error").html("field empty");
            }

        })

    })



});
// Side server API / AJAX call & JQuery

   
  

      //AJAX call to the OpenWeatherMap API for current weather
      $.ajax({
        url: queryURL1,
        method: "GET"
      })
        .then(function(response) {

          //Get the current date
          var d = new Date();

          var strDate = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
          console.log(strDate);

          $("#icon").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")


          //Move city info to HTML
          $("#city-name").text(response.name + " " + "(" + strDate + ")");                   
          // Convert the temp to fahrenheit
          var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(2);

          //Move weather content to HTML
          $("#temp").text("Temperature: " + tempF + " " + "°F");
          $("#humidity").text("Humidity: " + response.main.humidity + "%"); 
          $("#wind-speed").text("Wind Speed: " + response.wind.speed + " " +"MPH");
        }); 


      //AJAX call to the OpenWeatherMap API for weather forecast 
      $.ajax({
        url: queryURL2,
        method: "GET"
      })
      //Forecast will be response2
        .then(function(response2) {
          $("section").children().remove();
          $("section").each(function(index){

          // Creating div to hold elements 
          var dateVal = $("<div>");
            $("#day"+[index+1]).append(dateVal);

          // Separating array for each day from first response
            var response2Arr= response2.list[index*9];

          // Creating and appending elements for forecast API
            var cityName = response2.city.name;

            var d = new Date(response2Arr.dt_txt);
            var responseDt = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();

            console.log(responseDt);
            console.log(cityName);
            var responseCityEl = $("<div>").addClass("cityName");
            dateVal.append(responseCityEl);
            responseCityEl.text(cityName + " " + responseDt);

            var responseCityIcon = $("<img>");
            dateVal.append(responseCityIcon);
            responseCityIcon.attr("src", "https://openweathermap.org/img/w/" + response2Arr.weather[0].icon + ".png")

            var responseTemp = ((response2Arr.main.temp - 273.15) * 1.80 + 32).toFixed(2);
            var responseTempEl =$("<div>").addClass("temp");
            dateVal.append(responseTempEl);
            console.log(responseTemp);
            responseTempEl.text("Temp: " + responseTemp + " " + "°F");;

            var responseHum = response2Arr.main.humidity; 
            var responseHumEl =$("<div>").addClass("temp");
            dateVal.append(responseHumEl);
            console.log(responseHum);
            responseHumEl.text("Humidity: " + responseHum + "%");

          });

        }); 

      });

      refresh(); 

      $(document).ready(function () {

        $('#scale').hide();
    
        $('#submitWeather').click(function () {
    
            $("#title").empty();
    
            var city = $("#city").val()
    
            if (city != '') {
    //AJAX Call
                $.ajax({
    
                    url: 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}' + city + "&units=imperial" + "&APPID=7d8a8f5d6e704abb8f8f300d6bf19e2b",
                    APIKey '667a7ad2f064b0cc35a232f16bab9c8d',
                    method: "GET",
                    dataType: "jsonp",
                })
                    .then(function (data) {
                        var widget = show(data);
    
                        var stats = display(data);
    
                        $("#show").html(widget);
    
                        $("#show-col-2").html(stats);
    
                        $("#city").val('');
    
                        $("#scale").show()
    
                        showAir(city)
                    })
    
    
            } else {
                $("#error").html('Field cannot be empty')
    
            }
    
        });
    
    });

    //Show Data
    function show(data) {
        console.log("I'm at line 49", data.sys.country);
        var h3 = $("<h3>");
        h3.text("Current Weather and Air Quality for " + data.name + ", " + data.sys.country);
        h3.addClass("text-center");
        
        $("#title").prepend(h3);
        return "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;F</h3>" +
            "<h3><strong>Pressure</strong>: " + data.main.pressure + "hPa</h3>" +
            "<h3><strong>Humidity</strong>: " + data.main.humidity + " %</h3>";
    
            
    }
    //Display weather
    function display(data)  {
        return "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;F</h3>" +
        "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;F</h3>" +
        "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "m/s</h3>" +
        "<h3><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</h3>";
    
    }