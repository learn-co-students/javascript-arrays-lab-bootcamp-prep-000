const app = "I don't do much."
kittens = ['Milo', 'Otis', 'Garfield']
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
  return [...kittens, name]
}
function prependKitten(name) {
  return [name, ...kittens]
}
function removeLastKitten() {
  var lastKitten = (kittens.length-1)
  return kittens.slice(0,lastKitten)
}
function removeFirstKitten() {
  return kittens.slice(1)
}