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
  var new_kittens = kittens.slice();
  new_kittens.push(name);
  return new_kittens;
}

function prependKitten(name) {
  var new_kittens = kittens.slice();
  new_kittens.unshift(name);
  return new_kittens;
}

function removeLastKitten() {
  var new_kittens = kittens.slice();
  new_kittens.pop();
  return new_kittens;
}

function removeFirstKitten() {
  var new_kittens = kittens.slice();
  new_kittens.shift();
  return new_kittens;
}