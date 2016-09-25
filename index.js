const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  var name = "Ralph";
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  var name = "Bob";
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

 function appendKitten(name) {
  var kittens2 = [...kittens, name];
  return kittens2;
}

function prependKitten(name) {
  var kittens3 = [name, ...kittens];
  return kittens3;
}

function removeLastKitten() {
  var kittens4 = kittens.slice(0,2);
  return kittens4;
}

function removeFirstKitten() {
  var kittens5 = kittens.slice(1);
  return kittens5;
}
