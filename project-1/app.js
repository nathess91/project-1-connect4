$(document).ready(function(){
  var turnCounter = 0;

  $("#board").find("td").on("click", function(){
    // Player 1's turn
    if (turnCounter % 2 === 0){
      $(this).text("X");
      checkWinner("X");
    } else {
      //player 2's turn
      $(this).text("O");
      checkWinner("O");
    }

    turnCounter++;
  });

  function winAndReset(player) {
    alert("Game over! "+player+" wins!");
    $("#newGame").removeClass("invisible");
  }

  function checkWinner(player){

    // Check if top row match
     if ($("#board").find("#1").text() !== ""){
       if ($("#board").find("#1").text() == $("#board").find("#2").text()) {
         if ($("#board").find("#1").text() == $("#3").text()) {
           winAndReset(player);
         }
      }
    // Check if left column match
     if ($("#board").find("#1").text() == $("#board").find("#4").text()) {
      if ($("#board").find("#1").text() == $("#7").text()) {
        winAndReset(player);
      }
    }
    // Check if left diagonal match
    if ($("#board").find("#1").text() == $("#board").find("#5").text()) {
      if ($("#board").find("#1").text() == $("#9").text()) {
        winAndReset(player);
      }
    }
  }
   // Check if middle column match
   if ($("#board").find("#2").text() !== ""){
     if ($("#board").find("#2").text() == $("#board").find("#5").text()) {
       if ($("#board").find("#2").text() == $("#8").text()) {
         winAndReset(player);
       }
     }
   }

   // Check if right column match
   if ($("#board").find("#3").text() !== ""){
     if ($("#board").find("#3").text() == $("#board").find("#6").text()) {
       if ($("#board").find("#3").text() == $("#9").text()) {
         winAndReset(player);
       }
     }
    // Check if right diagonal match
    if ($("#board").find("#3").text() == $("#board").find("#5").text()) {
      if ($("#board").find("#3").text() == $("#7").text()) {
        winAndReset(player);
      }
    }
  }

    // Check if middle row match
    if ($("#board").find("#4").text() !== ""){
      if ($("#board").find("#4").text() == $("#board").find("#5").text()) {
        if ($("#board").find("#4").text() == $("#6").text()) {
           winAndReset(player);
        }
      }
    }

    // Check if bottom row match
    if ($("#board").find("#7").text() !== ""){
      if ($("#board").find("#7").text() == $("#board").find("#8").text()) {
        if ($("#board").find("#7").text() == $("#9").text()) {
          winAndReset(player);
        }
      }
    }

  } // End checkWinner function

  // Start new game
  $("#newGame").on("click",function(){
        $(".box").text("");
  });

});
