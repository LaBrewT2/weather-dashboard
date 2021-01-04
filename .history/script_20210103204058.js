$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        $.ajax({
              //API Call
              url: 'api.openweathermap.org/data/2.5/group?id={id,..,id}&appid=&APPID=667a7ad2f064b0cc35a232f16bab9c8d' + city + "&units=imperial" ,   
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
   "<h3><strong>Weather</strong>: "+ data.daily.weather[0].main + "</h3>" +
  "<h3><strong>Weather</strong>: "+ data.daily.weather[0].description + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.daily.temp + "</h3>" +
  "<h3><strong>Pressure</strong>: "+ data.daily.pressure + "</h3>" +
  "<h3><strong>Humidity</strong>: "+ data.daily.humidity + "</h3>" +
  "<h3><strong>Min. Temperature</strong>: "+ data.daily.temp.min + "</h3>" +
  "<h3><strong>Max. Temperature</strong>: "+ data.daily.temp.max + "</h3>" +
  "<h3><strong>Wind Speed</strong>: "+ data.daily.wind_speed + "</h3>" +
  "<h3><strong>Wind Direction</strong>: "+ data.daily.wind_deg + "</h3>"  ;

}