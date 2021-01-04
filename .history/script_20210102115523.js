$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        $.ajax({

              url: "api.openweathermap.org/data/2.5/weather?q=" + {city name}&appid={API key}",   
              type:
              dataType:

        })

      }else{
        $("#error").html('Field cannot be empty')
      }

    });
});