var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
// Add your functions and code here

function destructivelyAppendKitten() {
	kittens.push('Ralph');
	return kittens;
}

function destructivelyPrependKitten() {
	kittens.unshift('Bob');
	return kittens;
}

function destructivelyRemoveLastKitten() {
	kittens.pop();
	return kittens;
}

function destructivelyRemoveFirstKitten() {
	kittens.shift();
	return kittens;
}

function appendKitten() {
	var appKitten = kittens.concat("Broom");
	return appKitten;
}

function prependKitten() {
	var preKitten = ['Arnold'].concat(kittens);
	return preKitten;
}

function removeLastKitten() {
	var removeKitten = kittens.slice(0, 2);
	return removeKitten;
}

function removeFirstKitten() {
	var removeKitten = kittens.slice(1);
	return removeKitten;
}