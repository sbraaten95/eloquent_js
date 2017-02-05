//The Sum of a Range
function range(start, end, step) {
	var arr = [];
	for (var i = start; ((start > end) ? i : end) >= ((start > end) ? end : i); i += (step == undefined) ? 1 : step) {
		arr.push(i);
	}
	return arr;
}

function sum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) sum += arr[i];
	return sum;
}

//Reversing an Array
function reverseArray(arr) {
	var rev = [];
	for (var i in arr) rev.push(arr[arr.length - 1 - i]);
	return rev;
}

function reverseArrayInPlace(arr) {
	for (var i = 0; i < arr.length / 2; i++) {
		var temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

//A List
function arrayToList(arr) {
	var list = {
		value: arr[0],
		rest: {}
	};
	var node = list;
	for (var i = 1; i < arr.length; i++) {
		var part = {
			value: arr[i],
			rest: null
		}
		node.rest = part;
		node = node.rest
	}
	return list;
}

function listToArray(list) {
	var arr = [list.value];
	var node = list.rest;
	while (node) {
		arr.push(node.value);
		node = node.rest;
	}
	return arr;
}

function prepend(element, list) {
	var newlist = {
		value: element,
		rest: list
	};
	list = newlist;
}

function nth(list, number) {
	while (number > 0) {
		list = list.rest;
		number--;
	}
	if (!list) return false;
	else return list.value;
}

function nthRecursive(list, number) {
	if (!number) return list.value;
	else return nthRecursive(list.rest, number - 1);
}

//Deep Comparison

function deepEqual(a, b) {
	if (typeof a == 'object' && typeof b == 'object') {
		for (var i in a) {
			var check = false;
			for (var j in b) {
				if (i == j) {
					if (a[i] == b[i]) check = true;
				}
			}
			if (!check) return false;
		}
		for (var i in b) {
			var check = false;
			for (var j in a) {
				if (i == j) {
					if (a[i] == b[i]) check = true;
				}
			}
			if (!check) return false;
		}
		return true;
	} else return a === b
}
var a = new Object()
a.bar = 'a'
var b = new Object()
b.bar = 'a'
console.log(deepEqual(a, b))