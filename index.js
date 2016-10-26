const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield', 'Ralph'];

function destructivelyAppendKitten (name) {
  return kittens.push(name);
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
  var ph = kittens.slice();
  ph.push(name);
  return ph;
}

function prependKitten(name) {
  var ph = kittens.slice();
  ph.unshift(name);
  return ph;
}

function removeLastKitten() {
  var ph = kittens.slice(0,length-1);
  return ph;
}

function removeFirstKitten() {
  var ph = kittens.slice(1);
  return ph;
}
