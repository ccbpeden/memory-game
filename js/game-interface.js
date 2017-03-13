var Game = require('./../js/game.js').gameModule;

$(document).ready(function() {
  $('#player-form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var newGame = new Game(name);
    var output = newPlayer.player_name;
    $('#output').append("<li>" + output + "</li>");
  $('.game_class').click(function(){
    var cardId = $(this).val();
    newGame.revealcard(cardId);
    $('.game_class').click(function(){
      var cardId2 = $(this).val();
      newGame.revealcard(cardId2);
      result = newGame.flip(cardId, cardId2);
      newGame.cardState(result);
      newGame.checkWin();
    });
  });
});
