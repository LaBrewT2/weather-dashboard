$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        $.ajax({
              //API Call
              url: 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}' + city + "&units=imperial" + "&APPID=667a7ad2f064b0cc35a232f16bab9c8d",   
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
function show(data){
  return "<h2>Current Weather for" + data.name +", " + data.sys.country + "</h2>" +
   "<h3><strong>Weather</strong>: "+ data.daily.weather.main + "</h3>" +
  "<h3><strong>Weather</strong>: "+ data.daily.weather.description + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.daily.temp + "</h3>" +
  "<h3><strong>Pressure</strong>: "+ data.daily.pressure + "</h3>" +
  "<h3><strong>Humidity</strong>: "+ data.daily.humidity + "</h3>" +
  "<h3><strong>Min. Temperature</strong>: "+ daily.temp.min + "</h3>" +
  "<h3><strong>Max. Temperature</strong>: "+ daily.temp.max + "</h3>" +
  "<h3><strong>Wind Speed</strong>: "+ daily.wind_speed + "</h3>" +
  "<h3><strong>Wind Direction</strong>: "+ daily.wind_deg + "</h3>"  ;

}