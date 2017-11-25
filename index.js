const app = "I don't do much."

function destructivelyAppendKitten(name) {
	kittens.push(name)
}

function destructivelyPrependKitten(name){
	kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
	kittens.pop()
}

function destructivelyRemoveFirstKitten(){
	kittens.shift()
}

function appendKitten(name){
	var arr = [...kittens, name]
	return arr
}

function prependKitten(name){
	var arr = [name, ...kittens]
	return arr
}

function removeLastKitten(){
	var arr = kittens.slice(0, kittens.length - 1)
	return arr
}

function removeFirstKitten(){
	var arr = kittens.slice(1)
	return arr
}
