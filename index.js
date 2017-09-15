const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];

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
  var newKittensArray = [...kittens, name];
  return newKittensArray;
}

function prependKitten(name) {
  var newKittenArray = [name, ...kittens];
  return newKittenArray;
}

function removeLastKitten() {
  var newKittenArray = kittens.slice(0, kittens.length - 1);
  return newKittenArray;
}

function removeFirstKitten() {
  var newKittenArray = kittens.slice(1);
  return newKittenArray;
}
