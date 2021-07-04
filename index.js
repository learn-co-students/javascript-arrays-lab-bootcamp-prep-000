var kittens = [] //define your array here

// Add your functions and code here
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
  var kittens1 = kittens.concat(name)
  return kittens1
}
function prependKitten(name) {
  var kittens1 = [name, ...kittens]
  return kittens1
}
function removeLastKitten() {
  var kittens1 = kittens.slice(0, kittens.length - 1)
  return kittens1
}
function removeFirstKitten() {
  var kittens1 = kittens.slice(kittens.length - 2)
  return kittens1
}