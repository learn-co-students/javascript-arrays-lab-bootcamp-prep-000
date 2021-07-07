var kittens = ['Milo','Otis','Garfield']
var kittens2 = ['Broom']
var kittens3 = ['Arnold']//define your array here
// Add your functions and code here
function destructivelyAppendKitten (Ralph,kitten) {
kittens.push(Ralph)
  return kittens
}
function destructivelyPrependKitten (bob,kitten) {
  kittens.unshift(bob)
  return kittens
}
function destructivelyRemoveLastKitten (Garfield) {
  kittens.pop(Garfield)
  return kittens
}
function destructivelyRemoveFirstKitten (Milo) {
  kittens.shift(Milo)
  return kittens
}
function appendKitten (kittens2) {
    return kittens.concat(kittens2)
}
function prependKitten (kittens3) {
  return [kittens3,...kittens]
  
}
function removeLastKitten () {
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten () {
  return kittens.slice(1)
  
}