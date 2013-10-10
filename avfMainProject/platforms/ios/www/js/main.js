// Matthew Ashton
// AVF 1310

$("#breakingNewsStories").on("pageinit", function(){

$(function(){
  //var url = "http://api.usatoday.com/open/articles/topnews?api_key=jvgkjm5kbvdnvsa7kzn34rna";
  
  //$.getJSON(url, breakingNews);
  $.ajax({
         url: "http://api.usatoday.com/open/articles/topnews?api_key=jvgkjm5kbvdnvsa7kzn34rna",
         type: "GET",
         dataType: "json",
         success: function(json){
         console.log(json);
            var items = $(json);
                items.find("item").each(function(){
                        var item = $(this);
                                        $("");
                                        
                                        }
         });
  
});

var breakingNews = function(bNews){

    console.log();
};

});

$("#instagram").on("pageinit", function(){
    
    $(function(){
      var url = "https://api.instagram.com/v1/tags/soccer/media/recent?callback=?&amp;client_id=46162f299ffe415fb8ba88bde15105fb";
      $.getJSON(url, instaSports);
                     
      });
    
     var instaSports = function(utdPics){
        console.log(utdPics);
     };
});