var app = angular.module ('olympusFootball');

app.service ('galleryService', function($http){

  this.addUser = function(user){
    console.log(user)
    return $http({
      method: 'POST',
      url: 'http://localhost:9000/api/newperson',
      data: user
    })
  };

  this.getUsers = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:9000/api/getpeople',
    })
  }


var photos =
      [
        {
          "image" : "/views/galleryPhotos/booker.jpg"
        },
        {
          "image" : "/views/galleryPhotos/team.jpg"
        },
        {
          "image" : "/views/galleryPhotos/travisWilson.jpg"
        },
        {
          "image" : "/views/galleryPhotos/uofu.jpg"
        },
        {
          "image" : "/views/galleryPhotos/UtesRunOut.jpg"
        },
        {
          "image" : "/views/galleryPhotos/whittingham.jpg"
        },
        {
          "image" : "/views/galleryPhotos/travisWilson1.jpg"
        },
        {
          "image" : "/views/galleryPhotos/talkingus.jpg"
        },
        {
          "image" : "/views/galleryPhotos/utahstae.jpg"
        },
        {
          "image" : "/views/galleryPhotos/utahvsaggie.jpg"
        },
        {
          "image" : "/views/galleryPhotos/fresnoisnotastate.jpg"
        },
        {
          "image" : "/views/galleryPhotos/thompson.jpg"
        },
        {
          "image" : "/views/galleryPhotos/coachwittfs.jpg"
        },
        {
          "image" : "/views/galleryPhotos/coveryfs.jpg"
        },
        {
          "image" : "/views/galleryPhotos/fanaika.jpg"
        },
        {
          "image" : "/views/galleryPhotos/mussfs.jpg"
        },
        {
          "image" : "/views/galleryPhotos/tackleoregon.jpg"
        },
        {
          "image" : "/views/galleryPhotos/travisoregon.jpg"
        },
        {
          "image" : "/views/galleryPhotos/utahvsorgeon.jpg"
        },
        {
          "image" : "/views/galleryPhotos/utahfootball.png"
        },


      ]
      this.getImages = function(){
          return photos
        };
});
