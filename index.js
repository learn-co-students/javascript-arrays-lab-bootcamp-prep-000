const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

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

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}


function appendKitten(name) {
  var tmp = [].concat(kittens);
  tmp.push(name);
  return tmp;
}


function prependKitten(name) {
  var tmp = [].concat(kittens);
  tmp.unshift(name);
  return tmp;
}

function removeLastKitten() {
  var tmp = [].concat(kittens);
  tmp.pop();
  return tmp;
}

function removeFirstKitten() {
  var tmp = [].concat(kittens);
  tmp.shift();
  return tmp;
}
