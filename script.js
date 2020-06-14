$(document).ready(function () {
  function getWeather(city) {

    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial&APPID=93559962949630625ba435f586d0d287",
      type: "GET",
      datatype: "json",
      success: function (data) {
        console.log(data);
      }

    }).then(function (response) {
      $("#cityDate").empty();
      var cityDiv = $("<div class'city'>");

      var name = response.name;
      var pFour = $("<p>").text(name);
      cityDiv.append(pFour);

      var temp = response.main.temp;
      var pOne = $("<p>").text("Temperature: " + temp);
      cityDiv.append(pOne);

      var humid = response.main.humidity;
      var pTwo = $("<p>").text("Humidity: " + humid);
      cityDiv.append(pTwo);

      var wind = response.wind.speed;
      var pThree = $("<p>").text("Wind Speed: " + wind);
      cityDiv.append(pThree);

      $("#cityDate").prepend(cityDiv);
    });

    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial&APPID=93559962949630625ba435f586d0d287",
      type: "GET",
      datatype: "json",
      success: function (data) {
        console.log(data);
      }

    })
      .then(function (response) {
        $('#forecast').empty();
        for (var i = 0; i < 39; i += 8) {
          var result = response.list[i];

          console.log("Day " + (i + 0));
          console.log(result);
          console.log("Temp: " + result.main.temp);
          console.log("Humidity: " + result.main.humidity);
          console.log("Date" + result.dt_txt);


          var date = "Date:" + result.dt_txt;
          var temp = "Temperature: " + result.main.temp;
          var humidity = "Humidity: " + result.main.humidity;

          var card = create_forecast_card(date, temp, humidity);
          $('#forecast').append(card)
        }
      });
  }
  //write new function here
  var dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();

  $('#button').click(function () {

    var city = $("#cityName").val();

    console.log(city);
    getWeather(city);

    var listItem = $("<li>").text(city);
    $("#cityList").prepend(listItem);
    listItem.on("click", function () {
      getWeather(city);

    });

  });

  var create_forecast_card = (date, temp, humidity) => {
    return `<div class="col s5 m2">
        <div class="card indigo lighten-3">
         
          <div class="card-content white-text">
            <p>
            <div>${date}</div>
            <br>
            <div>${temp}</div>
            <br>
            <div>${humidity}</div>
            </p>
          </div>
        </div>
      </div>`
  }

});
