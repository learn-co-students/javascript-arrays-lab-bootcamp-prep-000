var kittens = ['Milo', 'Otis', 'Garfield']
var name = 'Ralph'

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
  [...kittens,"Broom"]
  var kittens = [...kittens,"Broom"]
  return kittens
}