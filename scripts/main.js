
$(document).on("ready", function() {
  $(document).keyup(function move(e) { //Mitch Buchannon
    if (e.which == 49) {
      $(".hassle").css("left",("+=40"));
      if ($track1.width() <= $player1.offset().left + $player1.outerWidth()){
        fullStop();
        hassle.wins += 1;
        console.log(hassle.wins);
        $('#buzzer1').get(0).play();
      }
    }

  });
  $(document).keyup(function move(e) { //Michael Knight
    if (e.which == 48) {
      $(".hassle1").css("left",("+=55"));
      if ($track2.width() <= $player2.offset().left + $player2.outerWidth()){
        fullStop();
        hassle1.wins +=1;
        // $('.p1').append("<p>" + hassle1.wins + "</p>" ); Scoreboard logic, refactor later
        $('#buzzer').get(0).play();
      }
    }
  });

  var hassle = new Count("+=1");
  var hassle1 = new Count("+=1");

  var $track1 = $('.buchannon'); // Player 1 race track div
  var $track2 = $('.knight'); // player 2 race track div
  var $player1 = $('.hassle'); // Player 1 image
  var $player2 = $('.hassle1'); // Player 2 image



  function fullStop(){
    $player1.clearQueue();       //This function clears any built up keystrokes
    $player1.stop();             //This function stops extra movements after winner has been determined
    $player2.clearQueue();
    $player2.stop();
    $(document).off('keyup');
  }

function Count(counter){
  this.wins = 0;

}

});

//TODO: buchannonWin() and knightWin() both should reveal hidden window, music
//TODO: make boilerplate function that both use- What features do I want to add for both?
//TODO: Win counter function for both? Might have to be different
//TODO: Finish Scoreboard logic
//TODO: fix parallax bug 


































// //================================================================================================================================================
