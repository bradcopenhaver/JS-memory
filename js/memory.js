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
