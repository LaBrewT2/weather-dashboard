$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        $.ajax({
              //API Call
              url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=667a7ad2f064b0cc35a232f16bab9c8d",   
              type: "GET",
              dataType: "jsonp",
              success: function(data){
                console.log(data);
              
                var widget  = show(data);

                $("#show").html(widget);
                $("#city").val('');
              }

        })

      }else{
        $("#error").html('Field cannot be empty')
      }

    });
});
//API Data
function showCurrent(data){
  return"<h2>Current Weather for" + data.name +', ' + data.sys.country + "</h2>" +
   "<h3><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +
  "<h3><strong>Weather</strong>: "+ data.weather[0].description + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.main.temp + "</h3>" +
  "<h3><strong>Pressure</strong>: "+ data.main.pressure + "</h3>" +
  "<h3><strong>Humidity</strong>: "+ data.main.humidity + "</h3>" +
  "<h3><strong>Min. Temperature</strong>: "+ data.main.temp_min + "</h3>" +
  "<h3><strong>Max. Temperature</strong>: "+ data.main.temp_max + "</h3>" +
  "<h3><strong>Wind Speed</strong>: "+ data.wind.speed + "</h3>" +
  "<h3><strong>Wind Direction</strong>: "+ data.wind.direction + "</h3>"  ;

}

function showForecast(data){
  return"<h2>Daily Weather for" + data.name +', ' + data.sys.country + "</h2>" +
   "<h3><strong>Weather</strong>: "+ data.daily.weather[0].main + "</h3>" +
  "<h3><strong>Weather</strong>: "+ data.daily.weather[0].description + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.daily.main.temp + "</h3>" +
  "<h3><strong>Pressure</strong>: "+ data.daily.main.pressure + "</h3>" +
  "<h3><strong>Humidity</strong>: "+ data.daily.main.humidity + "</h3>" +
  "<h3><strong>Min. Temperature</strong>: "+ data.dailytemp_min + "</h3>" +
  "<h3><strong>Max. Temperature</strong>: "+ data.daily.main.temp_max + "</h3>" +
  "<h3><strong>Wind Speed</strong>: "+ data.daily.wind.speed + "</h3>" +
  "<h3><strong>Wind Direction</strong>: "+ data.daily.wind_deg + "</h3>"  ;

}