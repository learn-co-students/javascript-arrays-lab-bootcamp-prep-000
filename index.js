const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
}

// function destructivelyAddElementToEndOfArray(currentArray, element) {
//   currentArray = currentArray.push(element)
//   console.log(currentArray)
// }

function destructivelyPrependKitten(name) {
	return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
	return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
	return kittens.shift()
}

function appendKitten(name) {
	var newArray = [...kittens, "Broom"]
	return newArray
}

function prependKitten(name) {
	var newArray = [name, ...kittens]
	return newArray
}

function removeLastKitten() {
	var newArray = kittens.slice(0, kittens.length - 1)
	return newArray
}

function removeFirstKitten() {
	var newArray = kittens.slice(1)
	return newArray
}
