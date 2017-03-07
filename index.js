 const app = "I don't do much."


function destructivelyAppendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens = ["Milo", "Otis", "Garfield"];
  return kittens.shift();
}

function appendKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = [...kittens, name];
  return newKittens
}

function prependKitten(name) {
  kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = [name, ...kittens];
  return newKittens
}

function removeLastKitten() {
  const kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = kittens;
  newKittens.pop();
  return newKittens
}

function removeFirstKitten() {
  const kittens = ["Milo", "Otis", "Garfield"];
  var newKittens = kittens;
  newKittens.shift();
  return kittens
}
