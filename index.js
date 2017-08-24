const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(catName) {
    return kittens.push(catName);
}

function destructivelyPrependKitten(catName) {
    return kittens.unshift(catName);
}

function destructivelyRemoveLastKitten() {
    return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
    return kittens.shift();
}

function appendKitten(catName) {
  var newKittens = kittens;
  newKittens = [...newKittens, catName];
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens;
  newKittens = [name, ...newKittens];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens;
  newKittens = newKittens.slice(0, newKittens.length - 1);
  return newKittens;
}

function removeFirstKitten() {
    var newKittens = kittens;
    newKittens = newKittens.slice(1);
    return newKittens;
}
