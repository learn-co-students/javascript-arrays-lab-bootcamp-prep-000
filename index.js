const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
//  newarray = kittens;
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function appendKitten(name) {
  var newarray;
  newarray = kittens.slice(0);
  newarray.push(name);
  return newarray;
}

function prependKitten(name) {
  var newarray;
  newarray = kittens.slice(0);
  newarray.unshift(name);
  return newarray;
}

function removeLastKitten() {
  var newarray;
  newarray = kittens.slice(0);
  newarray.pop();
  return newarray;
}

function removeFirstKitten() {
  var newarray;
  newarray = kittens.slice(0);
  newarray.shift();
  return newarray;
}
