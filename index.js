var inquirer = require('inquirer');
var alphabet = require('alphabet');
var wordBank = require('./modules/wordBank');
var GameWord = require('./modules/word');

var gameState = {
	wins: 0,
	losses: 0,
	"guesses left": 10,
	round: 0,
	lettersGuessed: []
}

function newRound(){
	gameState.round++;
	console.log("\n");
	console.log("-----------------------");
	if(gameState.wins > 0){
		console.log("Wins: ", gameState.wins);
	}
	if(gameState.loses > 0){
		console.log("Losses: ", gameState.losses);
	}
	console.log("Round: ", gameState.round);
	console.log("-----------------------");
	console.log("\n");
	var words = wordBank();
	var currentWord = words.join("");
	//(words.splice(0, 1)).join("");
	var newWord = new GameWord(currentWord);
	console.log("\n");
	
	guessLetter(newWord);
}


function gameReset(){
	//hard code 
	for (var key in gameState) {
		if(gameState[key] > 0 && key != "guesses left"){
			console.log("\n");
			console.log(key, ": ", gameState[key]);
			gameState[key] = 0;
		}else {
			if(key === "guesses left"){
				gameState[key] = 10;
			}else if(gameState[key].length > 0){
				gameState[key] = "";
			}else{
				gameState[key] = 0;
			}
		}
  }

  console.log("\n");
  console.log(
				'(|(|'
			)
	console.log(
		    //'(‘.‘)'
			 '( -.-)'
			)
	console.log(
				'O_(")(")'
			)
 	console.log("see you next time!");
 	console.log("\n");
}

function guessLetter(newWord){
	console.log("###########################");
	console.log("\nguesses: ", gameState["guesses left"]);
	console.log("\n");
	newWord.displayCharacters(newWord.letterObjects, newWord.displayStr);
	console.log("\n###########################");
	console.log("\n");
	(gameState["guesses left"] > 0) ? 
		inquirer.prompt([
			{
				type: 'list',
				message: "select a letter: ",
				name: "letterChoice",
				choices: alphabet.lower
			} //use input and validate
		]).then(function(userGuess){
			if(!gameState.lettersGuessed.includes(userGuess.letterChoice) && gameState["guesses left"] > 0){
				gameState.lettersGuessed.push(userGuess.letterChoice);
				console.log("letters Guessed: ", gameState.lettersGuessed);
				gameState["guesses left"]--;

				// send to 
					newWord.guessLetter(userGuess.letterChoice);

				  guessLetter(newWord);
			 // 
			}else if(gameState.lettersGuessed.includes(userGuess.letterChoice) && gameState["guesses left"] > 0){
				console.log("letters Guessed: ", gameState.lettersGuessed);
				console.log("\nguess a letter you haven't already selected");
				guessLetter(newWord);
			}
		})
	:
	// game over 
		playAgain()
	// // play again
		// 
}

function playAgain(){
		console.log("you are out of guesses >_< game over!")
		gameState.lettersGuessed = [];
		gameState["guesses left"] = 10;
		gameState.losses++;
		playGame();
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
			(userResponse.newWord) ?
			// if true
			  newRound()
			:
			// if false
				gameReset()
		})
	} else {
	  console.log("thanks for playing!");
		console.log("╮(╯▽╰)╭");
		gameReset();
	}	 

}

playGame();
