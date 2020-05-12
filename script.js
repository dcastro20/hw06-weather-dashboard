$(document).ready(function(){

  $('#button').click(function(){

    var city = $("#cityName").val();

console.log(city);


$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&APPID=93559962949630625ba435f586d0d287",
  type: "GET",
  datatype: "jsonp",
  success: function(data){
    console.log(data);
  }
  
    }).then(function(response){

var cityDiv = $("<div class'city'>");

var name = response.name;
var pFour = $("<p>").text(name);
cityDiv.append(pFour);

var temp = response.main.temp;
var pOne = $("<p>").text("Temperature: " + temp);
cityDiv.append(pOne);

var humid = response.main.humidity;
var pTwo= $("<p>").text("Humidity: " + humid);
cityDiv.append(pTwo);

var wind = response.wind.speed;
var pThree = $("<p>").text("Wind Speed: " + wind);
cityDiv.append(pThree);

$("#cityDate").prepend(cityDiv);

//var uvIndex = response.

    })

  });

});
