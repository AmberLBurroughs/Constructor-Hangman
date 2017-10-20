var randomWords = require('random-words');

//console.log(randomWords({ exactly: 20 }));

var wordBank = function(){
	var generateWords = randomWords({ exactly: 1 });
	return generateWords;
}

module.exports = wordBank;