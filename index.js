const app = "I don't do much."

let kittens = ["Milo", "Otis", "Garfield"];

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
  let newKittens = [...kittens, name];
  //newKittens = kittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  let newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  let newKittens = [...kittens]
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten() {
  let newKittens = [...kittens];
  newKittens.shift();
  return newKittens
}
