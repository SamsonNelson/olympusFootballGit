var app = angular.module('olympusFootball');

app.controller('scheduleController', function ($scope, scheduleService) {

  $scope.testData = [
      {
          "firstName": "Cox",
          "lastName": "Carney",
          "company": "Enormo",
          "employed": true
      },
      {
          "firstName": "Lorraine",
          "lastName": "Wise",
          "company": "Comveyer",
          "employed": false
      },
      {
          "firstName": "Nancy",
          "lastName": "Waters",
          "company": "Fuelton",
          "employed": false
      }
  ];

  $scope.games = scheduleService.gameGetter();
  console.log($scope.games);

  $scope.michigan = {
    "date" : "September 3rd 2015",
    "opponent" : "Michigan",
    "location" : "Salt Lake City",
    "result" : "W, 24-17",
    "image" : "/views/pictures/michigan-logo.jpg"
  },
  $scope.utahState = {
    "date" : "September 11th 2015",
    "opponent" : "Utah State",
    "location" : "Salt Lake City",
    "result" : "W, 24-14",
    "image" : "/views/pictures/utah-state.jpg"
  },
  $scope.fresnoState = {
    "date" : "September 18th 2015",
    "opponent" : "Fresno State",
    "location" : "Fresno, CA",
    "result" : "W, 45-24",
    "image" : "/views/pictures/fresno-state.jpg"
  },
  $scope.oregon = {
    "date" : "September 26th 2015",
    "opponent" : "Oregon",
    "location" : "Eugene, Ore",
    "result" : "W, 62-20",
    "image" : "/views/pictures/oregon-logo.jpg"
  },
  $scope.califorina = {
    "date" : "October 10th 2015",
    "opponent" : "California",
    "location" : "Salt Lake City",
    "result" : "W, 30-24",
    "image" : "/views/pictures/cal-logo.jpg"
  },
  $scope.arizonaState = {
    "date" : "October 17th 2015",
    "opponent" : "Arizona State",
    "location" : "Salt Lake City",
    "result" : "TBA",
    "image" : "/views/pictures/arizonaState-logo.jpg"
  },
  $scope.usc = {
    "date" : "October 24th 2015",
    "opponent" : "USC",
    "location" : "Los Angeles CA",
    "result" : "TBA",
    "image" : "/views/pictures/usc-logo.jpg"
  },
  $scope.oregonState = {
    "date" : "October 31st 2015",
    "opponent" : "Oregon State",
    "location" : "Salt Lake City",
    "result" : "TBA",
    "image" : "/views/pictures/oregonState-logo.jpg"
  },
  $scope.washington = {
    "date" : "November 11th 2015",
    "opponent" : "Washington",
    "location" : "Seattle, WA",
    "result" : "TBA",
    "image" : "/views/pictures/washington-logo.jpg"
  },
  $scope.arizona = {
    "date" : "November 14th 2015",
    "opponent" : "Arizona",
    "location" : "Tucson, AZ",
    "result" : "TBA",
    "image" : "/views/pictures/arizonaState-logo.jpg"
  },
  $scope.ucla = {
    "date" : "November 21th 2015",
    "opponent" : "UCLA",
    "location" : "Salt Lake City",
    "result" : "TBA",
    "image" : "/views/pictures/ucla-logo.jpg"
  },
  $scope.colorado = {
    "date" : "November 28th 2015",
    "opponent" : "Colorado",
    "location" : "Salt Lake City",
    "result" : "TBA",
    "image" : "/views/pictures/colorado-logo.jpg"
  },

 $scope.hometeam = "Utah Utes";
 $scope.utesLogo = {
    "image" : "/views/pictures/utah-symbol.jpg",
 }
});
