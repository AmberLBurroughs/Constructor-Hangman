var inquirer = require('inquirer');
var wordBank = require('./modules/wordBank');

function gameState(){
	console.log(wordBank());
}
gameState();


/*

the completed game should be able to receive user input using the inquirer or prompt npm packages.

Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:

// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
// Each constructor function should be in it's own file and be exported and required wherever needed.
// Look into function prototypes and use them for a few of your constructor's methods.



*/