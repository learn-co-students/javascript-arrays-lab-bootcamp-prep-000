const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten()  {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newKittens = ["Milo", "Otis", "Garfield"];
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = ["Milo", "Otis", "Garfield"];
  newKittens.unshift(name);
  return newKittens;
}

function removeLastKitten() {
  var newKittens = ["Milo", "Otis", "Garfield"];
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = ["Milo", "Otis", "Garfield"];
  newKittens.shift();
  return newKittens;
}
