$(document).click(function(e){
    $(".intro").fadeOut("slow",function(){
      $(".layout").fadeIn("slow");
    });
});

$(document).ready(function(){
  $(".nav_bar div").click(function(e){
    $(location).prop('href', $(this).attr('href'));
  });
});
