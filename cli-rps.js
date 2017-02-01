var prompt = require('prompt');

prompt.start();

prompt.get([{
	name: 'player1',
	required: true,
	message: 'P1 Choose rock, paper, or scissors',
	pattern: /^rock$|^paper$|^scissors$|^Rock$|^Paper$|^Scissors$/,
}, {
	name: 'player2',
	required: true,
	message: 'P2 Choose rock, paper, or scissors',
	pattern: /^rock$|^paper$|^scissors$|^Rock$|^Paper$|^Scissors$/,
}], function(err, result){
	console.log(round_winner(result.player1, result.player2));
});

// Determine the winner of a round of Rock, Paper, Scissors
//
// p1_weapon - string containing player 1's weapon selection
// p2_weapon - string containing player 2's weapon selection
// 
// Examples
//
// round_winner("rock","paper")
// => "Player 2 Wins!"
//
// round_winner("rock","rock")
// => ""It's a tie!"
//
// returns string with victory message
function round_winner(p1_weapon, p2_weapon) {
	p1_weapon = p1_weapon.toLowerCase();
	p2_weapon = p2_weapon.toLowerCase();
	var winner = "It's a tie!";
	switch(p1_weapon) {
		case "rock":
			if(p2_weapon == "paper") {
				winner = "Player 2 Wins!";
			}
			else if (p2_weapon == "scissors") {
				winner = "Player 1 Wins!";
			}
			break
		case "paper":
			if(p2_weapon == "scissors") {
				winner = "Player 2 Wins!";
			}
			else if (p2_weapon == "rock") {
				winner = "Player 1 Wins!";
			}
			break
		case "scissors":
			if(p2_weapon == "rock") {
				winner = "Player 2 Wins!";
			}
			else if (p2_weapon == "paper") {
				winner = "Player 1 Wins!";
			}
			break
	}
	return winner;
}

// Validate that a string is a valid option for Rock, Paper, Scissors
//
// input - the string to be validated
// 
// Examples
//
// is_valid("rock")
// => true
//
// is_valid("shotgun")
// => false
//
// returns boolean indicating whether input is valid
function is_valid(input) {
	var expression = /^rock$|^paper$|^scissors$|^Rock$|^Paper$|^Scissors$/;
	return expression.test(input);
}

function test_winner() {
	var expected_results = ["Player 1 Wins!","Player 2 Wins!","It's a tie!"];
	var actual_results = [];
	actual_results [0] = round_winner("rock", "scissors");
	actual_results [1] = round_winner("rock", "paper");
	actual_results [2] = round_winner("scissors", "scissors");
	if (expected_results.toString() === actual_results.toString()) {
		console.log("Pass");
	}
	else {
		console.log("Fail");
	}
}

function test_validity() {
	var expected_results = [true,true,false,false,false,false];
	var actual_results = [];
	actual_results[0] = is_valid("rock");
	actual_results[1] = is_valid("Rock");
	actual_results[2] = is_valid("arock");
	actual_results[3] = is_valid("rocka");
	actual_results[4] = is_valid("arocka");
	actual_results[5] = is_valid("aa");
	if (expected_results.toString() === actual_results.toString()) {
		console.log("Pass");
	}
	else {
		console.log("Fail");
	}
}



	
