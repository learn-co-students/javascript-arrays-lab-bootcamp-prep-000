const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
 return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name) {
  return  [...kittens, name]
}
function prependKitten(name) {
  return [name, ...kittens]
}
function removeFirstKitten() {
  return kittens.slice(1)
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}