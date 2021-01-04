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

        })

      }else{
        $("#error").html('Field cannot be empty')
      }

    });
});

function show(data){
  return "<h3>"

}