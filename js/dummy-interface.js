var Game = require('./../js/game.js').gameModule;

$(document).ready(function() {
  $('#player-form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var newPlayer = new Player(name);
    var output = newPlayer.player_name;
    $('#output').append("<li>" + output + "</li>");
  });
});
