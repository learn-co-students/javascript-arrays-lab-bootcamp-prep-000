const app = "I don't do much."
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(kitten) {
  return [...kittens, kitten]
}
function prependKitten(kitten) {
  return [kitten, ...kittens];
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten() {
  return kittens.slice(1)
}
