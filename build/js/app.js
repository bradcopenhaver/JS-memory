(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game() {
  this.turns = 0;
  this.matches = 0;
  this.board = [];
}

function Card(image, position) {
  this.image = image;
  this.position = position;
}

Game.prototype.createBoard = function() {
  var cards = [];
  for (i=0; i<8; i++){
    cards.push(i);
    cards.push(i);
  }

  for(i=0; i<16; i++){
    var ind = Math.floor(Math.random() * (cards.length));
    var img = cards[ind];
    var newCard = new Card(img, i);
    this.board.push(newCard);
    cards.splice(ind, 1);
  }
};

exports.gameModule = Game;

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);
