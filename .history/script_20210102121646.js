$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        $.ajax({

              url: 'api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=667a7ad2f064b0cc35a232f16bab9c8d",   
              type: "GET",
              dataType: "jsonp",
              success: function(data){
                console.log(data);
              }
                var widget  = show(data);

                $("#show").html(widget);
                $("#city").val('');

        })

      }else{
        $("#error").html('Field cannot be empty')
      }

    });
});

function show(data){
  return "<h3><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +
  "<h3><strong>Weather</strong>: "+ data.weather[0].description + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.main.temp + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.main.pressure + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.main.humidity + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.main.temp_min + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.main.temp_max + "</h3>" +
  "<h3><strong>Wind</strong>: "+ data.wind.speed + "</h3>" +
  "<h3><strong>Temperature</strong>: "+ data.wind.temp + "</h3>"  ;

}