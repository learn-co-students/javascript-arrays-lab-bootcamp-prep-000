const app = "I don't do much.";

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function appendKitten(name) {
  return [...kittens, name];
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeFirstKitten() {
  return kittens.slice(1);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}