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
  const newKitten = kittens.concat(name);
  return newKitten;
}

function prependKitten(name) {
  const newLastKitten = [name,...kittens];
  return newLastKitten;
}

function removeLastKitten() {
  const killLastKitten = kittens.slice(0, kittens.length -1);
  return killLastKitten;
}

function removeFirstKitten() {
  const killFirstKitten = kittens.slice(1);
  return killFirstKitten;
}

