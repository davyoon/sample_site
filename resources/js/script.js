$(function(){
  $('a[href^="#"]').on('click', function(event) {

     var target = $( $(this).attr('href') );
     console.log($(this));
     //remove active class
     $("li.active").removeClass("active");
     $(this).addClass("active");
     if( target.length ) {
         event.preventDefault();
         $('html, body').animate({
             scrollTop: target.offset().top
         }, 1000);
     }
  });

  $(".section-features").waypoint(function(direction){
    if(direction == "down"){
        $("nav").addClass("sticky");
    }else{
        $("nav").removeClass("sticky");
    }
  }, {
    offset: "70px;"
  });



});

