const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield"
];

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
};
kittens.pop();

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
};
kittens.shift();

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
};
kittens.push("Garfield");

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
};
kittens.unshift("Milo");

function appendKitten(name) {
  return [...kittens, name]
};

function prependKitten(name) {
  return [name, ...kittens]
};

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
};

function removeFirstKitten() {
  return kittens.slice(1)
};
