const app = "I don't do much."
function resetKittens() {
  var kittens = new Array("Milo", "Otis", "Garfield");
}

function destructivelyAppendKitten(name) {
  kittens.push(name);
  resetKittens();
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  resetKittens();
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  resetKittens();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  resetKittens();
}

function appendKitten(name) {
  return [...kittens, (name)];
}

function prependKitten(name) {
  return [(name), ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, -1);
}

function removeFirstKitten() {
  return kittens.slice(1)
}