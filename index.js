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
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var kittensMeow = [...kittens, name];
  return kittensMeow;
}

function prependKitten(name) {
  var kittensMeow = [name, ...kittens];
  return kittensMeow;
}

function removeLastKitten() {
  var kittensMeow = kittens.slice(0, length-1);
  return kittensMeow;
}

function removeFirstKitten() {
  var kittensMeow = kittens.slice(1);
  return kittensMeow;
}
