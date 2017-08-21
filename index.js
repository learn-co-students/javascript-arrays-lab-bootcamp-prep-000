var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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
function appendKitten(name) {
  return [...kittens, name];
}
function prependKitten(name) {
  return [name, ...kittens];
}
function removeLastKitten() {
  var newArray = [...kittens];
  newArray.splice(kittens.length - 1, 1);
  return newArray;
}
function removeFirstKitten() {
  var newArray = [...kittens];
  newArray.shift();
  return newArray;
}
