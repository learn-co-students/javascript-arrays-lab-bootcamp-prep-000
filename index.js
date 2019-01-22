var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
};

function destructivelyRemoveLastKitten() {
  kittens.pop(kittens);
  return kittens
};

function destructivelyRemoveFirstKitten() {
  kittens.shift(kittens);
  return kittens
};

function appendKitten(name) {
  name = [...kittens, name];
  return name;
};

function prependKitten(name) {
  name = [name, ...kittens];
  return name
};

function removeLastKitten() {
  return kittens.slice(0, length - 1)
};

function removeFirstKitten() {
  return kittens.slice(1);
}