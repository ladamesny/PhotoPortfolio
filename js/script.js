$(document).ready(function(){

  var current_li;

  $("#portfolio img").click(function(){
    //This fetches the contents of the "src" attribute of the picture
    //that was clicked
    var src = $(this).attr("src");

    // fetches the parent of the <img> tag, which is an li. This will help us get the next image
    //which sits in an <li>
    current_li = $(this).parent();

    //here we set the empty <img> referenced #main within the frame to the
    //image that was clicked.
    $("#main").attr("src", src);
    $("#frame").fadeIn();
    $("#overlay").fadeIn();
  });

  $("#overlay").click(function(){
    $(this).fadeOut();
    $("#frame").fadeOut();
  });
  

  $("#right").click(function(){

    if(current_li.is(":last-child")){
      //#portfolio li is the ul container, which we can call functions on
      var next_li = $("#portfolio li").first();
    } else{
      var next_li = current_li.next();
    }

    var next_src = next_li.children("img").attr("src");
    $("#main").attr("src", next_src);
    current_li = next_li;
  });

  $("#left").click(function (){

    if(current_li.is(":first-child")){
      var prev_li = $("#portfolio li").last();
    } else{
      var prev_li = current_li.prev();
    }

    var prev_src = prev_li.children("img").attr("src");
    $("#main").attr("src", prev_src);
    current_li=prev_li;
  });

  $("#right, #left").mouseover(function(){
    $(this).fadeTo("fast",1);
  });

    $("#right, #left").mouseleave(function(){
    $(this).fadeTo("slow",0);
  });


});