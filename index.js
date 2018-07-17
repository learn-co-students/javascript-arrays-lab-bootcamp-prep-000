kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}
function appendKitten(name) {
  var kittens2 = [...kittens, name];
  return kittens2;
}
function prependKitten(name) {
  var kittens3 = [name, ...kittens];
  return kittens3;
}
function removeLastKitten(name) {
  var kittens4 = kittens.slice(0, kittens.length - 1);
  return kittens4;
}
function removeFirstKitten(name) {
  var kittens5 = kittens.slice(1);
  return kittens5;
}