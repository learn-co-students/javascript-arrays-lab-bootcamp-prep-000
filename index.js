// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}
function appendKitten(name) {
  var newArray = kittens.concat(name)
  return newArray
}
function prependKitten(name) {
  var newArray = kittens.slice(name)
  newArray.unshift(name)
  return newArray
}
function removeLastKitten(name) {
  var newArray = kittens.slice(name)
  newArray.pop(name)
  return newArray
}
function removeFirstKitten(name) {
  var newArray = kittens.slice(name)
  newArray.shift(name)
  return newArray
}