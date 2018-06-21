function Arrays() {
  kittens = ["Milo", "Otis", "Garfield"];
}

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name];
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens = [name, ...kittens];
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
  var kittens = ["Milo", "Otis", "Garfield"];
  return [...kittens, name];
}

function prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  return [name, ...kittens];
}

function removeLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop();
  return kittens;
}

function removeFirstKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.shift();
  return kittens;
}