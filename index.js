const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var kittensNew = [...kittens, name];
  return kittensNew;
}

function prependKitten(name) {
  var kittensNew = [name, ...kittens];
  return kittensNew;
}

function removeLastKitten() {
  var kittensNew = kittens.slice(0, kittens.length - 1);
  return kittensNew;
}

function removeFirstKitten() {
  var kittensNew = kittens.slice(1);
  return kittensNew;
}
