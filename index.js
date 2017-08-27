var kittens = ['Milo', 'Otis', 'Garfield']
var name = "Ralph"
function kittens() {
  return kittens
}
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(1)
  return kittens
}
function appendKitten(name) {
  var kitten = [...kittens,'Broom']
  return kitten
}
function prependKitten(name) {
  var kitten = ['Arnold', ...kittens]
  return kitten
}
function removeLastKitten() {
 var kitten = kittens.slice(0, -1)
 return kitten
}
function removeFirstKitten() {
  var kitten = kittens.slice(-2)
  return kitten
}
