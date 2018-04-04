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
  //This is not required
  var kittensCute = [...kittens, name];
  //return [...kittens, name];
  return kittensCute;
}

function prependKitten(name) {
  //This is not required
  var kittensCute = [name, ...kittens];
  //return [name, ...kittens];
  return kittensCute;
}

function removeLastKitten() {
  //This is not required
  var kittensCute = kittens.slice(0, kittens.length - 1);
  //return kittens.slice(0, kittens.length);
  return kittensCute;
}

function removeFirstKitten() {
  //This is not required
  var kittensCute = kittens.slice(1);
  //return kittens.slice(1);
  return kittensCute;
}