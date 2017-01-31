// var prompt = require('prompt');

// prompt.start();

// prompt.get([{
//     name: 'player1',
//     type: 'string',
//     required: true,
//     pattern: /scissors|rock|paper/,
//     message: 'You must choose Rock, Paper, or Scissors.'
// }, {
//     name: 'player2',
//     type: 'string',
//     required: true,
//     pattern: /scissors|rock|paper/,
//     message: 'You must choose Rock, Paper, or Scissors.'
// }], function(err, result){
//     console.log('Player choices:');
//     console.log('Player 1 Choice: ' + result.player1);
//     console.log('Player 2 Choice: ' + result.player2);
//     test(result.player1, result.player2)
// });

// test = prompt.get(['Player1', 'Player2'], function (err, result) {
// 	console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
//  	console.log(result.Player1);
// });

function choose_winner(p1_weapon, p2_weapon) {
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
	return winner
}

console.log(choose_winner("rock","paper"));


	
