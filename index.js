const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten (Ralph) {
kittens.push('Ralph')
return kittens
}

function destructivelyPrependKitten (Bob) {
kittens.unshift('Bob')
return kittens
}

function destructivelyRemoveLastKitten () {
kittens.pop()
return kittens
}

function destructivelyRemoveFirstKitten () {
kittens.shift()
return kittens
}

function appendKitten (Broom) {
var kittens1 = [...kittens, 'Broom']
return kittens1
}

function prependKitten (Arnold) {
var kittens1 = ["Arnold",...kittens]
return kittens1
}

function removeLastKitten () {
var kittens1 = kittens.slice(0, kittens.length - 1)
return kittens1
}

function removeFirstKitten () {
var kittens1 = kittens.slice(1)
return kittens1
}