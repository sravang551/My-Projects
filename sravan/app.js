/*Bussiness Logic*/

var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
    $scope.name = "Hello world!";

    $scope.items = ['Apple','Milk','Bread'];
    $scope.addItem = function(){
        $scope.items.push($scope.value);
        $scope.value='';
    }
});
