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
  var array = kittens.slice(0, kittens.length);
  array.push(name);
  return array;
}

function prependKitten(name) {
  var array = kittens.slice(0, kittens.length);
  array.unshift(name);
  return array;
}

function removeLastKitten() {
  var array = kittens.slice(0, kittens.length);
  array.pop();
  return array;
}

function removeFirstKitten() {
  var array = kittens.slice(0, kittens.length);
  array.shift();
  return array;
}