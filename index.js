const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(name) {
  var akitten = [...kittens,name]
  return akitten
}
function prependKitten(name) {
  var pkitten = [name,...kittens]
  return pkitten
}
function removeLastKitten(name) {
  var rlkitten = kittens.slice(0, kittens.length -1)
  return rlkitten
}
function removeFirstKitten(name) {
  var rfkitten = kittens.slice(1)
  return rfkitten
}
