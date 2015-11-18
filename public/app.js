var app = angular.module('olympusFootball',['ngRoute', 'ng-fusioncharts','ui.grid'])


.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/navigation.html',
        controller: ''
    })
    .when('/home', {
        templateUrl: 'views/roster.html',
        controller: ''
    })
    .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'photosController', 
    })
    .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'scheduleController'
    })
    .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'statsController'
    })
    .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'photosController'
    })
    .otherwise('/')
  })
