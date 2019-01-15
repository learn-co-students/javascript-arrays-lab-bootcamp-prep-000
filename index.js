var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

// appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
//prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
//removes the last kitten from thekittens array
function destructivelyRemoveLastKitten() {
  kittens.pop(name)
  return kittens
}
//removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten() {
  kittens.shift(name)
  return kittens
}
//appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name) {
  return kittens.concat(name)
}
//prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name) {
  return [].concat(name, kittens)
}
//removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
//removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten() {
 return kittens.slice(1)
}
