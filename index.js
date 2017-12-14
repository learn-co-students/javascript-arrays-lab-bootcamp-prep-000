const app = "I don't do much."
//mutates program state, does not produce new array
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
//non mutate array returns new array, leaving kittens unchanged
function appendKitten(name) {
  var newArray = [...kittens]
  newArray.push(name)
  return newArray
}

function prependKitten(name) {
  var newArray = [...kittens]
   newArray.unshift(name)
  return newArray
}

function removeLastKitten() {
  var newArray = [...kittens]
  newArray.pop(name)
  return newArray
}

function removeFirstKitten() {
  //copies kittens array into newArray
  var newArray = [...kittens]
  //calls unshift, which removes 1st kitten (name) on the copy, use shift method to catch the deleted item in an array and return it
  newArray.shift(name)
  //returns the copy
  return newArray
}