$(document).on("ready", function(){






  $(document).keyup(function move(e) { //This button
    if(e.which == 57) {
        $( ".hassle" ).animate({"left": "+=50",

        });
      console.log('Working here')
    }
  });


  $(document).keyup(function move(e) { //This button
    if(e.which == 49) {
        $( ".hassle1" ).animate({"left": "+=50",

        });
      console.log('Working here')
    }
  });

  });

  https://api.jquery.com/clearQueue/
  http://api.jquery.com/width/
  https://api.jquery.com/jquery.when/
  http://api.jquery.com/offset/















});

// //================================================================================================================================================


// Problem : Current setup consists of accessability to only one image class.

//Solution: move the image instead of hiding and showing
