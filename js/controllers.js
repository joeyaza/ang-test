angular
.module("angApp")
.controller("MainController", MainController);

MainController.$inject = ['$scope','$http', 'Pagination']

function MainController($scope, $http, Pagination) {
  $http.get('http://jsonplaceholder.typicode.com/photos').
      success(function(data) {
          $scope.main = data;
      });
  $scope.pagination = Pagination.getNew(100);
  $scope.pagination.numPages = Math.ceil(5000/$scope.pagination.perPage);
}