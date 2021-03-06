// Matthew Ashton
// AVF 1310

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
    


$("#myLocale").on("pageinit", function(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
                  function onSuccess(position) {
                  var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude +"&sensor=true";
    
                  $.getJSON(url, myAddressCheck);
                  
                  }
                  function onError(error) {
                  alert('code: '    + error.code    + '\n' +
                        'message: ' + error.message + '\n');
                  }
});
    
var myAddressCheck = function(addy){
            
    $.each(addy.results, function(index, answer){
                   
        var address = "<li><h3>" + answer.formatted_address + "</h3></li>";
        $('#myAddress').append(address);
           });
};

$("#breakingNewsStories").on("pageinit", function(){

  var url = "http://api.espn.com/v1/now?limit=7&apikey=58uzg4x2jqdmkfkes6m6wk2t";
  
  $.getJSON(url, breakingNews);

});

var breakingNews = function(bNews){

  $.each(bNews.feed, function(index, news){
         
         var story = "<li><h3>" + news.headline + "</h3><p>"+ news.description +"</p></li>";
         $('#news').append(story);
         });
    };

    
$("#instagram").on("pageinit", function(){
    
      var url = "https://api.instagram.com/v1/tags/"+ device.platform +"/media/recent?callback=?&amp;client_id=46162f299ffe415fb8ba88bde15105fb";
      $.getJSON(url, instaSports);
                   
});

var instaSports = function(utdPics){
    $.each(utdPics.data, function(index, photo){
           var pics = "<li class='photoLayout'><img src='" + photo.images.standard_resolution.url + "'height='320' width='320'></li>";
           $("#unitedPhotos").append(pics);
           });
};

$("#network").on("pageinit", function(){
    var networkStatus = navigator.connection.type;
                 var status = {};
                 status[Connection.WIFI] = "<img src='img/wifi.png' class='photo'>";
                 status[Connection.Cell]= "<img src='img/cell-tower.png' class='photo'>";
                 $("#networkPhoto").append(status[networkStatus]);
           
});


$("#capturePhoto").on("click", function(){
                var pictureSource = navigator.camera.PictureSourceType;
                destinationType = navigator.camera.DestinationType;
                                      
                var onPhotoDataSuccess = function() {};
                var onFail = function(message) {
                             alert('Failed because: ' + message);
                      };
                navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true, saveToPhotoAlbum:true, destinationType: destinationType.DATA_URL });
});
    
    var alertDismissed = function(){};

$("#compass").on("click", function(){
    
    var fireAway = function(heading){
        navigator.notification.alert('Heading: ' + heading.magneticHeading + ' with a Heading Accuracy of: ' + heading.headingAccuracy + ' degrees', alertDismissed, 'Compass Heading', 'See Ya!');
    };
    var onError = function(compassError){
        alert("Fail.");
                 };
        
    navigator.compass.getCurrentHeading(fireAway, onError);
});

   


}



