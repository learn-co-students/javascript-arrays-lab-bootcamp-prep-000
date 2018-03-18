var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}

function appendKitten(name) {
  let newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  let newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  let newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

function removeFirstKitten() {
  let newKittens = kittens.slice(1);
  return newKittens;
}
