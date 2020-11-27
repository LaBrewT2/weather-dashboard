 //JavaScript & JQuery
      refresh(); 

      $(document).ready(function () {

        $('#scale').hide();
    
        $('#submitWeather').click(function () {
    
            $("#title").empty();
    
            var city = $("#city").val()
    
            if (city != '') {
    //AJAX Call
                $.ajax({
    
                    url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=7d8a8f5d6e704abb8f8f300d6bf19e2b",
                    method: "GET",
                    dataType: "jsonp",
                })
                    .then(function (data) {
                        var widget = show(data);
    
                        var stats = display(data);
    
                        $("#show").html(widget);
    
                        $("#show-col-2").html(stats);
    
                        $("#city").val('');
    
                        $("#scale").show()
    
                        showAir(city)
                    })
    
    
            } else {
                $("#error").html('Field cannot be empty')
    
            }
    
        });
    
    });

    //Show Data
    function show(data) {
        console.log("I'm at line 49", data.sys.country);
        var h3 = $("<h3>");
        h3.text("Current Weather and Air Quality for " + data.name + ", " + data.sys.country);
        h3.addClass("text-center");
        
        $("#title").prepend(h3);
        return "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
            "<h3><strong>Description</strong>: " + data.weather[0].description + "</h3>" +
            "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;F</h3>" +
            "<h3><strong>Pressure</strong>: " + data.main.pressure + "hPa</h3>" +
            "<h3><strong>Humidity</strong>: " + data.main.humidity + " %</h3>";
    
            
    }
    //Display weather
    function display(data)  {
        return "<h3><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;F</h3>" +
        "<h3><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;F</h3>" +
        "<h3><strong>Wind Speed</strong>: " + data.wind.speed + "m/s</h3>" +
        "<h3><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</h3>";
    
    }