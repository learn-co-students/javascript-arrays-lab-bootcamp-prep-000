const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(array){
	kittens.push("Ralph")
	return kittens
}

function destructivelyPrependKitten(array){
	kittens.unshift("Bob")
	return kittens
}

function destructivelyRemoveLastKitten(array){
	kittens.pop()
	return kittens
}

function destructivelyRemoveFirstKitten(array){
	kittens.shift()
	return kittens
}

function appendKitten(array){
	var newArray=[...kittens, 'Broom']
	return newArray
}

function prependKitten(array){
	var newArray=["Arnold", ...kittens]
	return newArray
}

function removeLastKitten(array){
	var newArray=kittens.slice(0, kittens.length - 1)
	return newArray
}

function removeFirstKitten(array){
	var newArray=kittens.slice(1)
	return newArray
}
