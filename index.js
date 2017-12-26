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
  let newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  let firstKitten = [name, ...kittens];
  return firstKitten;
}

function removeLastKitten() {
  let lastKitten = kittens.slice(0, kittens.length - 1);
  return lastKitten;
}

function removeFirstKitten() {
  let minusKitten = kittens.slice(1);
  return minusKitten;
}
