//Looping a Triangle
function trigLoop() {
	var hashes = "#";
	for (var i = 0; i < 7; i++) {
		console.log(hashes);
		hashes += "#";
	}
}

//FizzBuzz
function fizzbuzz() {
	for (var i = 1; i < 101; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("FizzBuzz");
		} else if (i % 5 == 0) {
			console.log("Buzz");
		} else if (i % 3 == 0) {
			console.log("Fizz");
		} else {
			console.log(i);
		}
	}
}

//Chess Board
function chessBoard(width, height) {
	var board = "";
	for (var i = 1; i <= height; i++) {
		if (i % 2 == 0) {
			for (var j = 1; j <= width; j++) {
				if (j % 2 == 0) {
					board += "#";
				} else {
					board += " ";
				}
			}
		} else {
			for (var j = 1; j <= width; j++) {
				if (j % 2 == 0) {
					board += " ";
				} else {
					board += "#";
				}
			}
		}
		board += "\n";
	}
	return board;
}
console.log(chessBoard(8, 8));