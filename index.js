const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAddKitten(array, name) {
	array.push(name)
	return array
}

function destructivelyPrependKitten(array,name) {
	array.unshift(name)
	return array
}

function destructivelyRemoveLastKitten(array, name) {
	array.pop()
	return array
}

function destructivelyRemoveFirstKitten(array, name) {
	array.shift()
	return array
}

function appendKitten (array, name) {
	return [...array, name]
}
function prependKitten (array, name) {
	return [name ...array]
}
function removeLastKitten (array, name) {
	var newArray = array
	newArray.pop()
	return newArray
}
function removeFirstKitten (array, name) {
	var newArray = array
	newArray.shift()
	return newArray
}