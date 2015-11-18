var app = angular.module('olympusFootball');

app.controller('statsController', function($scope, galleryService, scheduleService) {

  $scope.users = [];

  $scope.addUser = function(person) {
    console.log(person);
    galleryService.addUser(person).then(function() {
      $scope.getUsers();
    })
  };


  $scope.getUsers = function() {
    galleryService.getUsers().then(function(res) {
      for (var i = 0; i < res.data.length; i++) {
        var newPlayer = {
          firstName: res.data[i].firstName,
          lastName: res.data[i].lastName,
          rushingYards: res.data[i].rushingYards,
          passingYards: res.data[i].passingYards,
          receivingYards: res.data[i].receivingYards,
          allPurposeYards: res.data[i].allPurposeYards,
          touchdowns: res.data[i].touchdowns,
          tackles: res.data[i].tackles,
          sacks: res.data[i].sacks,
          interceptions: res.data[i].interceptions,
        }
        $scope.users.push(newPlayer)
      }
      console.log($scope.users);
    });


  };
  $scope.getUsers();


  FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'mscolumn2d',
      renderAt: 'dual-graph',
      width: '800',
      height: '300',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "University of Utah",
          "subCaption": "Season of 2015",
          "xAxisname": "Weeks 1 - 12",
          "yAxisName": "Points",
          "numberPrefix": "",
          "plotFillAlpha": "90",
          "theme": "fint",
        },
        "categories": [{
          "category": [{
              "label": "Michigan"
            }, {
              "label": "Utah State"
            }, {
              "label": "Fresno State"
            }, {
              "label": "Oregon"
            }, {
              "label": "California"
            }, {
              "label": "Arizona State"
            }, {
              "label": "USC"
            }, {
              "label": "Oregon State"
            }, {
              "label": "Washington"
            }, {
              "label": "Arizona"
            }, {
              "label": "UCLA"
            }, {
              "label": "Colorado"
            }

          ]
        }],
        "dataset": [{
          "seriesname": "Opponents",
          "alpha": "30",
          "data": [{
            "value": "17"
          }, {
            "value": "14"
          }, {
            "value": "24"
          }, {
            "value": "20"
          }, {
            "value": "24"
          }, {
            "value": "18"
          }, {
            "value": "43"
          }, {
            "value": ""
          }, {
            "value": ""
          }, {
            "value": ""
          }, {
            "value": ""
          }]
        }, {
          "seriesname": "Utes",
          "data": [{
            "value": "24"
          }, {
            "value": "24"
          }, {
            "value": "45"
          }, {
            "value": "62"
          }, {
            "value": "30"
          }, {
            "value": "34"
          }, {
            "value": "24"
          }, {
            "value": ""
          }, {
            "value": ""
          }, {
            "value": ""
          }]
        }]
      }
    });

    revenueChart.render();
  });




  FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'doughnut2d',
      renderAt: 'chart-container',
      width: '350',
      height: '300',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Total Yards of Offense",
          "subCaption": "2015",
          "numberPrefix": "",
          "startingAngle": "20",
          "showPercentValues": "1",
          "showPercentInTooltip": "0",
          "enableSmartLabels": "0",
          "enableMultiSlicing": "0",
          "decimals": "1",
          //Theme
          "theme": "fint"
        },
        "data": [{
          "label": "Travis Wilson",
          "value": "1183"
        }, {
          "label": "Devontae Booker",
          "value": "1016"
        }, {
          "label": "Kenneth Scott",
          "value": "274"
        }, {
          "label": "Britain Covey",
          "value": "216",
          "isSliced": "1"
        }]
      }
    }).render();

  });

  $scope.users = [{
    "firstName": $scope.users.firstName,
    "lastName": $scope.users.lastName,
    "rushingYards": $scope.users.rushingYards,
    "passingYards": $scope.users.passingYards,
    "receivingYards": $scope.users.receivingYards,
    "allPurposeYards": $scope.users.allPurposeYards,
    "touchdowns": $scope.users.touchdowns,
    "tackles": $scope.users.tackles,
    "sacks": $scope.users.sacks,
    "interceptions": $scope.users.interceptions,
  }]
  console.log($scope.users);

});
