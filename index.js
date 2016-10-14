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

function removeLastKitten(name) {
  var AAA = kittens.slice(0, kittens.length -1);
  return AAA;
}

function removeFirstKitten(name) {
  var AAA = kittens.slice(1);
  return AAA;
}

function appendKitten(name) {
  var A = [...kittens, name];
  return A;
}

function prependKitten(name) {
  var AA = [name, ...kittens];
  return AA;
}
