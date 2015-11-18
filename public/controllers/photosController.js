	angular.module('olympusFootball')

	.controller('photosController', function($scope, imageService) {

	      (function getImages() {
	        imageService.getImages().then(function(response) {
	          $scope.images = response.data;

	        });
						console.log($scope.images);
	      })();
			});
