const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
};

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
};

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newKittens= [];
  return newKittens = [...kittens, name];
};

function prependKitten(name) {
  var newKittens = [];
  return newKittens = [name, ...kittens];
};

function removeLastKitten() {
  var newKittens = [];
  return newKittens = kittens.slice(0, kittens.length - 1);
};

function removeFirstKitten() {
  var newKittens = [];
  return newKittens = kittens.slice(1);
};
