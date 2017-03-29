const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAddKitten(element) {
	kittens.push(element)
	return kittens
}

function destructivelyPrependKitten(element) {
	kittens.unshift(element)
	return kittens
}

function destructivelyRemoveLastKitten(element) {
	kittens.pop()
	return kittens
}

function destructivelyRemoveFirstKitten(element) {
	kittens.shift()
	return kittens
}

function appendKitten (element) {
	return [...kittens, element]
}
function prependKitten (element) {
	return [element, ...kittens]
}
function removeLastKitten (element) {
	var newArray = kittens
	newArray.pop()
	return newArray
}
function removeFirstKitten (element) {
	var newArray = kittens
	newArray.shift()
	return newArray
}