// -Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
var GameLetter = require("./letter")

var GameWord = function(word){
	this.guessCount = 10;
	this.newWord = word;
	this.letterObjects = [];
	this.displayStr = "";
	//console.log("word: ", this.newWord);

	this.wordArr = this.newWord.split("");
	console.log("word array: ", this.wordArr);

	this.createLetterObj = function(wordArr, letterObjects){
		wordArr.forEach(function(letter){
			//console.log("word letter: ", letter);
			var newLetter = new GameLetter(letter);
			letterObjects.push(newLetter);
		})
		//console.log("letterObjects: ", letterObjects);	
	}

	this.createLetterObj(this.wordArr, this.letterObjects);

	this.displayCharacters = function(letterObjects, displayStr){
		letterObjects.forEach(function(letterObject){
			//console.log("letterObject underScore: ", letterObject.currentVal);
			displayStr += letterObject.currentVal;
		})
		console.log(displayStr);
	}
}

module.exports = GameWord;