var Game = require('./../js/memory.js').gameModule;

$(document).ready(function() {

    var game = new Game();
    game.createBoard();

    var gridHtml = "";
    for (i=0; i<16; i++){
      gridHtml = gridHtml.concat("<div class = cardBorder id ="+ i +"><img id=img"+i+ " src=./img/"+game.board[i].image+".jpg></div> ");
    }
    $("#grid").html(gridHtml);

    for(i=0; i<16; i++){
      $("#"+ i).click(function(){
        var thisId = "#img"+ i.toString();
        $(thisId).show();
      });
    }
});
