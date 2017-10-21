var GameLetter = function(letter){
	this.character = letter !== " " ? "_" : " ";
	this.letter = letter;
	this.currentVal = " " + this.character;
	this.isLetter = false;

/* 
	 - character: _ for the letter if its a letter if its a space show empty str  " ";√
   - currentVal: if isLetter is false currentVal should be character if isLetter true currentVal should be letter
*/

}

module.exports = GameLetter;