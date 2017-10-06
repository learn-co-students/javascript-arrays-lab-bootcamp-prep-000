const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten() {
  var newArray = kittens.pop();
  return newArray;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  return [...kittens, name];
}
function prependKitten(name) {
  return [name, ...kittens];
}
function removeLastKitten() {
  var array = kittens.slice(0, kittens.length-1);
  return array;
}
function removeFirstKitten() {
  var array = kittens.slice(1, kittens.length);
  return array;
}
