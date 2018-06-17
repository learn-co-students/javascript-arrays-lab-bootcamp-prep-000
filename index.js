const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]

//add object to end of array
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

//add object to beginning of array
function destructivelyPrependKitten (name) {
  return kittens.unshift(name)
}

//removes the first object from array
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

//removes the last object of array
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

//returns new array with added object at the end of array
function appendKitten(name) {
  var innerArray = [...kittens, name]
  return innerArray
}

//returns new array with added object at the beginning of array
function prependKitten(name) {
  var innerArray = [name,...kittens]
  return innerArray
}

//returns new array without first object
function removeFirstKitten() {
  var innerArray = kittens.slice(1)
  return innerArray
}

//returns new array without last object
function removeLastKitten() {
  var innerArray = kittens.slice(0,kittens.length-1)
  return innerArray
}
