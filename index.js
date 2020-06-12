var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
} function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
} function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
} function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
} function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
} function prependKitten(name) {
  var array = [name, ...kittens];
  return array;
} function removeLastKitten() {
  var array = kittens.slice(0, kittens.length -1);
  return array;
} function removeFirstKitten() {
  var array = kittens.slice(1);
  return array;
}
