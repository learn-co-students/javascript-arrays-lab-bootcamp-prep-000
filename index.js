const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten (name) {
kittens.push ("Ralph");
}
function destructivelyPrependKitten(name) {
  kittens.unshift ("Bob");
}
function destructivelyRemoveLastKitten (name) {
  kittens.pop ();
}
function destructivelyRemoveFirstKitten (name) {
  kittens.shift();
}
function appendKitten (name) {
  var kittens4 = kittens.slice();
  kittens4.push("Broom");
  return kittens4;

}
function prependKitten (name) {
  var kittens4 = kittens.slice();
  kittens4.unshift("Arnold");
  return kittens4;
}
function removeLastKitten (name) {
  var kittens4 = kittens.slice();
  kittens4.pop();
  return kittens4;
}
function removeFirstKitten (name) {
  var kittens4 = kittens.slice();
  kittens4.shift();
  return kittens4;
}
