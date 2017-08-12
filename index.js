const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
   var newKittens = kittens.slice();
   newKittens.push(name);
   return newKittens;
}

function prependKitten(name) {
  var kitty = kittens.slice();
  kitty.unshift(name);
  return kitty;
}

function removeLastKitten() {
  var lastKittenGone = kittens.slice();
  lastKittenGone.pop();
  return lastKittenGone;
}

function removeFirstKitten() {
  var firstKittenGone = kittens.slice();
  firstKittenGone.shift();
  return firstKittenGone;
}
