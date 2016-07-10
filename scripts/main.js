
$(document).on("ready", function() {

  $(document).keyup(function move(e) { //Mitch Buchannon
    if (e.which == 49) {
      $(".hassle").animate({
        "left": "+=50",

        // $( ".hassle:last" ).text( hassle.left );
      });
    }
  });

  $(document).keyup(function move(e) { //Knight Rider
    if (e.which == 57) {
      $(".hassle1").animate({
        "left": "+=50",

        // if ("left" = 600px) {
        //   console.log('Working')
        // }
      });


    }
  });
  // var h = $('.hassle')
  // var hassle = h.position()
});

















// //================================================================================================================================================


// Problem : Current setup consists of accessability to only one image class.

//Solution: move the image instead of hiding and showing
