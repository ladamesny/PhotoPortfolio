$(document).ready(function(){

  $("#tags li").click(function(){
  
    var category = $(this).html();
    
    $("#tags li").removeClass("active");
    
    $(this).addClass("active");
    
    $("#portfolio li").hide();
    
    $("#portfolio li").each(function(){
      if ($(this).hasClass(category)){
        $(this).fadeIn();
      }
    });
  });
});