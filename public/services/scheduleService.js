
var app = angular.module ('olympusFootball');

app.service ('scheduleService', function(){
var games =
    [
      {
        "date" : "September 3rd 2015",
        // "opponent" : "Michigan",
        "location" : "Salt Lake City",
        "result" : "W, 24-17",
      },
      {
        "date" : "September 11th 2015",
        "opponent" : "Utah State",
        "location" : "Salt Lake City",
        "result" : "W, 24-14",
      },
      {
        "date" : "September 18th 2015",
        "opponent" : "Fresno State",
        "location" : "Fresno, CA",
        "result" : "W, 45-24",
      },
      {
        "date" : "September 26th 2015",
        "opponent" : "Oregon",
        "location" : "Eugene, Ore",
        "result" : "W, 62-20",
      },
      {
        "date" : "October 10th 2015",
        "opponent" : "California",
        "location" : "Salt Lake City",
        "result" : "W, 30-24",
      },
      {
        "date" : "October 17th 2015",
        "opponent" : "Arizona State",
        "location" : "Salt Lake City",
        "result" : "TBA",
      },
      {
        "date" : "October 24th 2015",
        "opponent" : "USC",
        "location" : "Los Angeles CA",
        "result" : "TBA",
      },
      {
        "date" : "October 31st 2015",
        "opponent" : "Oregon State",
        "location" : "Salt Lake City",
        "result" : "TBA",
      },
      {
        "date" : "November 11th 2015",
        "opponent" : "Washington",
        "location" : "Seattle, WA",
        "result" : "TBA",
      },
      {
        "date" : "November 14th 2015",
        "opponent" : "Arizona",
        "location" : "Tucson, AZ",
        "result" : "TBA",
      },
      {
        "date" : "November 21th 2015",
        "opponent" : "UCLA",
        "location" : "Salt Lake City",
        "result" : "TBA",
      },
      {
        "date" : "November 28th 2015",
        "opponent" : "Colorado",
        "location" : "Salt Lake City",
        "result" : "TBA",
      },


]
        this.gameGetter = function(){
            return games
          };
});
