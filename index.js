const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']

var destructivelyAppendKitten = function(name) {
  kittens.push(name)
  return kittens
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop()
  return kittens
}

var destructivelyRemoveFirstKitten = function() {
kittens.shift()
return kittens
}

var appendKitten = function(name) {
  var foo = [...kittens, name]
  return foo
}

var prependKitten = function(name) {
  var foo = [name, ...kittens]
  return foo
}

var removeLastKitten = function() {
  var foo = kittens.slice(0, kittens.length-1)
  return foo
}

var removeFirstKitten = function() {
  var foo = kittens.slice(1)
  return foo
}
