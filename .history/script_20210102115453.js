$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        $.ajax({

              url: "=-94.037689&exclude=hourly,daily&appid={API key}",   
              type:
              dataType:

        })

      }else{
        $("#error").html('Field cannot be empty')
      }

    });
});