const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
  kittens = [...kittens, "Broom"];
  return kittens;
}

function prependKitten(name) {
  kittens = ["Arnold", ...kittens];
  return kittens;
}

function removeLastKitten(name) {
  kittens = kittens.slice(0, kittens.length - 1);
  return kittens;
}

function removeFirstKitten(name) {
  kittens = kittens.slice(1);
  return kittens;
}
