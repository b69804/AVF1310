// Matthew Ashton
// AVF 1310

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){


$("#breakingNewsStories").on("pageinit", function(){

  var url = "http://api.espn.com/v1/now?limit=7&apikey=x24c8a9fbdsykefrd6jrfagw";
  
  $.getJSON(url, breakingNews);
});
var breakingNews = function(bNews){

  $.each(bNews.feed, function(index, news){
         var story = "<li><h3>" + news.headline + "</h3><p>"+ news.description +"</p></li>";
         $('#news').append(story);
         })
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



};



