const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var newArray = [...kittens, name]
  return newArray
}
function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}
function removeLastKitten(name) {
  return kittens.slice(0, kittens.length-1)
}
function removeFirstKitten(name) {
  return kittens.slice(1, kittens.length)
}