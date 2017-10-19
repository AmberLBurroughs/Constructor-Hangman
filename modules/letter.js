// -Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var GameLetter = function(letter){
	this.character = letter !== " " ? "_" : " ";
	this.letter = letter;
	this.currentVal = this.character + " ";
	this.isLetter = false;

/* 
	 - character: _ for the letter if its a letter if its a space show empty str  " ";√
   - currentVal: if isLetter is false currentVal should be character if isLetter true currentVal should be letter
*/

}

module.exports = GameLetter;