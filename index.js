const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  var newKittens = [...kittens, name]
  return newKittens
}
function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
}
function removeLastKitten() {
  var lessKittens = kittens.slice(0, kittens.length - 1)
  return lessKittens
}
var kittens = ['Milo', 'Otis', 'Garfield']
function removeFirstKitten() {
  var lessKittens = kittens.slice(1)
  return lessKittens
}
