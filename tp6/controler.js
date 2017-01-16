var meteoControllers​ = angular.module('meteoControllers'​, []);

meteoControllers​.controller('MainController', ['$scope', '$http',
 function($scope, $http) {
	 
$scope.recherche = function() {
/* appel AJAX à l’API openweathermap */
$http.get('https://demo.bilelz.fr/owmap/​?q='+$scope.city+'&appid='&appid='8da60da7fbcb4a533e49dba9b9d82d72')​
 .success(function(data) {
/* on met dans l’objet meteo les données retournées
par openweathermap */
 $scope.meteo = data;
 
 }).error(function(data) {
/* en cas d’erreur */
 $scope.errorMsg = "Hum. Error... please retry.";
 });
}

$scope.gps= function() {
	
	navigator.geolocation.getCurrentPosition(showPosition, showError);

/* appel AJAX à l’API openweathermap */
$http.get('https://demo.bilelz.fr/owmap/​?q='+$scope.city+'&appid='&appid='8da60da7fbcb4a533e49dba9b9d82d72')​
 .success(function(data) {
/* on met dans l’objet meteo les données retournées
par openweathermap */
 $scope.meteo = data;
 
 }).error(function(data) {
/* en cas d’erreur */
 $scope.errorMsg = "Hum. Error... please retry.";
 });
}
$scope.showPosition= function() {
/* appel AJAX à l’API openweathermap */
$http.get('https://demo.bilelz.fr/owmap/​?q='+$scope.city+'&appid='&appid='8da60da7fbcb4a533e49dba9b9d82d72')​
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


