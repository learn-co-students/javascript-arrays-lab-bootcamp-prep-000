const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
}

function removeLastKitten() {
  var moreKittens = kittens.slice(0, kittens.length - 1);
  return moreKittens
}

function removeFirstKitten() {
  var moreKittens = kittens.slice(1);
  return moreKittens
}
