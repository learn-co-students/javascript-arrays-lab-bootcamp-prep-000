const app = "I don't do much."

function destructivelyAppendKitten(name) {

  kittens.push(name);
  return kittens;

}

function destructivelyRemoveLastKitten(name) {

  kittens.pop(name);
  return kittens;

}

function destructivelyPrependKitten(name) {

  kittens.unshift(name);
  return kittens;

}

function destructivelyRemoveFirstKitten() {

  kittens.shift(name);
  return kittens;

}

function appendKitten(name) {

  var kitten = kittens.slice(0);
  kitten.push(name);
  return kitten;

}

function prependKitten(name) {

  var kitten = kittens.slice(0);
  kitten.unshift(name);
  return kitten;

}

function removeLastKitten(name) {

  var kitten = kittens.slice(0);
  kitten.pop(name);
  return kitten;

}

function removeFirstKitten(name) {

  var kitten = kittens.slice(0);
  kitten.shift(name);
  return kitten;

}
