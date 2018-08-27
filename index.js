var kittens = ["Milo", "Otis", "Garfield"]

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
  var newKittens= [...kittens];
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newkittens= [...kittens];
  newkittens.unshift(name);
  return newkittens;
}

function removeLastKitten(name) {
  var removeLastKitten= [...kittens];
  removeLastKitten.pop(name);
  return removeLastKitten
}

function removeFirstKitten(name) {
  var removeFirstKitten= [...kittens];
  removeFirstKitten.shift(name);
  return removeFirstKitten;
}
