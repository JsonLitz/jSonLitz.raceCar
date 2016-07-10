
$(document).on("ready", function() {

  $(document).keyup(function move(e) { //Mitch Buchannon
    if (e.which == 49) {
      $(".hassle").animate({
        "left": "+=50",
      });
      if ($('.buchannon').width() <= $('.hassle').offset().left){
        // buchannonWin();             //This function will trigger the event of Mitch winning

        alert('Mitch Wins!');          //
      }
    }
  });


  $(document).keyup(function move(e) { //Michael Knight
    if (e.which == 48) {
      $(".hassle1").animate({
        "left": "+=60",
      });
      if ($('.knight').width() <= $('.hassle1').offset().left){
        // knightWin();                //This function will trigger the event of Michael winning
                                       //think about adding to scoreboard and revealing a hidden window and also music
                                       //TODO: make boilerplate function that both- What features do I want to add for both?
        alert('Michael Wins!!');
      }
    }
  });




});

//think about adding to scoreboard and revealing a hidden window and also music
//TODO: make boilerplate function that both use- What features do I want to add for both?
//TODO: Win counter function for both? Might have to be different \.




// Problem : Current setup consists of accessability to only one image class.

//Solution: move the image instead of hiding and showing


















// //================================================================================================================================================
