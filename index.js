const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(additionalKitten) {
  kittens.push(additionalKitten)
  return kittens
}
function destructivelyPrependKitten(additionalKitten) {
  kittens.unshift(additionalKitten)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(additionalKitten) {
  var moreKittens = [...kittens, additionalKitten]
  return moreKittens
}
function prependKitten(additionalKitten) {
  var moreKittens = [additionalKitten, ...kittens]
  return moreKittens
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
