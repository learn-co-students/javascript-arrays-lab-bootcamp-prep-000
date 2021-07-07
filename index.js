var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(3)
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift(0)
  return kittens
}
function appendKitten(name) {
  return [...kittens, "Broom"]
}
function prependKitten(name) {
  return ["Arnold", ...kittens]
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}
function removeFirstKitten() {
  return kittens.slice(-2)
}
