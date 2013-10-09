// Matthew Ashton
// AVF 1310

$("#breakingNewsStories").on("pageinit", function(){

$(function(){
  var url = "http://api.usatoday.com/open/articles/topnews?encoding=json;callback=jsoncallbackmethod;api_key=jvgkjm5kbvdnvsa7kzn34rna";
  
  $.getJSON(url, breakingNews);
  
});

var breakingNews = function(bNews){

    console.log();
};

});

$("#instagram").on("pageinit", function(){
    
    $(function(){
      var url = "https://api.instagram.com/v1/tags/soccer/media/recent?callback=?&amp;client_id=46162f299ffe415fb8ba88bde15105fb&amp";
      $.getJSON(url, instaSports);
                     
      });
    
     var instaSports = function(utdPics){
        console.log(utdPics);
     };
});