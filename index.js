var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(element) {
  return kittens.push(element)
}
function destructivelyPrependKitten(element) {
  return kittens.unshift(element)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(element){
  var newKittens = [...kittens, element];
  return newKittens
}
function prependKitten(element){
  var newKittens = [element, ...kittens];
  return newKittens
}
function removeLastKitten(element){
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten(element){
  return kittens.slice(1)
}
