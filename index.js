const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
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
  var newAppend = kittens.slice();
  newAppend.push(name);
  return newAppend;
}

function prependKitten(name) {
  var newAppend = kittens.slice();
  newAppend.unshift(name);
  return newAppend
}

function removeLastKitten() {
  var newAppend = kittens.slice();
  newAppend.pop();
  return newAppend;
}

function removeFirstKitten() {
  var newAppend = kittens.slice()
  newAppend.shift();
  return newAppend;
}