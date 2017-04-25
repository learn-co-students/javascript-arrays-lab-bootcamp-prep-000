const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(name) {
  var kitten;
  kitten=[...kittens,name];
  return kitten;
}
function prependKitten(name) {
  var kitten;
  kitten=[name,...kittens];
  return kitten;
}
function removeLastKitten() {
  var kitten;
  kitten=kittens.slice(0,kittens.length-1);
  return kitten;
}
function removeFirstKitten() {
  var kitten;
  kitten=kittens.slice(-2);
  return kitten;
}
