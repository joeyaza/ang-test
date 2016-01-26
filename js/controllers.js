angular
.module("angApp")
.controller("MainController", MainController);

function MainController($scope, $http) {
    $http.get('http://jsonplaceholder.typicode.com/photos').
        success(function(data) {
            $scope.main = data;
        });
}