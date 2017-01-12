const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  //appends a kitten to the end of the kittens array
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
//prepends a kitten to the beginning of the kittens array
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
//removes the last kitten from the kittens array
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten() {
//removes the First kitten from the kittens array:
  kittens.shift()
  return kittens;
}

function appendKitten(name) {
  //appends a kitten to the kittens array and returns a new array, leaving the kittens
  //array unchanged
  var appendedKittens = [...kittens, name]
  return appendedKittens;
}

function prependKitten(name) {
  //prepends a kitten to the kittens array and returns a new array, leaving the kittens
  //array unchanged
  var prependedKitten = [name, ...kittens]
  return prependedKitten;
}

function removeLastKitten() {
  //removes the last kitten in the kittens array and returns a new array, leaving the
  //kittens array unchanged:
  var removedLastKitten = kittens.slice(0, kittens.length-1)
  return removedLastKitten;
}

function removeFirstKitten() {
  //removes the first kitten from the kittens array and returns a new array, leaving
  //the kittens array unchanged
  var removedFirstKitten = kittens.slice(1)
  return removedFirstKitten; 
}
