//Minimum
function min(arg0, arg1) {
	return arg0 < arg1 ? arg0 : arg1;
}

//Recursion
function isEven(number) {
	if (!number) {
		return "Even";
	} else if (number == 1) {
		return "Odd";
	} else {
		return number > 0 ? isEven(number - 2) : isEven(number + 2);
	}
}

//Bean Counting
function countBs(string) {
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] == 'B') {
			count++;
		}
	}
	return count
}

//countChar
function countChar(string, char) {
	var count = 0;
	for (var i = 0; i < string.length; i++) {
		if (string[i] == char) {
			count++;
		}
	}
	return count
}