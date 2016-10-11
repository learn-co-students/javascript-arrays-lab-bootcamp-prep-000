const app = "I don't do much."
var kittens = ["Snuggles", "Mishu"]
function destructivelyAppendKitten (name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift (name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten (name) {
  return [...kittens, name]
}
function prependKitten (name){
  return [name, ...kittens]
}
function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}
function removeFirstKitten() {
  var newKittens2 = kittens.slice(1)
  return newKittens2
}
