const app = "I don't do much."

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
  var kitten = [...kittens, name];
  return kitten;
}

function prependKitten(name) {
  var kitten = [name, ...kittens];
  return kitten;
}

function removeLastKitten() {
  var kitten = kittens.slice(0, kittens.length - 1);
  return kitten;
}

function removeFirstKitten() {
  var kitten = kittens.slice(1);
  return kitten;
}
