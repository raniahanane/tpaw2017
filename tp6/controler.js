var meteoControllers​ = angular.module('meteoControllers'​, []);
meteoControllers​.controller('MainController', ['$scope', '$http',
 function($scope, $http) {
$scope.recherche = function() {
/* appel AJAX à l’API openweathermap */
$http.get('https://demo.bilelz.fr/owmap/​?q='+$scope.city+'&units=metric&appid=[VOTRE_API_KEY])​
 .success(function(data) {
/* on met dans l’objet meteo les données retournées
par openweathermap */
 $scope.meteo = data;
 }).error(function(data) {
/* en cas d’erreur */
 $scope.errorMsg = "Hum. Error... please retry.";
 });
}
}]);
window.onload= function(){
	document.getElementById("searchCity").addEventListener("recherche",function(event){
		event.preventDefault(); // pour annuler le rechargement de la page
		var city=document.getElementById("city").value;
		searchCity(city);
	});
}