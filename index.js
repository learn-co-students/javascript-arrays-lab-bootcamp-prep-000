const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(){
  var kitten = [...kittens,"Broom"]
  return kitten
}
function prependKitten(){
  var kitten = ["Arnold", ...kittens]
  return kitten
}
function removeLastKitten() {
  var kitten = kittens.slice(0,kittens.length-1);
  return kitten
}
function removeFirstKitten() {
  var kitten = kittens.slice(1);
  return kitten
}
