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

