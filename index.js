const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var lastKitten = [...kittens, name];
  return lastKitten;
}

function prependKitten(name) {
  var firstKitten = [name, ...kittens];
  return firstKitten;
}

function removeLastKitten(name) {
  var lastKitten = kittens.slice(0, kittens.length - 1);
  return lastKitten;
}

function removeFirstKitten(name) {
  var firstKitten = [...kittens.slice(1)];
  return firstKitten;

}
