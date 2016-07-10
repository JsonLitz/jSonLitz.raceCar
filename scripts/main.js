
$(document).on("ready", function() {

  $(document).keyup(function move(e) { //Mitch Buchannon
    var baywatch = $('.buchannon').width();
    var floatie = $('.hassle').offset().left;
    if (e.which == 49) {
      $(".hassle").animate({
        "left": "+=50",
      });
      if (baywatch <= floatie){
        $('.hassle').clearQueue();             //This function clears extra movements after winner has been determined
        alert('Mitch Wins!');
      }
    }
  });

  $(document).keyup(function move(e) { //Michael Knight
    var track = $('.knight');
    var knightSpot = $('.hassle1').offset().left;
    if (e.which == 48) {
      $(".hassle1").animate({
        "left": "+=150",
      });
      if (track <= knightSpot){
        // knightWin();                //This function will trigger the event of Michael winning
        $(".hassle1").clearQueue();             //This function will trigger the event of Mitch winning
        alert('Michael Wins!!');


      }
    }
  });







});
//TODO: Make clearQueue() function clear the moves
//TODO: buchannonWin() and knightWin() both should reveal hidden window, music
//TODO: make boilerplate function that both use- What features do I want to add for both?
//TODO: Win counter function for both? Might have to be different \.





















// //================================================================================================================================================
