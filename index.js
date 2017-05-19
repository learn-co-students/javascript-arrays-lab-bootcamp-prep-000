const app = "I don't do much."
function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(Broom) {
  var kitten = ['Milo', 'Otis', 'Garfield'];
  var newKittens = [...kitten, "Broom"];
  return newKittens;
}

function prependKitten(Arnold) {
  var kittens = ["Milo", "Otis", "Garfield"];
  var newKitten = ["Arnold", ...kittens]
  return newKitten;
}

function removeLastKitten() {
  var kitten = ["Milo", "Otis", "Garfield"];
  var newKitten = kitten.slice(0, kitten.length - 1);
  return newKitten;
}
function removeFirstKitten() {
  var kitten = ["Milo", "Otis", "Garfield"];
  var newKitten = kitten.slice(1);
  return newKitten;
}
