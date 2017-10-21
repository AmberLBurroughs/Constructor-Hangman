class GameLetter {
	constructor(letter) {
		this.character = letter !== " " ? "_" : " ";
		this.letter = letter;
		this.currentVal = this.character;
		this.isLetter = false;
	}
}

module.exports = GameLetter;