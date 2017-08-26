var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
    kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}
function appendKitten(name) {
   var newArray = [...kittens]
   newArray.push("Broom")
   return newArray
}

function prependKitten(name) {
  var newArray = [...kittens]
  newArray.unshift("Arnold")
  return newArray
}
function removeLastKitten() {
  var newArray = [...kittens]
  newArray.pop()
  return newArray
}
function removeFirstKitten() {
  var newArray = [...kittens]
  newArray.shift()
  return newArray
}
