
var app = angular.module ('olympusFootball');

app.service ('rosterService', function(){

var players =
    [
      {
        "number" : 1,
        "firstName" : "Bobbie",
        "lastName" : "Hobbs",
        "position" : "DB",
        "homeTown" : "New Orleans, LA",
        "class" : "Sophomore",
        "image" : "/views/pictures/boobie-hobbs.jpg"
      },
      {
        "number" : 2,
        "firstName" : "Kenneth",
        "lastName" : "Scott",
        "position" : "WR",
        "homeTown" : "Fontana, CA",
        "class" : "Senior",
        "image" : "/views/pictures/kenneth-scott.jpg"
      },
      {
        "number" : 3,
        "firstName" : "Jason",
        "lastName" : "Thompson",
        "position" : "DB",
        "homeTown" : "Renton, WA",
        "class" : "Junior",
        "image" : "/views/pictures/jason-thompson.jpg"
      },
      {
        "number" : 4,
        "firstName" : "Austin",
        "lastName" : "Lee",
        "position" : "DB",
        "homeTown" : "Draper, UT",
        "class" : "Freshman",
        "image" : "/views/pictures/austin-lee.jpg"
      },
      {
        "number" : 5,
        "firstName" : "Tavaris",
        "lastName" : "Williams",
        "position" : "DB",
        "homeTown" : "Fort White, FL",
        "class" : "Sophomore",
        "image" : "/views/pictures/tavaris-williams.jpg"
      },
      {
        "number" : 6,
        "firstName" : "Kyle",
        "lastName" : "Fulks",
        "position" : "WR",
        "homeTown" : "Katy, TX",
        "class" : "Sophomore",
        "image" : "/views/pictures/kyle-fulks.jpg"
      },
      {
        "number" : 7,
        "firstName" : "Travis",
        "lastName" : "Wilson",
        "position" : "QB",
        "homeTown" : "San Clemente, CA",
        "class" : "Senior",
        "image" : "/views/pictures/travis-wilson.jpg"
      },
      {
        "number" : 8,
        "firstName" : "Bubba",
        "lastName" : "Poole",
        "position" : "RB",
        "homeTown" : "Las Vegas, NV",
        "class" : "Senior",
        "image" : "/views/pictures/bubba-poole.jpg"
      },
      {
        "number" : 9,
        "firstName" : "Tim",
        "lastName" : "Patrick",
        "position" : "WR",
        "homeTown" : "San Diego, CA",
        "class" : "Senior",
        "image" : "/views/pictures/tim-patrick.jpg"
      },
      {
        "number" : 10,
        "firstName" : "Delshawn",
        "lastName" : "McClellon",
        "position" : "WR",
        "homeTown" : "North Long Beach, CA",
        "class" : "Junior",
        "image" : "/views/pictures/delshawn-mcclellon.jpg"
      },
      {
        "number" : 11,
        "firstName" : "Kylie",
        "lastName" : "Fitts",
        "position" : "DE",
        "homeTown" : "San Bernadino, CA",
        "class" : "Junior",
        "image" : "/views/pictures/kylie-fitts.jpg"
      },
      {
        "number" : 12,
        "firstName" : "Justin",
        "lastName" : "Thomas",
        "position" : "DB",
        "homeTown" : "Orange, TX",
        "class" : "Junior",
        "image" : "/views/pictures/justin-thomas.jpg"
      },
      {
        "number" : 13,
        "firstName" : "Gionni",
        "lastName" : "Paul",
        "position" : "LB",
        "homeTown" : "Winter Haven, FL",
        "class" : "Senior",
        "image" : "/views/pictures/gionni-paul.jpg"
      },
      {
        "number" : 14,
        "firstName" : "Brian",
        "lastName" : "Allen",
        "position" : "DB",
        "homeTown" : "La Marque, TX",
        "class" : "Junior",
        "image" : "/views/pictures/brian-allen.jpg"
      },
      {
        "number" : 15,
        "firstName" : "Dominique",
        "lastName" : "Hatfield",
        "position" : "DB",
        "homeTown" : "Los Angeles, CA",
        "class" : "Junior",
        "image" : "/views/pictures/dominique-hatfield.jpg"
      },
]
        this.getter = function(){
            return players
          };
});
