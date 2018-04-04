const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var kittensCute = [...kittens, name];
  return kittensCute;
}

function prependKitten(name) {
  var kittensCute = [name, ...kittens];
  return kittensCute;
}

function removeLastKitten() {
  var kittensCute = kittens.slice(0, kittens.length - 1);
  return kittensCute;
}

function removeFirstKitten() {
  var kittensCute = kittens.slice(1);
  return kittensCute;
}