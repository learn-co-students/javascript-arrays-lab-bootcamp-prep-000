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
  var oneMoreKitten = [...kittens, name]
  return oneMoreKitten
}
function prependKitten(name) {
  var oneMoreKitten = [name, ...kittens]
  return oneMoreKitten
}
function removeLastKitten() {
  var oneLessKitten = kittens.slice(0,kittens.length-1)
  return oneLessKitten
}
function removeFirstKitten() {
  var oneLessKitten = kittens.slice(1)
  return oneLessKitten
}
