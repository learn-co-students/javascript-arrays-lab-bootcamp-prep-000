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
  var kittensResult = [...kittens, name];
  return kittensResult;
}

function prependKitten(name) {
  var kittensResult = [name, ...kittens];
  return kittensResult;
}

function removeLastKitten() {
  var kittensResult = kittens.slice(0, kittens.length-1);
  return kittensResult;
}

function removeFirstKitten() {
  var kittensResult = kittens.slice(1);
  return kittensResult;
}