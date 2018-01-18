const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  var array = [...kittens, name]
  return array
}
function prependKitten(name) {
  var newarray = [name, ...kittens]
  return newarray
}
function removeLastKitten() {
  var newarray = kittens.slice(0,kittens.length-1)
  return newarray
}
function removeFirstKitten() {
  var newarray = kittens.slice(1)
  return newarray
}
