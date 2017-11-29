var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  var e = kittens.pop();
  return e;
}

function destructivelyRemoveFirstKitten() {
  var e = kittens.shift();
  return e;
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten (name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var e = kittens.slice(0, kittens.length -1);
  return e;
}

function removeFirstKitten() {
  var e = kittens.slice(-2);
  return e;
}
