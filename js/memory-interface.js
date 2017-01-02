var Game = require('./../js/memory.js').gameModule;

$(document).ready(function() {

    var game = new Game();
    game.createBoard();

    for (i=0; i<16; i++){
      $("#"+i).html("<img src=./img/"+game.board[i].image+".jpg>");
    }
});
