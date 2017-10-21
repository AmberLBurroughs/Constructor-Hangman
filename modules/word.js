// -Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
var GameLetter = require("./letter")

var GameWord = function(word){
	this.newWord = word;
	this.letterObjects = [];
	this.displayStr = "";
	this.wordArr = this.newWord.split("");
	console.log(this.wordArr);
	this.wordLetters = this.wordArr.filter(function(letter, pos) {
		console.log(this.wordArr);
		// console.log(letter);
		// console.log(pos);
		// console.log(this.wordArr.indexOf(letter));
	    //return this.wordArr.indexOf(letter) == pos;
	});

	this.guessLetter = function(wordLetters, letterObjects){
		// check if letter is in word array
	  // loop through gameWord.letterObjects check letter value if userGuess.letterChoice
	  // userGuess.isLetter to true
	  // inform user if their guess was right or wrong
	  //console.log(userGuess.letterChoice);
	}

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
		console.log("word: ", displayStr);
	}
}

module.exports = GameWord;