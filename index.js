const app = "I don't do much."

function Arrays () {
    var kittens = ["Milo", "Otis", "Garfield"];
}

function kittens () {
  var kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten (name) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}

function appendKitten (name) {
  var appendKitten1 = [...kittens, "Broom"];
  return appendKitten1;
}

function prependKitten (name) {
  var prependKitten1 = ["Arnold",...kittens];
  return prependKitten1;
}

function removeLastKitten () {
  var removeLastKitten1 = kittens.slice(0, kittens.length -1);
  return removeLastKitten1;
}

function removeFirstKitten () {
  var removeFirstKitten1 = kittens.slice(1);
  return removeFirstKitten1;
}
