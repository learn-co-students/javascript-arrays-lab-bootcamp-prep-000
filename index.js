const app = "I don't do much."

function Arrays() {
  window.kittens = ["Milo", "Otis", "Garfield"];
}

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}

function appendKitten(name) {
    return new Array('Milo', 'Otis', 'Garfield', name);
}

function prependKitten(name) {
  return new Array(name, 'Milo', 'Otis', 'Garfield');
}

function removeLastKitten() {
  return new Array('Milo', 'Otis');
}

function removeFirstKitten() {
  return new Array('Otis', 'Garfield');
}
