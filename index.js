const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
}
function destructivelyRemoveLastKitten(kitten) {
  kittens.pop(kitten);
}
function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten);
}
function appendKitten(kitten) {
  return [...kittens, kitten];
}
function prependKitten(kitten) {
  return [kitten, ...kittens];
}
function removeLastKitten() {
  return kittens.slice(0, 2);
}
function removeFirstKitten() {
  return kittens.slice(1)
}
