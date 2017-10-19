var inquirer = require('inquirer');
var wordBank = require('./modules/wordBank');
var WordConstructor = require('./modules/word');

var gameState = {
	wins: 0,
	losses: 0,
	round: 0,
}

function newRound(){
	gameState.round++;
	console.log("round: ", gameState.round);
	var words = wordBank();
	var currentWord = (words.splice(0, 1)).join("");
	var newWord = new WordConstructor(currentWord);
}

function gameReset(){
	for (var key in gameState) {
		if(gameState[key] > 0){
			console.log(key, ": ", gameState[key]);
			key = 0;
		}else {
			gameState[key] = 0;
		}
  }
 	console.log("see you next time!");
}

function playGame(){
	//var words = wordBank();
	if(gameState.round < 21){
		inquirer.prompt([
			{
				type: 'confirm',
				message: "would you like a new word?",
				name: "newWord",
				default: true
			}
		]).then(function(userResponse){
			// turnary
			userResponse.newWord ?
			// if true
			  newRound()
			:
			// if false
				gameReset()
		})
	} else {
		return console.log("thanks for playing!");
	}	 

}

playGame();


/*

the completed game should be able to receive user input using the inquirer or prompt npm packages.

Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:

// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
// Each constructor function should be in it's own file and be exported and required wherever needed.
// Look into function prototypes and use them for a few of your constructor's methods.



*/