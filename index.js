const app = "I don't do much."

var kittens = [
               "Milo",
               "Otis",
               "Garfield"
               ];

function destructivelyAppendKitten(name) {

  return kittens.push(name);
}

function destructivelyPrependKitten(name) {

  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {

  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {

  return kittens.shift(name);
}

function appendKitten(name) {
  var newArray = [...kittens, name];

  return newArray;
}

function prependKitten(name) {

  return [name, ...kittens];
}


function removeLastKitten(name) {
  var solution = kittens.slice(0, 2);

  return solution;
}

function removeFirstKitten(name) {
  var solution = kittens.slice(1);

  return solution;
}
