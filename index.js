const app = "I don't do much."

function destructivelyAppendKitten(name){
kittens = ["Milo", "Otis", "Garfield"]
kittens.push(name)
}

function destructivelyPrependKitten(name){
kittens = ["Milo", "Otis", "Garfield"]
kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
kittens = ["Milo", "Otis", "Garfield"]
kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
kittens = ["Milo", "Otis", "Garfield"]
kittens.shift(name)
}

function appendKitten(name){
kittens = ['Milo', 'Otis', 'Garfield']
var kittens2 = [...kittens]
kittens2.push(name)
return kittens2
}

function prependKitten(name){
kittens = ["Milo", "Otis", "Garfield"]
var kittens2 = [...kittens]
kittens2.unshift(name)
return kittens2
}

function removeLastKitten(){
kittens = ["Milo", "Otis", "Garfield"]
var kittens2 = [...kittens]
kittens2.pop()
return kittens2
}

function removeFirstKitten(){
kittens = ["Milo", "Otis", "Garfield"]
var kittens2 = kittens.slice(-2)
return kittens2
}
