const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name){
kittens.push(name)
}

var destructivelyPrependKitten = function(name){
kittens.unshift(name)
}

var destructivelyRemoveLastKitten = function(){
kittens.pop()
}

var destructivelyRemoveFirstKitten = function(){
kittens.shift()
}

var appendKitten = function(name){
var newKittens = [...kittens, name]
return newKittens
}

var prependKitten = function(name){
var newKittens = [name, ...kittens]
return newKittens
}

var removeLastKitten = function(){
var newKittens = kittens // leaves kittens unchanged
return newKittens.slice(0, newKittens.length - 1) // start at 0 till 2nd to last
}

var removeFirstKitten = function(){
//var newKittens = kittens // leaves kittens unchanged
return kittens.slice(1) //start at 1 till the end, avoiding 0
}
