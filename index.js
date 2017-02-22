const app = "I don't do much."

var kittens =["Milo", "Otis", "Garfield"]
var newKitten = "Ralph"

function destructivelyAppendKitten(newKitten) {
	kittens.push(newKitten)
	return kittens
}

function destructivelyPrependKitten(newKitten)	{
	kittens.unshift(newKitten)
	return kittens
}

function destructivelyRemoveLastKitten() {
	kittens.pop()
	return kittens
}

function destructivelyRemoveFirstKitten() { //removes the First kitten from the kittens array:
	kittens.shift()
	return kittens
}

function appendKitten(newKitten) {
	var newArray = [...kittens, newKitten]
	return newArray
}

function prependKitten(newKitten) {
	var newArray = [newKitten, ...kittens]
	return newArray
}

function removeLastKitten() {
	var newArray = kittens.slice(0, kittens.length -1)
	return newArray
}

function removeFirstKitten() {
	var newArray = kittens.slice(1)
	return newArray
}
