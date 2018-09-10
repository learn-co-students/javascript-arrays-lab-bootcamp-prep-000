function destructivelyAppendKitten(name) {
  window.kittens.push(name);
}

function destructivelyPrependKitten(name) {
  window.kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  window.kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  window.kittens.shift();
}

function appendKitten(name) {
  let kittens = window.kittens.slice();
  kittens.push(name);
  return kittens;
}

function prependKitten(name) {
  let kittens = window.kittens.slice();
  kittens.unshift(name);
  return kittens;
}

function removeLastKitten() {
  let kittens = window.kittens.slice();
  kittens.pop();
  return kittens;
}

function removeFirstKitten() {
  let kittens = window.kittens.slice();
  kittens.shift();
  return kittens;
}