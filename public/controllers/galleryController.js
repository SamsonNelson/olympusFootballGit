var app = angular.module('olympusFootball');

app.controller('galleryController', function ($scope, galleryService) {

  $scope.photos = galleryService.getImages();
  console.log($scope.photos);

 $scope.test = "Please Work"
});
