$(document).ready(function(){

    $('#search').click(function(){

      var city = $("#city").val();

      if(city != ''){

        
      }else{
        $("#error").html('Field cannot be empty')
      }

    });
});