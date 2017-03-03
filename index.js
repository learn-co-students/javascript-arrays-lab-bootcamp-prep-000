const app = "I don't do much."

var destructivelyAppendKitten = (name) => {
  kittens.push(name);
}
var destructivelyPrependKitten = (name) => {
  kittens.unshift(name);
}
var destructivelyRemoveLastKitten = (name) => {
  kittens.pop(name);
}
var destructivelyRemoveFirstKitten = (name) => {
  kittens.shift(name);
}
var appendKitten = (name) => {
  var newKittens = kittens.slice();
  newKittens.push(name);
  return newKittens;
}
var prependKitten = (name) => {
  var newKittens = kittens.slice();
  newKittens.unshift(name);
  return newKittens;
}
var removeLastKitten = (name) => {
  var newKittens = kittens.slice();
  newKittens.pop(name);
  return newKittens;
}
var removeFirstKitten = (name) => {
  var newKittens = kittens.slice();
  newKittens.shift(name);
  return newKittens;
}
