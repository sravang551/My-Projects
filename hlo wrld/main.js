var helloApp = angular.module('helloApp', []);
helloApp.controller('helloCtrl', function($scope){
	$scope.message = "hello world";
});