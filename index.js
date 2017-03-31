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

function removeFirstKitten() {
  var newKittens = [...kittens.slice(1)];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = [...kittens.slice(0, kittens.length - 1)];
  return newKittens;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}
