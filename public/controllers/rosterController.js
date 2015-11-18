var app = angular.module('olympusFootball');

app.controller('rosterController', function ($scope, rosterService) {

  $scope.players = rosterService.getter();
  console.log($scope.players);

 $scope.test = "Please Work"
});
