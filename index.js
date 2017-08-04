const app = "I don't do much."
function destructivelyAppendKitten(name) {
kittens.push(name);
}
function destructivelyPrependKitten(name) {
kittens.unshift(name);
}
function destructivelyRemoveFirstKitten() {
kittens.shift();
}
function destructivelyRemoveLastKitten() {
kittens.pop();
}

function appendKitten(name) {
var kittens2 = kittens.concat(name);
return kittens2;
}

function prependKitten(name) {
return [name,...kittens];
}

function removeFirstKitten() {
  var kittens3 = kittens.slice(1);
  return kittens3;
}
function removeLastKitten() {
  var kittens3 = kittens.slice(0, kittens.length - 1);
  return kittens3;
}
