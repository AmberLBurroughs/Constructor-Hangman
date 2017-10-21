var GameLetter = require("./letter")

class GameWord {

	// for all new words 
	constructor(word){
		this.newWord = word;
		//console.log(this.newWord);
		this.displayStr = "";
		this.wordArr = this.newWord.split("");
		
		this.wordLetters = word.split("").filter(function(letter, pos) {
		    return word.split("").indexOf(letter) == pos;
		});

		this.letterObjects = [];
		this.createLetterObjs();
	}

	// send current word through letter constructor
	createLetterObjs(){
		var letterObjects = this.letterObjects;
	 	this.wordArr.forEach(function(letter){
	 		var newLetter = new GameLetter(letter);
	 		letterObjects.push(newLetter);
	 	})	
	}

 // show dashes
	displayCharacters(){

		var displayStr = "";	
		this.letterObjects.forEach(function(letterObject){
			displayStr += letterObject.currentVal + ' ';
		})
		console.log("word: ", displayStr);

	}

	// validate letter guessed
	guessedLetter(currentLetter, callbackA, callbackB, gameState){
		var wordLetters = this.wordLetters;
		
		// check if letter guessed is in the current word
		if(wordLetters.includes(currentLetter)) {
			console.log("correct!");
			this.letterObjects.forEach(function(letterObject){
				if(!letterObject.isLetter && letterObject.letter === currentLetter){
					letterObject.isLetter = true;
					letterObject.currentVal = currentLetter;
				}
			})

			// get index of letter in current word
		  var index = wordLetters.indexOf(currentLetter);
		  wordLetters.splice(index, 1);
		  if(wordLetters.length != 0){
		  	callbackA();
		  } else if (wordLetters.length === 0){
		  	gameState.wins++;
		  	console.log("\n---------------------------------");
		  	console.log("\n", this.newWord, "was the word. You win!");
		  	console.log("\n---------------------------------")
		  	console.log("\n");
		  	callbackB();
		  } else {
		  	gameState.losses++;
		  	console.log("\n---------------------------------");
		  	console.log("\n ╮(╯▽╰)╭");
		  	console.log("\n", this.newWord, "was the word. You lose");
		  	console.log("\n---------------------------------")
		  	console.log("\n");
		  	callbackB();
		  }

		} else {
			console.log(" the word does not include:", currentLetter);
			callbackA();
		}

	}

}

module.exports = GameWord;