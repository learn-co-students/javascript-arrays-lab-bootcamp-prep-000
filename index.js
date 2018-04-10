var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(b) {
  kittens.push(b);
  return kittens;
}

function destructivelyPrependKitten(b) {
  kittens.unshift(b);
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

function appendKitten(b) {
  var a = kittens.slice();
  a.push(b);
  return a;
}

function prependKitten(b) {
  var a = kittens.slice();
  a.unshift(b);
  return a;
}

function removeLastKitten() {
  var a = kittens.slice();
  return a.slice(0, a.length - 1);
}

function removeFirstKitten() {
  var a = kittens.slice();
  return a.slice(1, a.length);
}
