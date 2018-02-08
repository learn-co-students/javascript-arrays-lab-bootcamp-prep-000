const app = "I don't do much."
function destructivelyAppendKitten (a){
  kittens.push(a)
}
function destructivelyPrependKitten (a){
  kittens.unshift(a)
}
function destructivelyRemoveLastKitten (a){
  kittens.pop(a)
}
function destructivelyRemoveFirstKitten (a) {
  kittens.shift(a)
}
function appendKitten (a) {
  return [...kittens, a]
}
function prependKitten (a) {
  return [a, ...kittens]
}
function removeLastKitten () {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten () {
  return kittens.slice(1)
}