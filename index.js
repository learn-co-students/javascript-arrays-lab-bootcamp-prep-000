function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(kitten) {
  return [...kittens, kitten];
}
function prependKitten(kitten) {
  return [kitten, ...kittens];
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten() {
  return kittens.slice(1);
}
