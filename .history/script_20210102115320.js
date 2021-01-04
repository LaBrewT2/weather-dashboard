$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        $.ajax({

              url: "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}",   
              type:
              dataType:

        })

      }else{
        $("#error").html('Field cannot be empty')
      }

    });
});