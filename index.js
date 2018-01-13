var kittens = ['Milo', 'Otis', 'Garfield'] 
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop(name)
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift(name)
}
function appendKitten(name) {
  var newkitten = [...kittens, name]
  return newkitten
}
function prependKitten(name) {
  var anotherkitten = [name,...kittens]
  return anotherkitten
}
function removeFirstKitten() {
  return kittens.slice(1)
}
function removeLastKitten() {
  return kittens.slice(0,kittens.length - 1)
}
