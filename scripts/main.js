
$(document).on("ready", function() {

  $(document).keyup(function move(e) { //Mitch Buchannon
    if (e.which == 49) {
      $(".hassle").animate({
        "left": "+=50",
      });
      if ($track1.width() <= $player1.offset().left + $player1.outerWidth()){
        fullStop();
        $('#buzzer1').get(0).play();  
      }
    }
  });

  $(document).keyup(function move(e) { //Michael Knight
    if (e.which == 48) {
      $(".hassle1").animate({
        "left": "+=50",
      });//try .css instead or .prop
      if ($track2.width() <= $player2.offset().left + $player2.outerWidth()){
        fullStop();
        $buzzer.get(0).play();                 //This function will trigger the event of Michael winning
      }
    }
  });
  // var track = $('.mainTrack');
  var $buzzer = $('#buzzer');


  var $track1 = $('.buchannon'); // Player 1 race track div
  var $track2 = $('.knight'); // player 2 race track div
  var $player1 = $('.hassle'); // Player 1 image
  var $player2 = $('.hassle1'); // Player 2 image

  // function knightWin(){
  //   fullStop();

  // }
  //
  // function bayWin(){
  //   fullStop();
  // }

  function fullStop(){
    $player1.clearQueue();             //This function clears extra movements after winner has been determined
    $player1.stop();
    $player2.clearQueue();
    $player2.stop();
  }

});

//TODO: buchannonWin() and knightWin() both should reveal hidden window, music
//TODO: make boilerplate function that both use- What features do I want to add for both?
//TODO: Win counter function for both? Might have to be different \.
//TODO: ask ryan about the fact that they wont stop if too many





























// //================================================================================================================================================
