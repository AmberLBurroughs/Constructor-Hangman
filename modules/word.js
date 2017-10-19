// -Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
var letterConstructor = require("./letter")

var WordConstructor = function(word){
	console.log(word);
	this.guessCount = 10;
	this.newWord = word;
	console.log("word: ", this.newWord);
	this.wordArr = this.newWord.split("");
	console.log("word array: ", this.wordArr);
	this.createLetterObj = function(wordArr){
		wordArr.forEach(function(letter){
			console.log("word letter: ", letter);
			var newLetter = new letterConstructor(letter);
			console.log(newLetter);
		})
	}
	this.createLetterObj(this.wordArr);
}

module.exports = WordConstructor;