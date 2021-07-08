var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten){
kittens.push(kitten)
}

function destructivelyPrependKitten(kitten) {
kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(kitten) {
kittens.pop(kitten)
}

function destructivelyRemoveFirstKitten(kitten) {
kittens.shift(kitten)
}

function appendKitten(kitten) {
var newKittens = kittens.concat(kitten)
return newKittens
}

function prependKitten(kitten) {
var newKittens = [kitten, ...kittens]
return newKittens
}

function removeLastKitten() {
var newKittens = kittens.slice(0, kittens.length -1)
return newKittens
}

function removeFirstKitten() {
var newKittens = kittens.slice(1)
return newKittens
}
