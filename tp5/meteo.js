
window.onload = function(){
    if (request.status >= 200 && request.status < 400) {
    // Success!
    var resp = request.responseText;
  } else {
    // We reached our target server, but it returned an error

  }
    document.getElementById(“searchCity”).addEventListener(“submit”, function(
event
){
event.preventDefau
lt(); // pour annuler le rechargement de la page
        var city = document.getElementById(“city”).value;
searchCity(city);
    });
  }
function searchCity(_city){
    console.log(‘searchCity’,‘Hello from ‘+_city);
    //A compléter dans la suite du TP
      var request = new XMLHttpRequest();
request.open('GET','http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=fbbd427956f27b5eac427618d375187a', true);
}
function searchLatLng(_lat, _ lng){
    console.log(searchLatLng,‘Hello from ‘+_lat+’,’+lng);
    //A compléter dans la suite du TP
}
