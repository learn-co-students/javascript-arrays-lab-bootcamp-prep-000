const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
var name = 'Ralph'
function destructivelyAppendKitten(name){
kittens.push('Ralph')
return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
var name = 'Bob'
function destructivelyPrependKitten(name){
kittens.unshift('Bob')
return kittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function  destructivelyRemoveLastKitten(array){
kittens.pop()
}
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(array){
kittens.shift()
}
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
var name = "Broom"
var newKittens = [ ...kittens, "Broom"]
return newKittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name){
var name = "Arnold"
var newKittens = ["Arnold", ...kittens]
return newKittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten(array){
var newKittens = kittens.slice(0, kittens.length - 1)
return newKittens
}
var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten(array){
var newKittens = kittens.slice(1)
return newKittens
}
