    function refresh() {  
    var cityLocal = localStorage.getItem('citySearch');
    $("h6").remove();

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
    $("#search").click(function(){
    event.preventDefault();  
    var cityName = $("#city").val();
   

    if(cityName === "") {
      return; 
    }

    var citySearchArray = localStorage.getItem('citySearch'); 

    if (citySearchArray === null) {
      citySearchArray = [];
      citySearchArray.push(cityName)
      localStorage.setItem('citySearch', JSON.stringify(citySearchArray))
    }  
    else {
      var localCity = JSON.parse(citySearchArray);
      console.log(localCity);
      const cityPresent = localCity.filter(element => element !== cityName);
      console.log(cityPresent); 
      cityPresent.push(cityName);
      console.log(cityPresent);
      localStorage.setItem('citySearch', JSON.stringify(cityPresent));
  
    }
    
    refresh();

    //API key
    var APIKey = "4c023acf398932e1b43cd03002ad8542";
  
    //URL to get current weather
    var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + cityName + "&appid=" + APIKey;
      
    //URL to get forecast
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + cityName + "&appid=" + APIKey;
  

      //AJAX call to the OpenWeatherMap API for current weather
      $.ajax({
        url: queryURL1,
        method: "GET"
      })
        .then(function(response) {

          // To get current date
          var d = new Date();

          var strDate = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
          console.log(strDate);

          $("#icon").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")


          // Transfer content to HTML
          $("#city-name").text(response.name + " " + "(" + strDate + ")");                   
          // Convert the temp to fahrenheit
          var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(2);

          // Transfer content to HTML
          $("#temp").text("Temperature: " + tempF + " " + "°F");
          $("#humidity").text("Humidity: " + response.main.humidity + "%"); 
          $("#wind-speed").text("Wind Speed: " + response.wind.speed + " " +"MPH");
        }); 


      //AJAX call to the OpenWeatherMap API for forecast weather
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
