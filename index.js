var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = function(name) {
  kittens.push(name)
}


var destructivelyPrependKitten = function(name) {
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop()
}