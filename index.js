var kittens = ['loki', 'charlie', 'char']
function destructivelyAppendKitten(x) {
  kittens.push(x)
  return kittens
}
function destructivelyPrependKitten(x) {
  kittens.unshift(x)
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
  var newkittens = [...kittens, name]
  return newkittens
}
function prependKitten(x) {
  var newkittens = [x, ...kittens]
  return newkittens
}
function removeLastKitten() {
  var newkittens = kittens.slice(0, kittens.length - 1)
  return newkittens
}
function removeFirstKitten() {
  var newkittens = kittens.slice(1)
  return newkittens
}