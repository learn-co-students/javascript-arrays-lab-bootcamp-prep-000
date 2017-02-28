const app = "I don't do much."

//Turns out I did not need any of this:
//var Arrays = () => {
  // kittens = ["Milo", "Otis", "Garfield"]
//}

//var kittens = function() {
//kittens = ["Milo", "Otis", "Garfield"]
//}
//kittens()

var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name1) {
  //kittens = ["Milo", "Otis", "Garfield"]
  kittens.push(name1)
  // return kittens
}
destructivelyAppendKitten("Ralph")


var destructivelyPrependKitten = function(name2) {
  //kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name2)
  // return kittens
}
destructivelyPrependKitten("Bob")

var destructivelyRemoveLastKitten = function() {
  kittens.pop()
  // return kittens
}
destructivelyRemoveLastKitten()

var destructivelyRemoveFirstKitten = function() {
  kittens.shift()
  //Note: did not need return line
}
destructivelyRemoveFirstKitten()

var appendKitten = function(name) {
  var newArray1 = [...kittens, name]
  return newArray1
}
appendKitten("Broom")

var prependKitten = function(name) {
  var nDPrepend = [name, ...kittens]
  return nDPrepend
}
prependKitten("Arnold")

var removeLastKitten = function() {
  var nDRemove = kittens.slice(0, kittens.length - 1)
  return nDRemove
}
removeLastKitten()


var removeFirstKitten = function() {
  var nDRemove2 = kittens.slice(1)
  return nDRemove2
}
removeFirstKitten()
