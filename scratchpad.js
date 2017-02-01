var prompt = require('prompt');


function getPlayer1() {
	prompt.start();
	prompt.get([{
		name: 'player1',
		required: true,
		message: 'P1 Choose rock, paper, or scissors',
		pattern: /^rock$|^paper$|^scissors$|^Rock$|^Paper$|^Scissors$/,
	}], function(err, result){
		console.log(round_winner(result.player1, "paper"));
		prompt.stop();
	});
}

function getPlayer2() {
	prompt.start();
	prompt.get([{
		name: 'player2',
		required: true,
		message: 'P1 Choose rock, paper, or scissors',
		pattern: /^rock$|^paper$|^scissors$|^Rock$|^Paper$|^Scissors$/,
	}], function(err, result){
		console.log(round_winner(result.player2, "paper"));
		prompt.stop();
	});
}

getPlayer1();
getPlayer2();