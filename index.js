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
  var appKit = [...kittens, name];
  return appKit;
}

function prependKitten(name) {
  var prepKit = [name, ...kittens];
  return prepKit;
}

function removeLastKitten() {
  var remLasKit = kittens.slice(0, kittens.length - 1);
  return remLasKit
}

function removeFirstKitten() {
  var remFirKit = kittens.slice(-2);
  return remFirKit;
}
