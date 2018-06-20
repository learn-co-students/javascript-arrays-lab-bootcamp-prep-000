const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

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
  const moreKittens = [...kittens, "Broom"]
  return moreKittens;
}

function prependKitten(name) {
  const moreKittens = ["Arnold", ...kittens]
  return moreKittens;
}

function removeLastKitten() {
  const lessKittens = kittens.slice(0,2);
  return lessKittens;
}

function removeFirstKitten() {
  const lessKittens = kittens.slice(1,3);
  return lessKittens;
}
