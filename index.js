const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  var tempArray = kittens.slice(0);
  tempArray.pop();
  return tempArray;
}

function removeFirstKitten() {
  var tempArray = kittens.slice(0);
  tempArray.shift();
  return tempArray;
}
